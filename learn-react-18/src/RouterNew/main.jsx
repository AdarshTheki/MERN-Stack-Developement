import React from "react";
import ReactDOM from "react-dom/client";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { App, About, Home, Github } from "./index";
import { githubLoader } from "./GithubLoader";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path=':id' element={<About />} />
            <Route loader={githubLoader} path='github' element={<Github />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
