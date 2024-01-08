import React from 'react'
import Lottie from 'lottie-react'
import * as animationLogin from "../../assets/animation/login.json";
import FormLoginAdmin from '../../Components/FormLoginAdmin/FormLoginAdmin';

const LoginAdmin = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  return (
    <div style={{
      backgroundImage: "url(../img/background.jpg)",
      minHeight: "1000px",
      backgroundSize: "cover",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
  }}
    className='flex items-center min-h-screen'>
      <div className='w-1/2'>
        {/* animation */}
        <Lottie options={defaultOptions} height={700} width={400} />
      </div>
      <div className='w-1/2'>
        {/* Form: login-admin */}
        <FormLoginAdmin />
      </div>
    </div>
  )
}

export default LoginAdmin