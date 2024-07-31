import { useState } from "react";
import { useDispatch } from "react-redux";
import { submit } from "./ageSlice";

function Input() {
    const [age, setAge] = useState("");
    const dispatch = useDispatch();

    return (
        <>
            <input
                type="text"
                placeholder="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={() => dispatch(submit({ age }))}>submit</button>
        </>
    );
}

export default Input;
