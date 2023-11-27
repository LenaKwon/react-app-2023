// CleanUP 함수는 컴포넌트 destroy 할때 쓰는 함수 useEffect(함수 return 함수 ,[]) 

import { useState, useEffect } from "react";

// 아래 Hello 함수 작동방식 이해 위해 풀어쓴 코드, 보통은 이렇게 안씀
// function Hello(){
//     const byFn =()=> console.log("bye");
//     const hiFn =()=> {console.log("hi"); return byFn;}
//     useEffect(hiFn,[]);
// }


function Hello (){
    useEffect(()=>{
        console.log("Created :)");
        return ()=> console.log("Destroyed :( ");
    },[])
    return <h1>Hello</h1> 
}

function App (){
    const [showing, setshowing] = useState(false);
    const onClick =()=> setshowing((pre)=>!pre);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing? 'Hide' : 'Show'}</button>
        </div>
    );
}

export default App;