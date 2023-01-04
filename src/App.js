import TodoTemplate from "./component/TodoTemplate";
import './index.css';
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import {useCallback, useRef, useState} from "react";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '블로그 포스팅하기',
            checked: false,
        },
        {
            id: 2,
            text: '운동하기',
            checked: false,
        },
        {
            id: 3,
            text: '금귤정과 만들기',
            checked: true,
        },
    ]);
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
