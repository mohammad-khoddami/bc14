import Alert from "./components/alert";
import Button from "./components/button";
import Calculator from "./components/calculator/calculator";
import Card from "./components/card";
import Header from "./components/header/header";
import Image from "./components/image";
import Layout from "./components/layout";
import User from "./components/profile/user";
import Text from "./components/text";

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
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
    {
        name: "گوشی موبایل شیائومی مدل Redmi Note 14s دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
        image: "https://dkstatics-public.digikala.com/digikala-products/0c8ccdba4f2d4b1dae28d90ce88994f415b89fe9_1746520020.jpg",
        price: "92,000,000",
    },
];

export default function App() {
    return (
        <Layout>
            {/* <Text />
                <Image />
                <Header /> */}
            <Calculator />
            <User data={user} />
            <Alert text="This is a text" type="warning" />
            <Button text="Click On Me" size="large">
                <span>This is a Button</span>
            </Button>
            <div className="grid grid-cols-4 gap-5">
                {products.map((product, i) => (
                    <Card key={i} product={product} />
                ))}
            </div>
        </Layout>
    );
}
