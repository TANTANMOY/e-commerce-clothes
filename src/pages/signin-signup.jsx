import React from 'react'
import './signin-signup.scss'
import Signin from '../components/sign-in/signin'
import Signup from '../components/signup/signup'


const Signinsignup =() =>  {
    return (
        <div className="sign-in-and-sign-up">
            <Signin />
            <Signup />
        </div>
    )
}

export default Signinsignup