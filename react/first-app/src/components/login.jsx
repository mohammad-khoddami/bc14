import React, { useState } from "react";

export default function Login() {
    const [isLogin, setIsLogin] = useState(false);

    // function handleLogin() {
    //     setIsLogin(true);
    // }

    // function handleLogout() {
    //     setIsLogin(false);
    // }

    function handleToggle() {
        setIsLogin(!isLogin);
    }

    // if (isLogin) {
    //     return (
    //         <div>
    //             <p>Welcome</p>
    //             <button className="border" onClick={handleLogout}>
    //                 Logout
    //             </button>
    //         </div>
    //     );
    // }
    // return (
    //     <div>
    //         <p>Please login</p>
    //         <button className="border" onClick={handleLogin}>
    //             login
    //         </button>
    //     </div>
    // );

    const showHello = isLogin && <h1>Heelllooooo</h1>;

    return (
        <div>
            <p>{isLogin ? "Welcome" : "Please Login"}</p>
            <button className="border" onClick={handleToggle}>
                {isLogin ? "Logout" : "Login"}
            </button>
            {/* {isLogin && <h1>Hellllloooooo</h1>} */}
            {showHello}
        </div>
    );
}
