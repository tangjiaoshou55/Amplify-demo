import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Auth} from "aws-amplify";


const Main = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await Auth.signOut();
        navigate('/');
    };

    return (
        <div>
            <h1>You are in the main page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Main;
