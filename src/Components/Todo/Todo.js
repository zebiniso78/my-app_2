import './Todo.scss';

function Todo ({todo, removeValue, checkedValue}) {

    return <li className='todos-item'>
        
        <input type='checkbox' data-id={todo.id} onClick={(evt) => checkedValue(evt)}></input>
        <span className='todos-span'>{todo.title}</span> 
        <button className='todos-button' data-id={todo.id} onClick={(evt) => removeValue(evt)}> x </button>
        <button className='more-button'>More</button>
    </li>;
}

export default Todo;