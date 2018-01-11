# React Native Starter
Quick way to start up a React Native project with:
- redux
- redux-saga
- react-navigation

# Instructions
1. Run `install.sh`
2. Manually add `flow-bin` with RN project's specific version
3. Add `eslint-config-airbnb`'s dependencies:
  ```
  npm info "eslint-config-airbnb@latest" peerDependencies
  # run yarn add --dev <dependency>@<version> for each listed peer dependency
  ```
4. Add scripts to `package.json`:
  ```
  "scripts": {
    "flow": "flow",
    "flow-typed": "flow-typed update",
    "ios": "react-native run-ios",
    "lint": "eslint '**/*.js' --ignore-path .eslintignore",
    "postversion": "react-native-version --skip-tag --never-amend",
  },
  ```

# Work In Progress
- automate more stuff