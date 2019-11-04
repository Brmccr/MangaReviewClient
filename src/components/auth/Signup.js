import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
// import APIURL from '../../helpers/environment';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/manga/user`, {
        method: 'POST',
        body: JSON.stringify({user:{username: username, password: password}}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        props.updateToken(data.sessionToken)
    })
}

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="email" onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username' name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" pattern="(?=.*[a-z]).{6,12}" placeholder='at least 6 letters' value={password}/>
                </FormGroup>
                <Button color="primary" type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;