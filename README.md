# Books App

An app exploring Google Books api

## Instructions
- Run the following lines
  ```sh
  $ cd {project_folder}

  $ yarn

  $ npx pod-install ios
  ```

- Add your [Google Books API key](https://developers.google.com/books/docs/v1/using#APIKey) to `api_key.ts` in the root of the project
  ```ts
  // api_key.ts
  export const key = '1234567890abcdefghijklmnopqrstuvwxyz';
  ```