import axios from "axios";

import { Data } from "../config";

const uri: string = "https://jsonplaceholder.typicode.com/todos";

export const getTodos: () => Promise<Data[]> = async () => {
  const response = await axios.get(uri);
  return await response.data;
};
