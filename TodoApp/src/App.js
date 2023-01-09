import TodoTemplate from "./component/TodoTemplate";
import './index.css';
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import {useCallback, useRef, useState} from "react";

const createBulkTodos = () => new Array(2500).fill(1).map((_, i)=>({id: i, text: `할일${i}`, checked: false}));

function App() {
    const [todos, setTodos] = useState(createBulkTodos);
    /*
    id이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요가 없다.
    id값은 그저 참조하는 값일 뿐. 따라서 useRef사용
     */
    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        }
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos])

    const onRemove = useCallback(id=>{
        setTodos(todos.filter(todo=>todo.id !== id));
    },[todos])

    const onToggle = useCallback(id=>{
        setTodos(
            todos.map(todo=> todo.id === id ? {...todo, checked: !todo.checked} : todo)
        );
    },[todos]);

    return (
        <>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            </TodoTemplate>
        </>
    );
}

export default App;
