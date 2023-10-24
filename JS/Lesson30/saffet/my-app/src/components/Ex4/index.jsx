// ## Exercise 4: Event Handler with Parameters
// Create a list of items. When a list item is clicked, display an alert showing the text of the clicked item.

export const Ex4 = () => {
  const data = [
    {id: 1, title: "Do dishes"},
    {id: 2, title: "Do homework"},
    {id: 3, title: "Go running"},
    {id: 4, title: "Do dishes 2"},
    {id: 5, title: "Do homework 3"},
    {id: 6, title: "Go running 4"},
  ];
  
    return (
        <ul>{data.map(item => <li key={item.id} onClick={() => alert(item.title)}>{item.title}</li>)}</ul>
        // <ul>{data.map(item => <li key={item.id} onClick={function () {alert(item.title)}}>{item.title}</li>)}</ul>
        
    );
  }