import React,{useState} from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Showpop=()=>{

    return (
        <>
        <Popup  className="position" trigger={<button> Trigger</button>} position="right center"><div>Popup content here !!</div></Popup>
        </>
    )


}
export default Showpop;