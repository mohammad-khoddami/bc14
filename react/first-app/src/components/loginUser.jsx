import React, { useState } from "react";

export default function LoginUser() {
    const [user, setUser] = useState({
        firstName: "Nima",
        lastName: "Akbari",
        role: "Admin",
        isLogin: false,
    });

    function handleLogin() {
        setUser({ ...user, isLogin: !user.isLogin });
    }

    return (
        <div>
            {user.isLogin ? (
                <div>
                    <h1>
                        Hello {user.firstName} {user.lastName}
                    </h1>
                    <button onClick={handleLogin}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>Please Login</p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}
