import React, { useState } from "react";
import { categories } from "./data";
import "./addproduct.scss";
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'

const AddProduct = () => {
  const [selectedImage, setselectedImage] = useState(null);
  const [isEditButton, setisEditButton] = useState(false);
  const [downloadedImage, setdownloadedImage] = useState(null);
  const [price, setprice] = useState(0);
  //const [selectedCategory, setselectedCategory] = useState("");
  const [isChecked, setisChecked] = useState(false);
  const [description, setdescription] = useState("");
  const [name, setname] = useState("");
  const [isSubmit, setisSubmit] = useState(false);
  const [selectedCat, setselectedCat] = useState();

  const selectedImageObj = {
    first: null,
    second: null,
    third: null,
    forth: null,
  };

  const imageFile = {
    first: { img: null, isEdit: false },
    second: { img: null, isEdit: false },
    third: { img: null, isEdit: false },
    forth: { img: null, isEdit: false },
  };

  const chooseImage = (e) => {};
  const removeImage = (e) => {};

  const saveToDatabse = () => {};

  const selectedFn = (cat) => {
    setselectedCat(cat);
    console.log(cat)
  };

  return (
    <div className="let swipeIn mt-[40px] min-[450px]:mt-[60px] w-full sm:w-[96%] min-[1000px]:w-[85%] pb-[5rem] sm:pb-[5rem] space-y-[5%] float-right p-6 text-">
      <div className="space-y-[5%] w-full sm:w-[80%] mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-6 h-6 bg-none"></div>
          <p className="font-medium text-center text-lg sm:text-xl uppercase">
            product details
          </p>
          <div className="w-6 h-6 bg-none"></div>
        </div>

        <div className="rounded-md relative p-3 sm:p-6 border space-y-[5%] border-zinc-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative w-full border text-sm h-[160px] sm:h-[230px] rounded-md border-zinc-700">
              <div
                className={
                  selectedImageObj.first
                    ? "w-full h-[160px] sm:h-[230px] rounded md"
                    : "hidden"
                }
              >
                <img
                  src={selectedImageObj.first}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div
                className={
                  selectedImageObj.first
                    ? "hidden"
                    : "w-[50%] absolute inset-0 m-auto h-fit flex flex-col justify-center items-center"
                }
              >
                <div className="w-8 h-8 sm:w-6 sm:h-6">
                  <MdOutlinePhotoSizeSelectActual className="text-[25px] text-zinc-700"/>
                </div>
                <div className="flex flex-row">
                  <label className="label text-center">
                    <input
                      type="file"
                      name="file"
                      id="first"
                      accept="image/jpeg, image/png, image/jpg"
                      onChange={(e) => {
                        chooseImage(e);
                      }}
                    />
                    <span className="font-normal text-zinc-900">
                      Select an image
                    </span>
                  </label>
                </div>
              </div>
              <button
                onClick={(e) => {
                  removeImage(e);
                }}
                id="first"
                className={
                  selectedImageObj.first
                    ? "absolute text-white py-1 px-2 bg-zinc-700 rounded-md right-0 top-0"
                    : "hidden"
                }
              >
                Edit
              </button>
            </div>

            <div className="relative w-full text-sm border h-[160px] sm:h-[230px] rounded-md border-zinc-700">
              <div
                className={
                  selectedImageObj.second
                    ? "w-full h-[160px] sm:h-[230px] rounded md"
                    : "hidden"
                }
              >
                <img
                  src={selectedImageObj.second}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div
                className={
                  selectedImageObj.second
                    ? "hidden"
                    : "w-[50%] absolute inset-0 m-auto h-fit flex flex-col justify-center items-center"
                }
              >
                <div className="w-8 h-8 sm:w-6 sm:h-6">
                <MdOutlinePhotoSizeSelectActual className="text-[25px] text-zinc-700"/>
                </div>
                <div className="flex flex-row">
                  <label className="label text-center">
                    <input
                      type="file"
                      name="file"
                      id="second"
                      accept="image/jpeg, image/png, image/jpg"
                      onChange={(e) => {
                        chooseImage(e);
                      }}
                    />
                    <span className="font-normal text-zinc-700">
                      Select an image
                    </span>
                  </label>
                </div>
              </div>
              <button
                onClick={(e) => {
                  removeImage(e);
                }}
                id="second"
                className={
                  selectedImageObj.second
                    ? "absolute text-white py-1 px-2 bg-zinc-700 rounded-md right-0 top-0"
                    : "hidden"
                }
              >
                Edit
              </button>
            </div>

            <div className="relative w-full text-sm border h-[160px] sm:h-[230px] rounded-md border-zinc-700">
              <div
                className={
                  selectedImageObj.third
                    ? "w-full h-[160px] sm:h-[230px] rounded md"
                    : "hidden"
                }
              >
                <img
                  src={selectedImageObj.third}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div
                className={
                  selectedImageObj.third
                    ? "hidden"
                    : "w-[50%] absolute inset-0 m-auto h-fit flex flex-col justify-center items-center"
                }
              >
                <div className="w-8 h-8 sm:w-6 sm:h-6">
                <MdOutlinePhotoSizeSelectActual className="text-[25px] text-zinc-700"/>
                </div>
                <div className="flex flex-row">
                  <label className="label text-center">
                    <input
                      type="file"
                      name="file"
                      id="third"
                      accept="image/jpeg, image/png, image/jpg"
                      onChange={(e) => {
                        chooseImage(e);
                      }}
                    />
                    <span className="font-normal text-center text-zinc-700">
                      Select an image
                    </span>
                  </label>
                </div>
              </div>
              <button
                onClick={(e) => {
                  removeImage(e);
                }}
                id="third"
                className={
                  selectedImageObj.third
                    ? "absolute text-white py-1 px-2 bg-zinc-700 rounded-md right-0 top-0"
                    : "hidden"
                }
              >
                Edit
              </button>
            </div>

            <div className="relative w-full text-sm border h-[160px] sm:h-[230px] rounded-md border-zinc-700">
              <div
                className={
                  selectedImageObj.forth
                    ? "w-full h-[160px] sm:h-[230px] rounded md"
                    : "hidden"
                }
              >
                <img
                  src={selectedImageObj.forth}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div
                className={
                  selectedImageObj.forth
                    ? "hidden"
                    : "w-[50%] absolute inset-0 m-auto h-fit flex flex-col justify-center items-center"
                }
              >
                <div className="w-8 h-8 sm:w-6 sm:h-6">
                <MdOutlinePhotoSizeSelectActual className="text-[25px] text-zinc-700"/>
                </div>
                <div className="flex flex-row">
                  <label className="label text-center">
                    <input
                      type="file"
                      name="file"
                      id="forth"
                      accept="image/jpeg, image/png, image/jpg"
                      onChange={(e) => {
                        chooseImage(e);
                      }}
                    />
                    <span className="font-normal text-zinc-700">
                      Select an image
                    </span>
                  </label>
                </div>
              </div>
              <button
                onClick={(e) => {
                  removeImage(e);
                }}
                id="forth"
                className={
                  selectedImageObj.forth
                    ? "absolute text-white py-1 px-2 bg-zinc-700 rounded-md right-0 top-0"
                    : "hidden"
                }
              >
                Edit
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-sm sm:text-lg">
              <b>Select Category</b>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center justify-center">
              {categories.map(({ cats }, idx) => {
                return (
                  <label key={idx} className="container text-sm mr-1">
                    {cats}
                    <input
                      type="checkbox"
                      checked={selectedCat === cats}
                        onChange={() => {
                            selectedFn(cats)
                        }}
                   />
                    <span className="checkmark"></span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="form-group space-y-3">
            <label className="block form__label text-sm sm:text-lg" htmlFor="">
              <b>Name</b>
            </label>
            <input
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="block form__input input-field h-8 sm:h-11 px-2 border-zinc-700 rounded-md focus:outline-none text-zinc-700"
              type="text"
              name="name"
              placeholder="Name of item"
              value={name}
            />
          </div>
          <div className="form-group space-y-3">
            <label className="block form__label text-sm sm:text-lg" htmlFor="">
              <b>Price</b>
            </label>
            <input
              onChange={(e) => {
                setprice(e.target.value);
              }}
              className="block form__input input-field  h-8 sm:h-11 px-2 border-zinc-700 rounded-md focus:outline-none text-zinc-700"
              type="number"
              name="price"
              placeholder="Price in ₦"
              value={price}
            />
          </div>
          <div className="form-group relative space-y-3">
            <label className="block form__label text-sm sm:text-lg " htmlFor="desc">
              <b>Description</b>
            </label>

            <textarea
              className="block form__input p-3 border border-zinc-700 focus:outline-none resize-none relative rounded-md w-full h-[200px]"
              type="text"
           
              rows="5"
              cols="30"
              placeholder="Description of product"
              value={description}
              onChange={(e) => {setdescription(e.target.value)}}
            ></textarea>
            <span className="absolute right-[3px] sm:text-sm text-[13px] top-0">
              {description.length + "/ 50"}
            </span>
          </div>

          <button
            onClick={saveToDatabse}
            className="rounded-md text-white p-2 w-full font-medium bg-[#009999] hover:bg-[#009999f4]"
          >
            {!isSubmit ? (
              <span>Submit</span>
            ) : (
              <div className="flex justify-center items-center">
                <div className="rounded-full border-2 animate-spin border-r-0 border-b-0 w-6 h-6 border-slate-50"></div>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
