import { createContext } from "react";
import "./App.css";
import { List } from "./components/List";
import { PerformanceState } from "./components/PerformanceState";
import { Navbar } from "./components/Navbar";

export const TodoContext = createContext();

export const App = () => {
  const loggedInUser = {
    isLoggedInUser: true,
    name: "John"
  };
  // const loggedOutUser = {
  //   isLoggedInUser: false
  // };

  return (
    <TodoContext.Provider value={loggedInUser}>
      <div className="app">
        <Navbar />
        <List />
        <PerformanceState completedTodos={'x'} totalTodos={'x'} />
      </div>
    </TodoContext.Provider>
  );
};