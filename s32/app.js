const loginForm = document.getElementById("login");

async function handleSubmit(e) {
    e.preventDefault();

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    try {
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        });
        const result = await response.json();
        if (!response.ok) {
            const pError = document.createElement("p");
            pError.style.color = "red";
            pError.innerText = result.message;
            loginForm.appendChild(pError);
        } else {
            localStorage.setItem("token", JSON.stringify(result.accessToken));
            dashboard(result);
        }
    } catch (error) {
        console.log(error);
    }
}

function dashboard(user) {
    const dashboardDiv = document.getElementById("dashboard");
    dashboardDiv.innerHTML = `<h2>${user.firstName} ${user.lastName}</h2>`;
    loginForm.innerHTML = "";
}

async function checkLogin() {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        try {
            const response = await fetch("https://dummyjson.com/auth/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            if (response.ok) {
                dashboard(result);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
checkLogin();
