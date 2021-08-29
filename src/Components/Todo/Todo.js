function Todo ({todo, removeValue}) {

    return <li className='todos-item'>
        <span className='todos-span'>{todo.title}</span>
        <button className='todos-button' data-id={todo.id} onClick={(evt) => removeValue(evt)}> x </button>
        <button className='more-button'>More</button>
    </li>;
}

export default Todo;