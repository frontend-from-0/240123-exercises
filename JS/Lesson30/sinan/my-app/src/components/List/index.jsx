import './styles.css';
import {ListItem} from '../ListItem';

export const List = () => {
  const data = [
    {id: 1, title: "Do dishes"},
    {id: 2, title: "Do homework"},
    {id: 3, title: "Go running"},
    {id: 4, title: "Do dishes 2"},
    {id: 5, title: "Do homework 3"},
    {id: 6, title: "Go running 4"},
  ];
return (
  <ul>
      {
        data.map(listItem => <ListItem key={listItem.id} title={listItem.title} />)
      }
  </ul>
)
};