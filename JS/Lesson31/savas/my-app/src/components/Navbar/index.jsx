import { TodoContext } from "../../App";
import { useContext } from "react";
import './styles.css';

export const Navbar = () => {
  const user = useContext(TodoContext);
  console.table(user);

  return (
    <nav className="navigation">
      <ul className="navigation-list">

      </ul>
    </nav>
  )
}