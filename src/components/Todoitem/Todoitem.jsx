import './todoitem.scss';
import { MdOutlineRadioButtonUnchecked as Unchecked, MdOutlineCheckCircle as Checked,  MdOutlineDeleteOutline as Delete} from "react-icons/md";

export default function Todoitem({title, status, setTodos, todos}) {

    const isCheck = (status) => {

        if (status) {
            return <Checked 
            className='todo_icon todo_icon--check'
            onClick={handlerCheked}
            />
        } else {
            return <Unchecked 
            className='todo_icon todo_icon--check'
            onClick={handlerCheked}
            />
        }
    }

    const handlerCheked = () => {
        let tmp = todos.map((elem) => {
            if (elem.title === title) {
                return {title: elem.title, status: !elem.status}
            } else {
                return {...elem}
            }
        })

        setTodos(tmp)
    }

    const handlerDelete = () => {

        setTodos(todos.filter(elem => elem.title !== title));
    }

    return (
        <li className='todo'>
            {isCheck(status)}
            <span onClick={(() => handlerCheked())}>{title}</span>
            <Delete 
            className='todo_icon todo_icon--delete'
            onClick={() => handlerDelete()}
            />
        </li>
    )
}