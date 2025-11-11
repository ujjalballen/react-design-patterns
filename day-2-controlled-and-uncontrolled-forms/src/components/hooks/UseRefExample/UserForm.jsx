import { useRef } from "react";

const UserForm = () => {

    const userNameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = userNameRef.current.value;
        const password = passwordRef.current.value;

        console.log("submitted", {username, password})
    };



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">userName</label>
                <input type="text" id="userName" ref={userNameRef} />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" id="password" ref={passwordRef} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;