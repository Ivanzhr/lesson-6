import Todoitem from '../Todoitem/Todoitem'
import './todolist.scss'


export default function TodoList({todos, setTodos}) {
    
        if(todos.length === 0) {
            return(
                <p className='todo_message'>Нічого не заплановано</p>
            )
        }
        return (       
        <ul className='todo_items'>
            {todos.map((elem, index) => <Todoitem
                                            key={index} 
                                            {...elem}
                                            setTodos = {setTodos}
                                            todos = {todos}
                                            />)}
        </ul>
    )
}