import axios from "axios";
import cntl from "cntl";
import { useNavigate } from "react-router-dom";

const navBarContainerCN = cntl`
  flex
  items-center
  justify-between
  w-full
  py-3
  px-5
  h-18
  bg-slate-200
`;

const navBarLinkCN = cntl`
  px-4
  py-2
  underline
  rounded-md
  cursor-pointer
  hover:transition-colors
  hover:text-sky-500
`;

const navBarBtnCN = cntl`
  px-4
  py-2
  rounded-md
  cursor-pointer
  hover:transition-opacity
  hover:bg-white
  bg-slate-50
  font-semibold
`;

export default function NavBar() {
  const navigation = useNavigate();
  const handleLogout = async () => {
    await axios(`${process.env.REACT_APP_BACKEND_URL_BASE}/auth/logout`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then(() => {
      localStorage.clear();
      sessionStorage.clear();
      navigation("/login");
    });
  };

  return (
    <div className={navBarContainerCN}>
      <div className="w-48 cursor-pointer">
      {/* TODO: redirect to home page */}
        <img
          src="https://www.testtest.cl/wp-content/themes/testtest-theme/img/bluelogo.png"
          alt="testtest img"
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className={navBarLinkCN}>
          Admin
        </div>
        <div
          className={navBarBtnCN}
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
}
