import { useState } from "react";
import Alert from "./components/alert";
import BeautifulButton from "./components/beautifulButton";
import Button from "./components/button";
import Calculator from "./components/calculator/calculator";
import Card from "./components/card";
import Counter from "./components/counter";
import Header from "./components/header/header";
import Image from "./components/image";
import Input from "./components/input";
import Layout from "./components/layout";
import MyInput from "./components/myInput";
import Password from "./components/password";
import User from "./components/profile/user";
import SearchInput from "./components/searchInput";
import Text from "./components/text";
import Login from "./components/login";
import LoginUser from "./components/loginUser";
import FetchData from "./components/fetch-data";
import WindowSize from "./components/window-size";
import Timer from "./components/timer";
import DelayCounter from "./components/delay-counter";
import C from "./components/levels/c";
import NameContext from "./context/NameContext";
import ThemeContext from "./context/ThemeContext";
import { sum } from "./utils/math";

const user = {
    name: "nafise",
    job: ["dev", "student"],
    disc: "my name is...",
};

const products = [
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 8,
        discount: 5,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 0,
        discount: 0,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 2,
        discount: 3,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 0,
        discount: 0,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 5,
        discount: 4,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 1,
        discount: 0,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 0,
        discount: 0,
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
        stock: 8,
        discount: 0,
    },
];

const name = "Fredrik";

export default function App() {
    const [text, setText] = useState("");
    const [show, setShow] = useState(true);
    const [theme, setTheme] = useState("dark");

    function handleChange(value) {
        setText(value);
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
            <Layout text={text}>
                <span>{sum(4, 5)}</span>
                <span>{sum("ali", "mirzaii")}</span>
                {/* <Login /> */}
                {/* <LoginUser /> */}
                {/* <Text />
                <Image />
                <Header /> */}
                {/* <BeautifulButton />
            <Input />
            <Counter />
            <SearchInput />
            <Calculator />
            <User data={user} />
            <Alert text="This is a text" type="warning" />
            <Button text="Click On Me" size="large">
                <span>This is a Button</span>
            </Button> */}
                {/* <div className="grid grid-cols-4 gap-5">
                {products.map((product, i) => (
                    <Card key={i} product={product} />
                    ))}
                    </div> */}
                {/* <Password /> */}
                {/* <MyInput text={text} change={handleChange} /> */}
                {/* <FetchData /> */}
                {/* <button
                onClick={() => setShow(!show)}
                className="border active:bg-red-500 rounded-sm px-2 cursor-pointer"
            >
            {show ? "hide" : "show"}
            </button>
            {show && <WindowSize />}
            {show && <Timer />} */}
                {/* <DelayCounter /> */}
                <NameContext.Provider value={name}>
                    <div className="bg-red-200 h-40">
                        <span>App:</span>
                        <C />
                    </div>
                </NameContext.Provider>
            </Layout>
        </ThemeContext.Provider>
    );
}
