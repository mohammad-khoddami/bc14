export function sum(a: number, b: number): number {
    return a + b;
}

export function concat(a: string, b: string): string {
    return `${a} ${b}`;
}

// export const name = "nima";

//typescript types: string, number, boolean, bigint, null, undefined, any

export function sumOrConcat(a: number | string, b: number | string) {
    if (typeof a === "string" || typeof b === "string") {
        return `${a} ${b}`;
    }
    return a + b;
}

// union (|)
type PaymentStatus = "payed" | "notPayed" | "waiting";
export function payStatus(a: PaymentStatus) {
    if (a === "payed") return "Success";
    else if (a === "notPayed") return "Error";
    else return "Loading";
}

// type myType = string | number | boolean;
// export function myFunc(a: myType) {
//     return a;
// }

export function printNumberList(a: (string | number)[]) {
    for (let index = 0; index < a.length; index++) {
        console.log(a[index]);
    }
    return a;
}

type Fullname = {
    firtname: string;
    lastname: string;
};

type Address = {
    country: string;
    city: string;
    street: string;
    postalCode: string;
};

// type Student = {
//     fullname: Fullname;
//     age: number;
//     address?: Address; //optional
// };

interface User {
    fullname: Fullname;
    age: number;
    address?: Address;
}

interface Student extends User {
    score: number;
    courses: string[];
}

// export const student: Student = {
//     fullname: { firtname: "babak", lastname: "amini" },
//     age: 23,
//     address: {
//         country: "Iran",
//         city: "Isfahan",
//         street: "khajo",
//         postalCode: "5151515151",
//     },
// };

// export const student2: Student = {
//     fullname: { firtname: "a", lastname: "b" },
//     age: 12,
// };

export const studentList: Student[] = [
    {
        fullname: { firtname: "babak", lastname: "amini" },
        age: 23,
        address: {
            country: "Iran",
            city: "Isfahan",
            street: "khajo",
            postalCode: "5151515151",
        },
        score: 20,
        courses: ["a", "b"],
    },
    {
        fullname: { firtname: "a", lastname: "b" },
        age: 12,
        score: 17,
        courses: ["ab"],
    },
];

//Intersection (&)

type Person = {
    name: Fullname & { nikname: string };
};

export const p: Person = {
    name: {
        firtname: "a",
        lastname: "b",
        nikname: "c",
    },
};
