export interface AuthService {
  login: () => Promise<void> ;
  logout: () => Promise<void>;
  isLoggedIn: () => Promise<boolean>;
}
