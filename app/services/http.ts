import axios from 'axios';
import { key } from '../../api_key';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  timeout: 1000,
});

instance.defaults.params = { key };

export default instance;
