import { useState } from 'react'

const Signup = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const handleSubmit = async () => {
        if (!name || !email || !pass) {
            alert('Please fill all the fields');
            return;
        }
        try {
            const url = "http://localhost:8080/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "pass": pass
                })
            });
            const result = await response.json();
            if (!result.success) {
                alert(result.message);
            }
        }catch (error) {
            console.log("Error occurred while signing up:", error);
        }
    }
    return (
        <div>
            <input placeholder='Name' type='text' autoFocus value={name}
            onChange={(e) => {setName(e.target.value)}} />
            <input placeholder='Email' type='email' value={email}
            onChange={(e) => {setEmail(e.target.value)}} />
            <input placeholder='Password' type='password' value={pass}
            onChange={(e) => {setPass(e.target.value)}} />

            <button onClick={() => handleSubmit()}>Sign Up</button>
        </div>
    )
}

export default Signup