import cntl from "cntl";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useIsAuthenticated } from "../../hooks/useIsAuthenticated";
import { LoadingOverlay } from "../../components/LoadingOverlay";
import { useEffect, useRef } from "react";

const loginContainerCN = cntl`
  container
  flex
  items-center
  justify-center
  w-full
  h-screen
  m-auto
`;
const logginWrapperCN = cntl`
  flex 
  flex-col
  items-center
  bg-gray-100
  justify-between
  h-96
  p-20
  rounded
  shadow-md
`;
const buttonCN = cntl`
  flex
  justify-between
  gap-1
  items-center
  text-white
  border
  rounded
  bg-sky-600
  h-12
  p-1
`;

function Login() {
  const isComponentMounted = useRef(true);
  const { isAuth, loading } = useIsAuthenticated(isComponentMounted);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  return (
    <div className={loginContainerCN}>
      <div className={logginWrapperCN}>
        <div className="w-72">
          <img
            src="https://www.testtest.cl/wp-content/themes/testtest-theme/img/bluelogo.png"
            alt="testtest img"
          />
        </div>
        <LoadingOverlay loading={loading} />
        <a
          className={buttonCN}
          href={`${process.env.REACT_APP_BACKEND_URL_BASE}/auth/google`}
        >
          <FcGoogle className="w-10 h-10 p-2 bg-white" />
          <p className="mx-4">Sign in with Google</p>
        </a>
      </div>
    </div>
  );
}

export default Login;
