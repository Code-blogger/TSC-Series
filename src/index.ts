export default function intro() {
    console.log("Welcome To TypeScript Series\nBy Mayank Yadav\n");
}
export interface Circle<T = number> {
    radius: T,
    area:T,
    circumference:T
}