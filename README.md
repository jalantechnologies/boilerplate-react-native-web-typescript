# React Native Web with TypeScript


## Install

```sh
gem install cocoapods
npm i -g yarn
git clone https://github.com/jalantechnologies/boilerplate-react-native-web-typescript.git
cd sales-app
yarn install
cd ios
pod install
cd ..
```

### Run

```sh
yarn ios
```

```sh
yarn android
```

```sh
yarn web
```

### Lint

```sh
yarn lint
```

### Test

```sh
yarn test
```

### Deploy

```sh
yarn build
```

### Features

- TypeScript support
- Works on web, android, ios
- React native elements component library works on both web and native
- Router with Protected Routes
- Unit Testing using Jest
- Internationalization support `react-i18next (i18next)`
- Dependency Injection (see `src/app/helpers/dependency-hoc.tsx`)
- Heroku deployment-ready (see `app.json` and `Procfile`)
