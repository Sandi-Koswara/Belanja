import { Breadcrumbs } from "@mui/material";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { emphasize, styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import palazzo1 from "../../assets/images/palazzopants1.webp";
import palazzo2 from "../../assets/images/palazzopants2.webp";
import palazzo3 from "../../assets/images/palazzopants3.webp";
import { IoMdImages } from "react-icons/io";

//breadcrumb code
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

const sizes = ["S", "M", "L", "XL", "XXL"];

const colors = ["Red", "Green", "Blue", "White", "Black"];

const ProductUpload = () => {
  const [categoryValue, setCategoryValue] = useState("");
  const [brandValue, setBrandValue] = useState("");
  const [ratingValue, setRatingValue] = useState(1);
  const [clothesSize, setClothesSize] = useState([]);
  const [clothesColor, setClothesColor] = useState([]);

  const handleChangeCategory = (event) => {
    setCategoryValue(event.target.value);
  };

  const handleChangeBrand = (event) => {
    setBrandValue(event.target.value);
  };

  const handleChangeMultipleSize = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setClothesSize(value);
  };

  const handleChangeMultipleColor = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setClothesColor(value);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4 res-col">
          <h5 className="mb-0">Product List</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb
              component="a"
              label="Products"
              href="#"
              deleteIcon={<ExpandMoreIcon />}
            />

            <StyledBreadcrumb
              label="Product Upload"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>
        <form className="form">
          <div className="row">
            <div className="col-sm-7">
              <div className="card p-4">
                <h5 className="mb-4">Basic Information</h5>
                <div className="form-group">
                  <h6>TITLE</h6>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <h6>DESCRIPTION</h6>
                  <textarea rows={5} cols={10} />
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>CATEGORY</h6>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={categoryValue}
                        label="Category"
                        displayEmpty
                        onChange={handleChangeCategory}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Mans"}>Mans</MenuItem>
                        <MenuItem value={"Womens"}>Womens</MenuItem>
                        <MenuItem value={"Kids"}>Kids</MenuItem>
                      </Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>BRAND</h6>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={brandValue}
                        label="Brand"
                        displayEmpty
                        onChange={handleChangeBrand}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Richman"}>Richman</MenuItem>
                        <MenuItem value={"Tommy Hilfiger"}>
                          Tommy Hilfiger
                        </MenuItem>
                        <MenuItem value={"TrendyWear Collection"}>
                          TrendyWear Collection
                        </MenuItem>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>REGULAR PRICE</h6>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>DISCOUNT PRICE</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>SHIPPING FEE</h6>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>TAX RATE</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>RATINGS</h6>
                      <Rating
                        name="simple-controlled"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>PRODUCT STOCK</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h6>TAGS</h6>
                  <textarea rows={5} cols={10} />
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="card p-4">
                <h5 className="mb-4">Organization</h5>
                <div className="form-group">
                  <h6>ADD CATEGORY</h6>
                  <div className="row">
                    <div className="col">
                      <input type="text" />
                    </div>
                    <div className="col-auto">
                      <Button className="btn-blue btn-big">ADD</Button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h6>ADD BRAND</h6>
                  <div className="row">
                    <div className="col">
                      <input type="text" />
                    </div>
                    <div className="col-auto">
                      <Button className="btn-blue btn-big">ADD</Button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h6>ADD COLOR</h6>
                  <div className="row">
                    <div className="col">
                      <input type="text" />
                    </div>
                    <div className="col-auto">
                      <Button className="btn-blue btn-big">ADD</Button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h6>ADD SIZE</h6>
                  <div className="row">
                    <div className="col">
                      <input type="text" />
                    </div>
                    <div className="col-auto">
                      <Button className="btn-blue btn-big">ADD</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-4">
                <h5 className="mb-4">Specification</h5>
                <div className="row">
                  <div className="col">
                    <div className="size form-group">
                      <h6>SIZE</h6>
                      <Select
                        multiple
                        native
                        value={clothesSize}
                        // @ts-ignore Typings are not considering `native`
                        onChange={handleChangeMultipleSize}
                        inputProps={{
                          id: "select-multiple-native",
                        }}
                      >
                        {sizes.map((name) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="color form-group">
                      <h6>COLOR</h6>
                      <Select
                        multiple
                        native
                        value={clothesColor}
                        // @ts-ignore Typings are not considering `native`
                        onChange={handleChangeMultipleColor}
                        inputProps={{
                          id: "select-multiple-native",
                        }}
                      >
                        {colors.map((name) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <h6>STOCK</h6>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <h6>WEIGHT</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-4">
            <h5 className="mb-4">Media And Published</h5>
            <div className="row g-4 mb-4">
              <div className="col">
                <img
                  className="img-fluid rounded-2"
                  src={palazzo1}
                  alt="palazzo1"
                />
              </div>
              <div className="col">
                <img
                  className="img-fluid rounded-2"
                  src={palazzo2}
                  alt="palazzo2"
                />
              </div>
              <div className="col">
                <img
                  className="img-fluid rounded-2"
                  src={palazzo3}
                  alt="palazzo3"
                />
              </div>
              <div className="upload col d-flex align-items-center justify-content-center p-3 ms-2 me-3">
                <div className="form-group text-center">
                  <IoMdImages size={50} />
                  <h6>upload image</h6>
                </div>
              </div>
            </div>
            <Button className="btn-blue btn-lg btn-big w-100">
              <FaCloudUploadAlt className="me-2" /> PUBLISH AND VIEW
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductUpload;
