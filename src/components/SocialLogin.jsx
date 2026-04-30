import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaTwitter /></a>
        </div>
    );
};

export default SocialLogin;