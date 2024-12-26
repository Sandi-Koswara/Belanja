import React, { useState, useRef } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import Slider from "react-slick";
import Palazzo1 from "../../assets/images/palazzopants1.webp";
import Palazzo2 from "../../assets/images/palazzopants2.webp";
import Palazzo3 from "../../assets/images/palazzopants3.webp";
import {
  MdBrandingWatermark,
  MdColorLens,
  MdPublish,
  MdShoppingCart,
  MdStar,
  MdTag,
} from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaReply, FaRuler } from "react-icons/fa";
import { HiTag } from "react-icons/hi2";
import UserAvatarImg from "../../components/UserAvatarImg";
import profile3 from "../../assets/images/profile3.jpg";
import { Button, Rating } from "@mui/material";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const bigSliderRef = useRef(null);

  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentImage(newIndex),
  };

  var productSliderSmlOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const images = [Palazzo1, Palazzo2, Palazzo3];

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4 res-col">
          <h5 className="mb-0">Product View</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb component="a" href="#" label="Products" />

            <StyledBreadcrumb component="a" href="#" label="Product View" />
          </Breadcrumbs>
        </div>

        <div className="card productDetailsSection">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
                <h6 className="mb-4">Product Gallery</h6>
                <Slider
                  {...productSliderOptions}
                  ref={bigSliderRef}
                  className="sliderBig mb-3"
                >
                  {images.map((image, index) => (
                    <div key={index} className="item">
                      <img src={image} alt={`${index + 1}`} className="w-100" />
                    </div>
                  ))}
                </Slider>
                <Slider
                  {...productSliderSmlOptions}
                  className="sliderSml flex justify-content-center"
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="item"
                      onClick={() => {
                        setCurrentImage(index); // Update the current image index
                        bigSliderRef.current.slickGoTo(index); // Navigate the big slider
                      }}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-100"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-md-7">
              <div className="pt-3 pb-3 ps-4 pe-4">
                <h6 className="mb-3">Product Details</h6>
                <h4>Palazzo Pants - Woman's Fashion</h4>
                <div className="productInfo mt-3">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Brand</span>
                    </div>
                    <div className="col-sm-9">
                      <span>TrendyWear Co.</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategoryAlt />
                      </span>
                      <span className="name">Category</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Women's Clothing - Pants</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdTag />
                      </span>
                      <span className="name">Tags</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>Casual</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Elegant</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Palazzo</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Woman's Wear</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdColorLens />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>Black</span>
                          </li>
                          <li className="list-inline-item">
                            <span>White</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Navy Blue</span>
                          </li>
                          <li className="list-inline-item">
                            <span>Beige</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaRuler />
                      </span>
                      <span className="name">Size</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>S</span>
                          </li>
                          <li className="list-inline-item">
                            <span>M</span>
                          </li>
                          <li className="list-inline-item">
                            <span>L</span>
                          </li>
                          <li className="list-inline-item">
                            <span>XL</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <HiTag />
                      </span>
                      <span className="name">Price</span>
                    </div>
                    <div className="col-sm-9">
                      <span>$49.99</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdShoppingCart />
                      </span>
                      <span className="name">Stock</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(50) Pieces</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdStar />
                      </span>
                      <span className="name">Review</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(43) Reviews</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdPublish />
                      </span>
                      <span className="name">Published</span>
                    </div>
                    <div className="col-sm-9">
                      <span>03 December 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h6 className="mt-4 mb-3 ps-4 pe-4">Product Description</h6>
          <p className="ps-4 pe-4">
            Commodo culpa culpa elit incididunt sit quis. Commodo commodo sunt
            mollit cupidatat qui nisi ut irure Lorem. Consectetur aute esse
            cupidatat anim labore. Elit minim proident ullamco consectetur
            aliquip reprehenderit. Ipsum ipsum esse deserunt qui cillum aliquip
            labore Lorem adipisicing dolore in fugiat sit ut. Do fugiat esse
            labore aliquip amet consectetur occaecat adipisicing do sit ad. Id
            magna fugiat culpa pariatur ullamco laboris ullamco non officia est
            eiusmod. Exercitation id et sint amet consectetur cillum non nulla
            eiusmod do nisi enim dolor laborum. Sint proident enim irure id
            dolore velit. Officia eiusmod voluptate ullamco consequat nisi
            minim. Quis reprehenderit quis cupidatat ipsum veniam elit aliquip
            veniam. Ipsum est proident sint id nostrud ad officia. Tempor nulla
            occaecat laboris eiusmod ullamco enim pariatur ut Lorem qui laborum
            irure anim et. Cupidatat nisi est occaecat aliqua eu velit pariatur
            non ex exercitation excepteur. Cupidatat dolore ex occaecat non duis
            laboris aliqua sunt velit veniam id ea minim esse. Esse occaecat
            reprehenderit veniam id deserunt incididunt aliqua proident quis
            consectetur ut. Labore consequat minim nisi consectetur quis anim
            deserunt deserunt.
          </p>

          <br />
          <h6 className="mb-3 ps-4 pe-4">Rating Analytics</h6>
          <div className="ratingSection">
            <div className="ratingrow d-flex align-items-center ps-4 pe-4">
              <span className="col1">5 Star</span>
              <div className="col2">
                <div className="progress-bar" style={{ width: "70%" }}></div>
              </div>
              <span className="col3">(35)</span>
            </div>
            <div className="ratingrow d-flex align-items-center ps-4 pe-4">
              <span className="col1">4 Star</span>
              <div className="col2">
                <div className="progress-bar" style={{ width: "50%" }}></div>
              </div>
              <span className="col3">(25)</span>
            </div>
            <div className="ratingrow d-flex align-items-center ps-4 pe-4">
              <span className="col1">3 Star</span>
              <div className="col2">
                <div className="progress-bar" style={{ width: "40%" }}></div>
              </div>
              <span className="col3">(20)</span>
            </div>
            <div className="ratingrow d-flex align-items-center ps-4 pe-4">
              <span className="col1">2 Star</span>
              <div className="col2">
                <div className="progress-bar" style={{ width: "20%" }}></div>
              </div>
              <span className="col3">(10)</span>
            </div>
            <div className="ratingrow d-flex align-items-center ps-4 pe-4">
              <span className="col1">1 Star</span>
              <div className="col2">
                <div className="progress-bar" style={{ width: "5%" }}></div>
              </div>
              <span className="col3">(3)</span>
            </div>
          </div>

          <br />
          <h6 className="mt-4 mb-4 ps-4 pe-4">Customer Reviews</h6>
          <div className="reviewSection ps-4 pe-4 mb-4">
            <div className="reviewRow">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImg img={profile3} lg={true} />
                      <div className="info ps-2">
                        <h6>Anastasia</h6>
                        <span>25 minutes ago!</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <div className="ms-auto">
                    <Button className="btn-blue btn-big btn-lg ms-auto">
                      <FaReply className="me-2" /> Reply
                    </Button>
                  </div>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="reviewRow reply">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImg img={profile3} lg={true} />
                      <div className="info ps-2">
                        <h6>Anastasia</h6>
                        <span>25 minutes ago!</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <div className="ms-auto">
                    <Button className="btn-blue btn-big btn-lg ms-auto">
                      <FaReply className="me-2" /> Reply
                    </Button>
                  </div>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="reviewRow">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex flex-column">
                    <div className="userInfo d-flex align-items-center mb-3">
                      <UserAvatarImg img={profile3} lg={true} />
                      <div className="info ps-2">
                        <h6>Anastasia</h6>
                        <span>25 minutes ago!</span>
                      </div>
                    </div>
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                  <div className="ms-auto">
                    <Button className="btn-blue btn-big btn-lg ms-auto">
                      <FaReply className="me-2" /> Reply
                    </Button>
                  </div>
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            <br />

            <h6 className="mt-4 mb-3">Review Reply Form</h6>
            <form className="reviewForm">
              <textarea
                placeholder="Write your review here..."
                className="mb-4"
              ></textarea>
              <Button className="w-100 btn-blue btn-big btn-lg">
                Drop Your Replies
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
