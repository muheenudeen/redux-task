import { useSelector } from "react-redux";

function Desplay() {
    const age = useSelector((state) => state.age.age);
    console.log(age);
    return (
        <>
            <h1>{age}</h1>
        </>
    );
}

export default Desplay;
