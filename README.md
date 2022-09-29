# Books App

An app exploring Google Books api

## Instructions
- Set up react native development environment, [docs](https://reactnative.dev/docs/environment-setup)

- Run the following lines
  ```console
  $ git clone https://github.com/paulo-lucas/books.git

  $ cd books

  $ yarn

  $ npx pod-install ios
  ```

- Add your [Google Books API key](https://developers.google.com/books/docs/v1/using#APIKey) to `api_key.ts` in the root of the project
  ```ts
  // books/api_key.ts
  export const key = {YOUR_GOOGLE_API_KEY};
  ```

- Start metro
  ```sh
  yarn start
  ```

- Run project on emulator or device
  ```
  $ yarn android
  ```
  or
  ```
  $ yarn ios
  ```