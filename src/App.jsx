import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import {
  HomePage,
  SignIn,
  SignUp,
  ProductDetail,
  UserCart,
  DetailPage,
  ActivationCard,
  MerchantSignUp,
  AddToStore,
  AwaitActivation,

} from "Pages";

import Scrolltotop from "components/UI/ScrollToTop";

const App = () => {
  return (
    <div className="app_wrapper bg-gray-200 sm:text-[16px] text-sm">
      <div>
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "top-center",
            success: {
              style: {
                background: "#222",
                color: "#fff",
              },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: {
                background: "red",
                color: "#fff",
              },
            },
          }}
        />
      </div>
      <Router>
        <Scrolltotop />
        <Routes>
          {/*    LANDING PAGE */}

          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<UserCart />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/activate-account" element={<ActivationCard />} />
          <Route path="/not-activated" element={<AwaitActivation />} />
          <Route path="/register" element={<MerchantSignUp />} />
          <Route path="/store/:id" element={<AddToStore />} />
          {/*    AUTH PAGE */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
