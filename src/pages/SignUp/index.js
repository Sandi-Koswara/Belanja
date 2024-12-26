import Logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";
import { useEffect, useState, useContext } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdHome } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import google from "../../assets/images/googleicon.png";
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Checkbox from "@mui/material/Checkbox";

const SignUp = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);

    window.scrollTo(0, 0);
  });
  return (
    <section className="loginSection signUpSection">
      <div className="row">
        <div className="col-md-8 d-flex align-items-center flex-column part1 justify-content-center">
          <h1>
            BEST UX/UI FASHION{" "}
            <span className="text-sky">ECOMMERCE DASHBOARD </span>& ADMIN PANEL
          </h1>
          <p>
            Cupidatat exercitation deserunt elit esse officia duis sint enim
            consectetur. Culpa consequat magna cupidatat tempor sit velit
            laborum cupidatat consequat enim sit. Quis cillum et aliqua enim non
            quis. Nostrud excepteur ipsum ad cupidatat id nisi ex cupidatat
            nulla. Eu id ullamco laborum voluptate proident dolore exercitation
            occaecat magna nostrud nostrud.
          </p>
          <div className="w-100 mt-4">
            <Link to={"/"}>
              <Button className="btn-blue btn-lg btn-big">
                <IoMdHome />
                Go To Home
              </Button>
            </Link>
          </div>
        </div>
        <div className="col-md-4 pe-0 d-flex justify-content-center">
          <div className="loginBox">
            <div className="logo text-center">
              <div className="d-flex align-items-end justify-content-center">
                <img src={Logo} alt="logo" width="150px" />
                <h5 className="fw-bold align-self-end mb-0 ms-2">Register</h5>
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
                    <FaUserCircle />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your name"
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
                    <MdEmail />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your email"
                    onFocus={() => focusInput(1)}
                    onBlur={() => setInputIndex(null)}
                  />
                </div>

                <div
                  className={`form-group position-relative ${
                    inputIndex === 2 && "focus"
                  }`}
                >
                  <span className="icon">
                    <RiLockPasswordFill />
                  </span>
                  <input
                    type={`${isShowPassword ? "text" : "password"}`}
                    className="form-control"
                    placeholder="enter your password"
                    onFocus={() => focusInput(2)}
                    onBlur={() => setInputIndex(null)}
                  />

                  <span
                    className="toggleShowPassword"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </span>
                </div>

                <div
                  className={`form-group position-relative ${
                    inputIndex === 3 && "focus"
                  }`}
                >
                  <span className="icon">
                    <IoShieldCheckmarkSharp />
                  </span>
                  <input
                    type={`${isShowConfirmPassword ? "text" : "password"}`}
                    className="form-control"
                    placeholder="confirm your password"
                    onFocus={() => focusInput(3)}
                    onBlur={() => setInputIndex(null)}
                  />

                  <span
                    className="toggleShowPassword"
                    onClick={() =>
                      setIsShowConfirmPassword(!isShowConfirmPassword)
                    }
                  >
                    {isShowConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </span>
                </div>

                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="I agree to the terms and conditions"
                />

                <div className="form-group">
                  <Button className="btn-blue btn-lg w-100 btn-big">
                    Sign Up
                  </Button>
                </div>

                <div className="form-group text-center mb-0">
                  <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                    <span className="line"></span>
                    <span className="txt">or</span>
                    <span className="line"></span>
                  </div>
                  <Button
                    variant="outlined"
                    className="w-100 btn-lg btn-big loginWithGoogle"
                  >
                    <img src={google} alt="google" width="30px" /> &nbsp; Sign
                    Up with Google
                  </Button>
                </div>
              </form>

              <span className="text-center d-block mt-3">
                Already have an account?{" "}
                <Link to={"/login"} className="link color">
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
