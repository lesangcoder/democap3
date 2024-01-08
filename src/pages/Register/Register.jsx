import React from "react";
import Lottie from "lottie-react";
import * as animationRegister from "../../assets/animation/register.json"; 
import FormRegister from "../../Components/FormRegister/FormRegister";

const Register = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationRegister,
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
   className="flex items-center lg:px-40 lg:flex-row flex-col px-24 pb-60">
      <div className="w-1/2 hidden lg:block">
        <Lottie options={defaultOptions} width={"80%"} />
      </div>
      <div className="lg:w-1/2 w-full">
        <FormRegister />
      </div>
    </div>
  );
};

export default Register;
