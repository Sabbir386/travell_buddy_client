import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const {providerLogin,signIn }  = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    if(token){
        navigate(from,{replace: true});
      }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then((result) => {
          const user = result.user;
    
          const currentUser = {
            userId: user.uid,
          }
    
          setLoginUserEmail(user.email);
          fetch(`https://tour-travel-server-two.vercel.app/user?email=${user.email}`)
          .then(res => res.json())
          .then(data =>{
            
            if(data.feedback < 1){
                saveUser(user.displayName, user.email,'user');
                
            }
            // navigate('/hotels');
          })

        })
          .catch((error) => console.log(error));
        
      };

      const saveUser = (name, email,role) =>{
        const user ={name, email,role};
        fetch('https://tour-travel-server-two.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            // setCreatedUserEmail(email);
        })
    }
    return (
        <div className='max-w-[1440px] mx-auto px-5 py-24 md:py-30'>
            
            <button className='btn btn-outline px-4 py-2 mx-auto   block text-violet-800 backdrop-blur-sm hover:backdrop-blur-md shadow-sm shadow-violet-500 border  border-violet-800 hover:bg-violet-800 hover:text-white rounded duration-700' onClick={handleGoogleSignIn}> <span className="flex items-center gap-3"> <span> CONTINUE WITH </span> <FaGoogle></FaGoogle> </span>    </button>
        </div>
    );
};

export default Login;