import Logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";
import { useEffect, useState, useContext } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import google from "../../assets/images/googleicon.png";

const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  });
  return (
    <section className="loginSection">
      <div className="loginBox">
        <div className="logo text-center">
          <div className="d-flex align-items-end justify-content-center">
            <img src={Logo} alt="logo" width="150px" />
            <h5 className="fw-bold align-self-end mb-0 ms-2">Login</h5>
          </div>
        </div>
        <div className="wrapper mt-3 card border">
          <form>
            <div
              className={`form-group position-relative ${
                inputIndex === 0 && "focus"
              }`}
            >
              <span className="icon">
                <MdEmail />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="enter your email"
                onFocus={() => focusInput(0)}
                onBlur={() => setInputIndex(null)}
                autoFocus
              />
            </div>

            <div
              className={`form-group position-relative ${
                inputIndex === 1 && "focus"
              }`}
            >
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <input
                type={`${isShowPassword ? "text" : "password"}`}
                className="form-control"
                placeholder="enter your password"
                onFocus={() => focusInput(1)}
                onBlur={() => setInputIndex(null)}
              />

              <span
                className="toggleShowPassword"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <div className="form-group">
              <Button className="btn-blue btn-lg w-100 btn-big">Sign In</Button>
            </div>

            <div className="form-group text-center mb-0">
              <Link to="/forgot-password" className="link">
                FORGOT PASSWORD
              </Link>
              <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                <span className="line"></span>
                <span className="txt">or</span>
                <span className="line"></span>
              </div>
              <Button
                variant="outlined"
                className="w-100 btn-lg btn-big loginWithGoogle"
              >
                <img src={google} alt="google" width="30px" /> &nbsp; Sign In
                with Google
              </Button>
            </div>
          </form>
        </div>
        <div className="wrapper mt-3 card border footer p-3">
          <span className="text-center">
            Don't have an account?{" "}
            <Link to={"/signUp"} className="link color">
              Register
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
