import { useState } from 'react'

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const handleSubmit = async () => {
        if (!email || !pass) {
            alert('Please fill all the fields');
            return;
        }
        try {
            const url = "http://localhost:8080/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "pass": pass
                })
            });
            const result = await response.json();
            if (!result.success) alert(result.message);

            localStorage.setItem('token', result.token);
            localStorage.setItem('userID', JSON.stringify(result.userID));
        }catch (error) {
            console.log("Error occurred while logging in:", error);
        }
    }
    return (
        <div>
            <input placeholder='Email' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <input placeholder='Password' type='password' value={pass}
            onChange={(e) => {setPass(e.target.value)}} />

            <button onClick={() => handleSubmit()}>Log In</button>
        </div>
    )
}

export default Login