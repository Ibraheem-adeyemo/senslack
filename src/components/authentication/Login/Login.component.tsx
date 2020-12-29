import React from 'react';
import { Button } from '@material-ui/core';
import './login.component.css';
import {auth, provider} from '../../../firebase';
import {useStateValue} from '../../stateProvider/AuthStateProvider';
import { actionType } from '../../stateProvider/reducer';

const Login = () => {
    const {state, dispatch} = useStateValue()
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(response => {
                console.log(response)
                dispatch({
                    type:actionType.SET_USER,
                    state:response.user
                })
            })
            .catch(error => {
                alert(error.message);
            })
    }
    return (
        <div className="login-container">
            <div className="login-modal">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="Slack logo"/>
                <h1>Sign in to my SenSlack</h1>
                <p>senslack.slack.com</p>
                <Button onClick={() => signIn()}>Sign in with google</Button>
            </div>
        </div>
    )
}

export default Login
