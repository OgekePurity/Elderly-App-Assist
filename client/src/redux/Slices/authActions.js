 export const loginSuccess = (token, refreshToken, user) => ({
    type: 'LOGIN_SUCCESS',
    token,
    refreshToken,
    user,
  });
  
  export const accountCreated = (user) => ({
    type: 'ACCOUNT_CREATED',
    user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });