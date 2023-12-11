import React from "react";

export const ListItem = ({ id, title, handleDeleted, handleCompleted, completed }) => {

    return (
        <li>
            <button onClick={() => handleDeleted(id)}>Deleted Button</button>
            <button onClick={() => handleCompleted(id)}>Completed Button</button>
        </li>
    )
};