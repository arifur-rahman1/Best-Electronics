import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async () => {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: userName });
        navigate('/home');

    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        console.log(user)
    }
    return (
        <div className="App">
            <h2 className='text-center text-info mt-5'>Please Register To Proceed</h2>
            <div className='d-flex flex-column' >
                <input className="mb-3" placeholder='Enter Your Name'
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input className="mb-3" placeholder='Enter Your Email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className="mb-3" placeholder='Enter password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className=' btn-outline-info' onClick={() => handleRegister()}>
                    Register
                </button>
            </div>
            <div>
                <p>Already have an account? <Link to={'/login'} className='pe-auto mt-3 text-decoration-none text-info'>Please Login</Link></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignIn;