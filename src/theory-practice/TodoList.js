import {useState, useEffect} from "react";

function App(){
    // onChange 함수에 쓰이는 useState, 입력text를 update하고 브라우저에 보여주기 위함.
    const [todo, setTodo] = useState("");
    
    // onSubmit 함수에 쓰이는 useState, Enter나 button 클릭시 todoList를 저장하는 배열
    const [todos,setTodos] = useState([]);
    
    const onChange=(event)=> setTodo(event.target.value);
    const onSubmit=(event)=>{ event.preventDefault();
        // input value 가 공백일때 함수 끝내기
        if(todo===""){
            return;
        } 
        // react에서는 usetState 의 직접적인 수정이 불가능함 push()쓸수 없음.
        // 늘 수정 함수 setTodos 를 사용해야함
        setTodos((currentArray)=>[todo, ...currentArray]);
        setTodo(""); 
        console.log(todos)
    };
   
    return(
        <div>
            <h1>My To Dos ({todos.length})</h1>
            <form onSubmit={onSubmit}>
            <input 
                type='text' 
                placeholder='write to do'
                onChange={onChange}
                value={todo}
            />
            <button >Add To do</button>
            </form>
            <hr/>
            <ul>
               {/* foreach문은 반환값이 없고 undefined 이기 때문에 여기에선 새로운배열 반환하는 map이 적절함*/}
               {/* {todos.forEach(element => <li>{element}</li>)} */}
               {/* react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop. */}
               {/* unique key 가 필요하다는 경고창이 뜸, 우리는 map의 두번째 인자 index를 이용해 key값을 설정할 것임 */}
               {todos.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
            
        </div>
    );
}
export default App;
