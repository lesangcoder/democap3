import React, { useEffect } from "react";
import Lottie from "lottie-react";
import * as animationLogin from "../../assets/animation/login2.json";
import FormLogin from "../../Components/FormLogin/FormLogin";
import { getLocal } from "../../utils/localStore";
import { message } from "antd";

const Login = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationLogin,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        if (!getLocal("user")) {
            message.info("You can book tickets after logging in your account");
        }
    }, []);

    return (
        <div style={{
            backgroundImage: "url(../img/background.jpg)",
            minHeight: "1000px",
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        className="flex items-center gap-4 lg:px-48 flex-col lg:flex-row px-24 pb-60">
            <div className="lg:w-1/2 hidden lg:block">
                <Lottie options={defaultOptions} width={"100%"} />
            </div>
            <div className="lg:w-1/2 lg:px-24 w-full px-4">
                <FormLogin />
            </div>
        </div>
    );
};

export default Login;
