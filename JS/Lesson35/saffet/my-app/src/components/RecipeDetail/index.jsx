import * as React from 'react';
import { useParams } from 'react-router-dom';


export const RecipeDetail = () => {

    let { id } = useParams();
  
    return(
        <div>recipe detail: {id}</div>
    )
};