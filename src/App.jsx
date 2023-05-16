import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { HomePage,SignUp } from "Pages";

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
          <Route path="/signin" element={<SignUp />} />
          {/*    AUTH PAGE */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
