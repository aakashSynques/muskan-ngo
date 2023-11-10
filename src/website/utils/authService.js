// authService.js
const authService = {
    isAuthenticated: () => {
      // Check if the user is authenticated, for example, by checking if the token is present.
      const token = localStorage.getItem('muskan_token');
    //   const token = localStorage.getItem('muskan_token_data');
      return token !== null;
    },
  };
  
  export default authService;
  