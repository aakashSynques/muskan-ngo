// authService.js
const authService = {
    isAuthenticated: () => {
      const token = localStorage.getItem('muskan_token');
      return token !== null;
    },
  };
  
  export default authService;
  