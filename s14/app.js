var user = {
    firstName: "mohammad",
    lastName: "khoddami",
    age: 30,
    address: {
        country: "iran",
        city: "isfahan",
        postalCode: "15151510",
    },
    job: ["teacher", "developer"],
    isMale: true,
};
// console.log(user.firstName, user.age);
// console.log(user.address.postalCode);
// console.log(user.job[1]);
// console.log(user["lastName"]);

// var item = "address";
// console.log(user[item]["city"]); //user.address.city

var store = {
    name: "tech store",
    address: {
        country: "iran",
        city: "isfahan",
        postalCode: "15151510",
    },
    owner: user,

    products: [
        {
            name: "iphone17",
            price: 1000,
            stock: 10,
            category: "mobile",
            brand: "apple",
            details: {
                ram: 8,
                color: ["red", "green", "blue"],
                cpu: "ffjn",
                storage: 256,
            },
        },
        {
            name: "iphone18",
            price: 1500,
            stock: 5,
            category: "mobile",
            brand: "apple",
            details: {
                ram: 16,
                color: ["pink", "yellow", "blue"],
                cpu: "fnvfjn",
                storage: 520,
            },
        },
        {
            name: "zbook7415",
            price: 2000,
            stock: 3,
            category: "laptop",
            brand: "hp",
            details: {
                ram: 32,
                color: ["red", "orange", "black"],
                cpu: "jfnvjfn",
                storage: 1000,
            },
        },
    ],
};

// console.log(store.products[1].stock);
// console.log(store.products[0].price);

// console.log(store.products[2].details.cpu);
// console.log(store.products[1].details.color[1]);

// console.log(store.owner.address.postalCode);
// console.log(store.address.city);

var restaurant = {
    name: "x",
    owner: user,
    address: {
        country: "iran",
        city: "isfahan",
        postalCode: "15151510",
    },
    rate: 4.5,
    menuCategory: [
        {
            name: "fastfood",
            food: [
                {
                    name: "hotdog",
                    price: 7,
                    ingrediants: "susage, bread",
                },
                {
                    name: "burger",
                    price: 10,
                    ingrediants: "bread, meat",
                },
            ],
        },
        {
            name: "irani",
            food: [
                {
                    name: "kebab",
                    price: 11,
                    ingrediants: "meat",
                },
                {
                    name: "chicken",
                    price: 8,
                    ingrediants: "chicken, bread",
                },
            ],
        },
        {
            name: "salad",
            food: [
                {
                    name: "salad 1",
                    price: 5,
                    ingrediants: "vegetable",
                },
                {
                    name: "salad sezar",
                    price: 6,
                    ingrediants: "chicken, bread",
                },
            ],
        },
    ],
};

// console.log(restaurant.menuCategory[1].food[1].price);
// console.log(restaurant.menuCategory[2].food[1].ingrediants);

// var a = "d";
// var b = "a";
// var c = a - b;
// console.log(c);

// var a = 10;
// var b = 3;
// var c = a % b;
// console.log(c);

// var a = 10;
// var b = 3;
// console.log(b);
// // b = a + b;
// // b -= a; // b = b-a
// // b *= a;
// b++; // b = b + 1; b+=1
// a--; // a = a -1 ; a-=1
// console.log(b);
// console.log(a);

// console.log(100 + 50 * 3);
// console.log((100 + 50) * 3);

// comparison operator:
// console.log(3 !== "3");

// console.log(3 <= 2);

// console.log(user.age >= 18);

// logical operators: && (and)  || (or)

// var permisionAge = true;
// var drivingTest = false;
// console.log(permisionAge || drivingTest);

// var html = false;
// var css = true;
// var js = true;
// var react = false;
// console.log((html || css) && js && react);

// console.log(1 && null && undefined && "abc");
// console.log(NaN || null || false || 0);

// console.log(Boolean("false"));

// var a = false;
// console.log(typeof []);

var hospital = {
    name: "x",
    patiants: [
        {
            name: "p1",
            age: 20,
            room: "201",
            doctor: "d1",
        },
        {
            name: "p2",
            age: 50,
            room: "202",
            doctor: "d2",
        },
    ],
};
