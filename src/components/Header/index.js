import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.jpg";
import profile2 from "../../assets/images/profile2.jpg";
import { Button } from "@mui/material";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import {
  IoCartOutline,
  IoShieldHalfSharp,
  IoPersonSharp,
  IoMenu,
} from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import { MyContext } from "../../App";
import UserAvatarImg from "../UserAvatarImg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotification = Boolean(isOpenNotificationDrop);

  const context = useContext(MyContext);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpenNotificationDrop = () => {
    setIsOpenNotificationDrop(true);
  };

  const handleCloseNotificationDrop = () => {
    setIsOpenNotificationDrop(false);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-2 part1">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>

            {context.windowWidth > 992 && (
              <div className="col-3 d-flex align-items-center part2">
                <Button
                  className="rounded-circle me-3"
                  onClick={() =>
                    context.setIsToggleSidebar(!context.isToggleSidebar)
                  }
                >
                  {context.isToggleSidebar === false ? (
                    <MdMenuOpen />
                  ) : (
                    <MdOutlineMenu />
                  )}
                </Button>
                <SearchBox />
              </div>
            )}

            <div className="col-7 d-flex align-items-center justify-content-end part3">
              <Button
                className="rounded-circle me-3"
                onClick={() => context.setTheme(!context.theme)}
              >
                {context.theme === true ? (
                  <MdDarkMode />
                ) : (
                  <MdOutlineLightMode />
                )}
              </Button>
              {context.windowWidth > 992 && (
                <>
                  <Button className="rounded-circle me-3">
                    <IoCartOutline />
                  </Button>
                  <Button className="rounded-circle me-3">
                    <MdOutlineMailOutline />
                  </Button>
                </>
              )}

              <div className="dropdownWrapper position-relative">
                <Button
                  className="rounded-circle me-3"
                  onClick={handleOpenNotificationDrop}
                >
                  <FaRegBell />
                </Button>
                <Button
                  className="rounded-circle me-3"
                  onClick={() => context.openNav()}
                >
                  <IoMenu />
                </Button>
                <Menu
                  anchorEl={isOpenNotificationDrop}
                  className="notification dropdown_list"
                  id="notification"
                  open={openNotification}
                  onClose={handleCloseNotificationDrop}
                  onClick={handleCloseNotificationDrop}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head ps-3 pb-0">
                    <h4>Orders (12)</h4>
                  </div>

                  <Divider className="mb-1" />

                  <div className="scroll">
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <div className="d-flex">
                        <div>
                          <UserAvatarImg img={profile2} />
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Mahmudul</b> added to his favorite list{" "}
                              <b>Leather belt steve modern</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile2} alt="buyer_1" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Mahmudul</b> added to his favorite list{" "}
                              <b>Leather belt steve modern</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile2} alt="buyer_1" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Mahmudul</b> added to his favorite list{" "}
                              <b>Leather belt steve modern</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile2} alt="buyer_1" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Mahmudul</b> added to his favorite list{" "}
                              <b>Leather belt steve modern</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile2} alt="buyer_1" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Mahmudul</b> added to his favorite list{" "}
                              <b>Leather belt steve modern</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <div className="d-flex">
                        <div>
                          <div className="userImg">
                            <span className="rounded-circle">
                              <img src={profile2} alt="buyer_1" />
                            </span>
                          </div>
                        </div>
                        <div className="dropdownInfo">
                          <h4>
                            <span>
                              <b>Mahmudul</b> added to his favorite list{" "}
                              <b>Leather belt steve modern</b>
                            </span>
                          </h4>
                          <p className="text-sky mb-0">few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                  <div className="ps-3 pe-3 w-100 pt-2 pb-1">
                    <Button className="btn-blue w-100">
                      View all notifications
                    </Button>
                  </div>
                </Menu>
              </div>

              {context.isLogin !== true ? (
                <Link to={"/login"}>
                  <Button className="btn-blue btn-lg btn-round">Sign In</Button>
                </Link>
              ) : (
                <div className="myAccWrapper">
                  <Button
                    className="myAcc d-flex align-items-center"
                    onClick={handleOpenMyAccDrop}
                  >
                    <UserAvatarImg img={profile} />
                    <div className="userInfo res-hide">
                      <h4>Jane Doe</h4>
                      <p className="mb-0">@jane_doe</p>
                    </div>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMyAcc}
                    onClose={handleCloseMyAccDrop}
                    onClick={handleCloseMyAccDrop}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <IoPersonSharp fontSize="small" />
                      </ListItemIcon>
                      My Account
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <IoShieldHalfSharp />
                      </ListItemIcon>
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccDrop}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
