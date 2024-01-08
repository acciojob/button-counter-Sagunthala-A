import React,{useState} from 'react';

const ButtonClick = ()=> {

    const [clicked,setClicked] = useState(0)
    return (
        <div>
            <p>Button clicked {clicked} times</p>
            {/* <h1>sd</h1> */}
            <button onClick={()=>{setClicked(clicked+1)}} >Click me</button>
        </div>
    )
}

export default ButtonClick;