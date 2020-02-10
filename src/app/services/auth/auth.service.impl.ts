
import {APIServiceImpl} from '../api';

import {AuthService} from './auth.service';
import {AsyncStorage} from 'react-native';

export default class AuthServiceImpl extends APIServiceImpl implements AuthService {
  static readonly RESOURCE = '/users';

  async login(): Promise<void> {
    await AsyncStorage.setItem('login', 'true');
  }

  async logout(): Promise<void> {
    await AsyncStorage.clear();
  }

  async isLoggedIn(): Promise<boolean> {
    // will return true if login key has value 'true'
    const isLogged  = await AsyncStorage.getItem('login') === 'true';
    return isLogged;
  }
}
