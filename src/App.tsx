import { useState } from "react";
import type { Todo } from "./types";
import TodoList from "./components/TodoList";

const initialTodos: Todo[] = [
  { id: 1, text: "Przeczytać dokumentację Reacta", done: true, priority: "normalny" },
  { id: 2, text: "Zrobić laboratorium nr 2", done: false, priority: "wysoki" },
  { id: 3, text: "Wyjść na spacer", done: false, priority: "niski" },
];

export default function App() {
  // Stan listy zadań jest już przygotowany - dalej pracuj według scenariusza.
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string, priority: Todo["priority"]) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.max(0, ...prev.map((todo) => todo.id)) + 1,
        text,
        done: false,
        priority,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
  };

  void addTodo;
  void toggleTodo;
  void deleteTodo;
  void editTodo;
  
  // TODO (Zadanie 3): dodaj formularz <TodoForm /> z walidacją (komponent kontrolowany)
  // TODO (Zadanie 4): dodaj filtr <TodoFilter /> (wszystkie / aktywne / zrobione) i liczniki

  return (
    <>
      <h1>✅ Lista zadań</h1>
      <TodoList todos={todos} />
    </>
  );
}
