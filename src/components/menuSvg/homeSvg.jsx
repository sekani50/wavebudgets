import { Link, useLocation} from "react-router-dom";

function MenuElement() {
  const location = useLocation()
  return (
    <Link to="/main/vendors">
    <div className="menu w-[24px] h-[24px]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 21C5.08333 21 4.72917 20.8542 4.4375 20.5625C4.14583 20.2708 4 19.9167 4 19.5V9.75C4 9.51667 4.05417 9.29167 4.1625 9.075C4.27083 8.85833 4.41667 8.68333 4.6 8.55L11.1 3.675C11.2333 3.575 11.375 3.5 11.525 3.45C11.675 3.4 11.8333 3.375 12 3.375C12.1667 3.375 12.325 3.4 12.475 3.45C12.625 3.5 12.7667 3.575 12.9 3.675L19.4 8.55C19.5833 8.68333 19.7292 8.85833 19.8375 9.075C19.9458 9.29167 20 9.51667 20 9.75V19.5C20 19.9167 19.8542 20.2708 19.5625 20.5625C19.2708 20.8542 18.9167 21 18.5 21H14V14H10V21H5.5Z"
          fill={location.pathname === "/main/vendors"? "#7BBE4A":"#201E1E" }
          fillOpacity={location.pathname === "/main/"? "1": "0.65"}
        />
      </svg>
    </div>
    </Link>
    
  );
}

export default MenuElement;