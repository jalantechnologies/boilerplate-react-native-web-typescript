
import * as React from 'react';
import {Text, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

import {AppProps} from '../../helpers/dependencies.props';
import DependencyInjector from '../../helpers/dependency.hoc';

import {HomeProps} from './home.props';
import {HomeState} from './home.state';

import styles from './home.styles';

type HomeComponentProps = HomeProps & AppProps;

const Hello = (props: HomeProps): JSX.Element => {
  return (
    <Text style={styles.h1}>
      {props.text}
    </Text>
  )
}

class HomeComponent extends React.Component<HomeComponentProps, HomeState> {
  constructor(props: HomeComponentProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false,
    };
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onUsernameChange(username: string): void {
    this.setState({username});
  }

  onPasswordChange(password: string): void {
    this.setState({password});
  }

  handleSubmit(): void {
    this.setState({submitted: true});

    const {username, password} = this.state;
    if (username && password) {
      this.props.authService.login().then((): void => {
        // redirect to users page
        this.props.history.push('/users');
      });
    }
  }

  render(): React.ReactNode {
    const {username, password, submitted} = this.state;
    const {translation} = this.props;
    return (
      <>
        <Hello text={translation.t('HELLO_WORD')} />
        <TextInput style={styles.input} onChangeText={(username: string): void => this.onUsernameChange(username)} placeholder="username (any)" />
        {submitted && !username &&
          <Text style={styles.error}>{translation.t('USERNAME_INVALID')}</Text>
        }
        <TextInput style={styles.input} secureTextEntry={true} onChangeText={(password: string): void => this.onPasswordChange(password)} placeholder="password (any)" />
        {submitted && !password &&
          <Text style={styles.error}>{translation.t('PASSWORD_INVALID')}</Text>
        }
        <Button type="outline" onPress={(): void => this.handleSubmit()} title="Login"></Button>
      </>
    );
  }
}

export default DependencyInjector(HomeComponent);
