import React from 'react';
import style from'./recipe.module.css';

const Recipe = (props) => {
    return (
        <div className={style.recipe}>
            <h1 >{props.title}</h1>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li key={ingredient.weight}>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>{props.calories}</p>
            <img className={style.image} src={props.image} alt={props.title}/>
        </div>
    ); 
};

export default Recipe;