import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/homePage";
import PostListPage from "./pages/post/postListPage";
import Layout from "./components/layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/post-list" element={<PostListPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
