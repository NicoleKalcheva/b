import { useState } from 'react';

export default function Button(props){
    const [counter,setCounter] = useState(0);
    const {title} = props;

    function clickHandler(){
        setCounter(counter + 1)
    }
    return(
        <button onClick={clickHandler} className = 'btn btn-danger'>{title}</>
    )
}