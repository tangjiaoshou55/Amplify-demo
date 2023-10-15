import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import {Auth} from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [authStatus, setAuthStatus] = useState('notAuthenticated');

    useEffect(() => {
        const checkUserStatus = () => {
            Auth.currentAuthenticatedUser()
                .then(user => {
                    if (user) {
                        setAuthStatus('authenticated');
                        navigate("/main");
                    }
                })
                .catch(err => {
                    setAuthStatus('notAuthenticated');
                });
        };

        checkUserStatus();
    }, [navigate]);


    return (
        <div>
            <div className="header-w3l">
                <h1>AssistGPT</h1>
            </div>
            {authStatus !== 'authenticated' ? <Authenticator /> : <div><h1>My App</h1></div>}
        </div>
    );
}

export default Login;
