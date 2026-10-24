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

type PaymentStatus = "payed" | "notPayed" | "waiting";
export function payStatus(a: PaymentStatus) {
    if (a === "payed") return "Success";
    else if (a === "notPayed") return "Error";
    else return "Loading";
}
