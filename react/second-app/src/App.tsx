import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/home/homePage";
import PostListPage from "./pages/post/postListPage";
import Layout from "./components/layout";
import NotFoundPage from "./pages/notfound/notFoundPage";
import PostItem from "./pages/post/postItem";
import BuiltInHookPage from "./pages/built-in-hooks/builtInHookPage";
import UseRefPage from "./pages/useRef/useRefPage";
import UseMemoPage from "./pages/useMemo/useMemoPage";
import UseCallbackPage from "./pages/useCallback/useCallbackPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/post-list" element={<PostListPage />}>
                        <Route path="/post-list/:id" element={<PostItem />} />
                    </Route>

                    <Route path="/built-in-hook" element={<BuiltInHookPage />}>
                        <Route
                            path="/built-in-hook/useRef"
                            element={<UseRefPage />}
                        />
                        <Route
                            path="/built-in-hook/useMemo"
                            element={<UseMemoPage />}
                        />
                        <Route
                            path="/built-in-hook/useCallback"
                            element={<UseCallbackPage />}
                        />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
