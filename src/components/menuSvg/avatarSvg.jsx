import { Link, useLocation} from "react-router-dom";


function AvatarSvgElement() {
  const location = useLocation()
  return (
    <Link to="/main/user-profile">
    <div className="avatar-svg-element w-[24px] h-[24px]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 11.975C10.9 11.975 10 11.625 9.3 10.925C8.6 10.225 8.25 9.32498 8.25 8.22498C8.25 7.12498 8.6 6.22498 9.3 5.52498C10 4.82498 10.9 4.47498 12 4.47498C13.1 4.47498 14 4.82498 14.7 5.52498C15.4 6.22498 15.75 7.12498 15.75 8.22498C15.75 9.32498 15.4 10.225 14.7 10.925C14 11.625 13.1 11.975 12 11.975ZM4 20V17.65C4 17.0166 4.15833 16.475 4.475 16.025C4.79167 15.575 5.2 15.2333 5.7 15C6.81667 14.5 7.8875 14.125 8.9125 13.875C9.9375 13.625 10.9667 13.5 12 13.5C13.0333 13.5 14.0583 13.6291 15.075 13.8875C16.0917 14.1458 17.1583 14.5166 18.275 15C18.7917 15.2333 19.2083 15.575 19.525 16.025C19.8417 16.475 20 17.0166 20 17.65V20H4Z"
          fill={location.pathname === "/main/user-profile"? "#7BBE4A":"#201E1E" }
          fillOpacity={location.pathname === "/main/user-profile"? "1": "0.65"}
        />
      </svg>
    </div>
    </Link>
    
  );
}

export default AvatarSvgElement;