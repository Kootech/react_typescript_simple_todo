import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { getTodos } from "../services/api";

import { Data } from "../config";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Data[]>([]);
  useEffect(() => {
    async function todoFunc() {
      const data: Data[] = await getTodos();
      // console.log(await getTodos());
      setTodos(data);
    }
    todoFunc();
  }, []);

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo: Data) => (
          <Card key={todo.id} title={todo.title} completed={todo.completed} />
        ))
      ) : (
        <h1>Data not available</h1>
      )}
      <Card />
    </div>
  );
};

export default Home;
