import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validate = (form, setErrors, errors) => {
    if (!form.email) setErrors({
        ...errors,
        email: "Email vacío"
    });
}



const Form = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({
            ...form,
            [property]: value
        });
        validate(form, setErrors, errors);
    }
    
    const navigate = useNavigate();
    
    const formValidate = (event) => {
        event.preventDefault();
        if (form.username !== "" && form.password !== "") {
            navigate("/home");
        }
    }

    return (
        <form onSubmit={formValidate}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={(form.username)}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    name="password"
                    value={(form.password)}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">LOGIN</button>
        </form>
    )
}



export default Form;