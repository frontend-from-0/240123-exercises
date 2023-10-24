import './App.css';
// Example of renaming imported component
// import { List as TodoList} from './components/List';
import {Ex1} from './components/Ex1';
import {Ex2} from './components/Ex2';
import { Ex3 } from './components/Ex3';
import { Ex4 } from './components/Ex4';
import { Ex5 } from './components/Ex5';


export const App = () => {

  return (
    <div className="app">
      {/* <header className="app-header">
        To-do list
      </header> */}
      {/* <TodoList /> */}
      <Ex1 />
      <Ex2 />
      <Ex3 />
      <Ex4 />
      <Ex5 />
    </div>
  );
};
