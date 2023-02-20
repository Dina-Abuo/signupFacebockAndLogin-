import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Data/main';
export default function FromLogIn() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const login = async (e) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log('credintials ', user);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <form className="form-login" >
                <input
                    className="input-email mt-4"
                    type="email|number"
                    placeholder="  phone number or email address "
                    name="email"
                    required
                    onChange={(e) => { setEmail(e.target.value) }} />
                <input
                    className="input-pass  mt-4"
                    type="password"
                    placeholder="  password"
                    name="password"
                    required
                    onChange={(e) => { setPassword(e.target.value) }} />
                <button className="button-log  mt-4 mb-4" type="submit" onClick={login}>Log in</button>

                <div style={{ width: '394px', boxSizing: 'border-box' }}>
                    <a className="link-forget " href=" # ">Forgetten password ? </a>
                </div>
            </form>
        </div>
    )
}

