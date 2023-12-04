import React, {useRef} from "react";
import { firestore } from "./firebase";
import {addDoc , collection } from "@firebase/firestore";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
export default function Home(){
    const messageRef =useRef();
    const ref = collection(firestore,"messages");
    const handleSave = async (e) =>{
        EvalError.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            message: messageRef.current.value,
        };
        try {
            addDoc(ref,data);
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <form onSubmit={handleSave}>
                <label> Enter Message</label>
                <input type="text" ref={messageRef} />
                <button type="submit">save</button>
            </form>
        </div>
    );
}