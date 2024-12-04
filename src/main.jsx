import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ShopPage from "./pages/shop/ShopPage.jsx";
import ProductDetail from "./pages/shop/ProductDetail.jsx";
import "sweetalert2/dist/sweetalert2.min.css";
import TermsAndConditions from "./TermsAndConditions.jsx";
import PrivacyAndPolicy from "./PrivacyAndPolicy.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:categoryId",
        element: <ShopPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyAndPolicy />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      {/* Move ScrollToTop inside RouterProvider */}
    </RouterProvider>
  </StrictMode>
);
