In React, "props" stands for "properties," and it's a fundamental concept for passing data from a parent component to a child component. Props are used to make components reusable and to allow them to communicate with each other in a structured manner.

"Props drilling" refers to a situation where you have a hierarchy of components, and you need to pass data through several levels of nesting to reach a deeply nested component. This can lead to issues of readability, maintainability, and performance.

To mitigate these issues, React provides a few solutions:

## Context API: The Context API allows you to share data that can be accessed by multiple components, eliminating the need to pass props manually through each level. It's useful when you have data that many components need access to.

## Redux or State Management Libraries: These libraries provide a global state container that can be accessed by any component in your application. They are especially useful for managing complex application state.

## Component Composition: Instead of drilling props down multiple levels, consider restructuring your components to make use of component composition and create smaller, more focused components.

## Use Callbacks: If you only need to pass data up the component tree, you can use callback functions that the parent provides to the child components. This way, you avoid directly passing data through props.



###Context API kullanmasi icin:
- Create Context using (createContext hook). Usually done in on of the "top" components (e.g. App).
- Pass initial state to Context Provider.
- Use Context from any component down the tree with useContext hook.