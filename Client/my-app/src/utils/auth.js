import { jwtDecode } from 'jwt-decode';

class AuthService {
  // retrieve data saved in token
  getProfile() {
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    // check if the user is still logged in
    const token = this.getToken(); // Checks if there is a saved token and it's still valid
    return !!token && !this.isTokenExpired(token);
  }

  // check if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  // retrieve token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // set token to localStorage and reload page to homepage
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/dashboard');
  }

  // clear token from localStorage and force logout with reload
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/logoutmessage');
  }
}

export default new AuthService();
