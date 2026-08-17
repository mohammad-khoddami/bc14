var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var pTag = document.getElementById("p1");

// nameInput.value = localStorage.getItem("name");
// pTag.innerText = localStorage.getItem("name");

var userJson = localStorage.getItem("user");
console.log(userJson);
var userObj = JSON.parse(userJson);
console.log(userObj);

var user = {
    name: userObj.name,
    age: userObj.age,
};

nameInput.value = user.name;
ageInput.value = user.age;

function handleAdd() {
    user.name = nameInput.value;
    user.age = age.value;
    // localStorage.setItem("name", nameInput.value);
    // pTag.innerText = nameInput.value;

    var newUserJson = JSON.stringify(user);
    localStorage.setItem("user", newUserJson);
}

/**
 * set:
 * nawValue = JSON.stringify(vlaue)
 * localStorage.setItem("key", newValue);
 *
 * get:
 * jsonValue = localStorage.getItem("key");
 * value = JSON.parse(jsonValue)
 *
 */
