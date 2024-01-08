import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../pages/Loading/Loading";

const UserTemplate = () => {
    const { isLoading } = useSelector((state) => state.loading);
    return (
        <Fragment>
            {isLoading ? <Loading /> : <></>}
            <div className="flex flex-col justify-between min-h-screen">
                <Header />
                <Outlet />
            </div>
        </Fragment>
    );
};

export default UserTemplate;
