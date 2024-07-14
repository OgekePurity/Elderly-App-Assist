// Example of token validation
export const isAuthenticated = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  
  // Check if tokens exist and are not expired
  if (accessToken && refreshToken) {
      // Perform validation logic here (e.g., token expiration check)
      return true; // Return true if tokens are valid
  }
  
  return false; // Return false if tokens are missing or invalid
};
