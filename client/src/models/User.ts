export interface RegisterUserPayload {
    name: string,
    email: string,
    password: string
}
export interface LoginUserPayload {
    email: string,
    password: string,
}
export interface FetchUserPayload {
    userId: string;
}

export interface User{
    _id: string,
    name: string,
    email: string,
    password: string
    refreshToken: string;
}