import * as React from 'react';
import {View, Button, Text} from 'react-native';

import {User} from '../../models/';

import {AppProps} from '../../helpers/dependencies.props';
import DependencyInjector from '../../helpers/dependency.hoc';

import {ComponentViewState} from '../../helpers/component.state';
import {UserState} from './users.state';
import {UserProps} from './users.props';

import styles from './users.styles';

type UserComponentProps = UserProps & AppProps;

const Users = (props: UserProps): JSX.Element => {
  const {users} = props.users;
  const usersList = users.map((el: User): JSX.Element => {
    return (
      <View key={el.id}>
        <Text>{el.name}</Text>
      </View>
    )
  })
  return (
    <View style={styles.usersList}>
      {usersList}
    </View>
  )
}

class UsersComponent extends React.Component<UserComponentProps, UserState>{
  constructor(props: UserComponentProps) {
    super(props);
    this.state = {
      componentState: ComponentViewState.DEFAULT,
    }
    this.fetchUsers = this.fetchUsers.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout(): void {
    this.props.authService.logout().then((): void => {
      // redirect to login page
      this.props.history.push('/');
    });
  }

  async fetchUsers(): Promise<void> {
    this.setState({
      componentState: ComponentViewState.LOADING,
    });
    const response = await this.props.userService.getUsers();
    if (response.hasData()
      && response.data) {
      this.setState({
        componentState: ComponentViewState.LOADED,
        users: response.data,
      });
    } else {
      //const msg = response.error || this.translate('no_internet');
      this.setState({
        componentState: ComponentViewState.ERROR,
        error: response.error,
      });
    }
  }
  async componentDidMount(): Promise<void> {
    await this.fetchUsers();
  }

  render(): React.ReactNode {
    const {componentState, users, error} = this.state;
    const {translation} = this.props;

    const isLoaded = componentState === ComponentViewState.LOADED;
    const isLoading = componentState === ComponentViewState.LOADING;
    const isError = componentState === ComponentViewState.ERROR;

    return (
      <>
        <Text style={styles.h1}>
          {translation.t('LABLE_USERS')}
        </Text>
        <Button title={translation.t('LABEL_LOGOUT')} onPress={(): void => this.logout()}></Button>
        {
          isLoading && <Text>{translation.t('LABEL_LOADING_USERS')}</Text>
        }
        {
          isLoaded && users &&
          <Users users={users} />
        }
        {
          isError &&
          <Text> {error} </Text>
        }
      </>
    );
  }
}

export default DependencyInjector(UsersComponent);
