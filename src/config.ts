interface Config {
  apiEndPoint: string;
}

const getEnv = (key: string): string | undefined => {
  return process.env[key];
}

const CONFIG: any = {
  development: {
    apiEndPoint: 'https://jsonplaceholder.typicode.com',
  },
  test: {
    apiEndPoint: '',
  },
  staging: {
    apiEndPoint: getEnv('REACT_APP_API_ENDPOINT'),
  },
  production: {
    apiEndPoint: getEnv('REACT_APP_API_ENDPOINT'),
  }
}


export default CONFIG[process.env.NODE_ENV] as Config;
