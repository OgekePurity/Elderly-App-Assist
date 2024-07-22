import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JwtPayload } from 'jsonwebtoken';
import User, { IUser } from "../models/User";
import cookieParser from "cookie-parser";

// Register controller
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        
      },
    };

    const accessToken = jwt.sign(
      payload,
      process.env.JWT_ACCESS_TOKEN as string,
      { expiresIn: "1h" }
    );

    res.json({ user, accessToken })
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send("Server error");
    } else {
      console.error("Unexpected error", err);
      res.status(500).send("Unexpected server error");
    }
  }
};

// Login controller
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    const accessToken = jwt.sign(
      payload,
      process.env.JWT_ACCESS_TOKEN as string,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_REFRESH_TOKEN as string,
      { expiresIn: "10d" }
    );

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      expires: expires,
    });

    (user as any).refreshToken = refreshToken;
    await (user as any).save();
    res.json({ user, accessToken, refreshToken });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send("Server error");
      console.error(err.message);
      res.status(500).json({ error: "Server error", message: err.message });
    } else {
      console.error("Unexpected error", err);
      res.status(500).send("Unexpected server error");
      console.error("Unexpected error", err);
    }
  }
};


// Refresh Access Token controller
// Refresh Access Token controller
export const refreshAccessToken = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided" });
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN as string) as JwtPayload;
    if (!payload || !payload.user) {
      return res.status(401).json({ message: "Invalid payload" });
    }

    const user = await User.findById(payload.user.id);
    if (!user) {
      return res.status(401).json({ message: "Invalid user" });
    }

    const newAccessToken = jwt.sign(
      { user: { id: user.id } },
      process.env.JWT_SECRET_TOKEN as string,
      { expiresIn: "1h" }
    );

    res.json({ accessToken: newAccessToken });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).json({ message: "Error refreshing access token" });
    } else {
      console.error("Unexpected error", err);
      res.status(500).json({ message: "Unexpected error refreshing access token" });
    }
  }
};