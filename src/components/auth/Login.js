import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/manga/login/', {
        method: 'POST',
        body: JSON.stringify({user:{username: username, password: password}}),
        headers: new Headers({
            'Content-Type':'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken);
    })
}

    return(
        <div>
            <h1>Sign In</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="email" onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" pattern="(?=.*[a-z]).{6,12}" placeholder='at least 6 letters' value={password}/>
                </FormGroup>
                <Button color="primary" type="submit">SignIn</Button>
            </Form>
        </div>
    )
}

export default Login;