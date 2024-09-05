"use client";

import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import AppleIcon from "@mui/icons-material/Apple";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { Dropdown } from "./component/Dropdown";

import Image from "next/image";
import { useState } from "react";
import { dividerClasses, DividerClassKey } from "@mui/material";

export default function Home() {
  const [value, setValue] = useState("");
  const [list, setlist] = useState<string[]>([]);
  const [indexNumber, setIndexNumber] = useState<number | null>(null);

  return (
    <>
      <div className="flex h-full">
        <div className="px-4 flex flex-1 bg-black">
          <div className="w-60 bg-black px-4">
            <div className="bg-black p-3 flex items-center gap-2">
              <div className="bg-[#3f3bf3]  rounded-full">
                <AcUnitRoundedIcon sx={{ fontSize: "40px" }} />
              </div>
              <p className="text-lg text-[#ffff]">wijfi</p>
            </div>

            <Dropdown />

            <div className="bg-black h-10"></div>

            <div className="bg-black p-1 flex items-center h-12">
              <div className="bg-[#dc9933]  rounded-md">
                <CropSquareIcon sx={{ fontSize: "30px" }} />
              </div>
              <p className="text-[#ffffff] px-4">Inbox</p>
            </div>

            <div className="bg-black p-1 items-center h-12 flex">
              <div className="bg-[#403775] rounded-md">
                <StarBorderIcon sx={{ fontSize: "30px" }} />
              </div>
              <p className="text-[#ffffff] px-4">Organization</p>
            </div>

            <div className="bg-black p-1 items-center h-12 flex">
              <div className="bg-[#b34285] rounded-md">
                <ChangeHistoryIcon sx={{ fontSize: "30px" }} />
              </div>
              <p className="text-[#ffffff] px-4">People</p>
            </div>

            <div className="bg-black p-1 items-center h-12 flex">
              <div className="bg-[#52ba2e] rounded-md">
                <RadioButtonUncheckedIcon sx={{ fontSize: "30px" }} />
              </div>
              <p className="text-[#ffffff] px-4">Pipeline</p>
            </div>

            <div className="bg-black p-1 items-center h-12 flex">
              <div className="bg-[#993838] rounded-md">
                <CropSquareIcon sx={{ fontSize: "30px" }} />
              </div>
              <p className="text-[#ffffff] px-4">Views</p>
            </div>

            <div className="w-full h-px  bg-[#1c1c1c] my-5 "></div>

            <div className=" flex items-center">
              <div className="bg-[#80807a] rounded-md">
                <KeyboardArrowUpIcon sx={{ fontSize: "30px" }} />
              </div>
              <p className="text-[#ffff] px-4 py-4 text-lg">Store</p>
            </div>

            <div className="flex px-4 py-4 items-center">
              <div className="bg-[#bc3411] rounded-md">
                <MicrosoftIcon />
              </div>
              <p className="text-[#ffff] px-4">Microsoft</p>
            </div>

            <div className="flex px-4 py-4 items-center">
              <div className="bg-[#ffff] rounded-md">
                <AppleIcon />
              </div>
              <p className="text-[#ffff] px-4">Apple</p>
            </div>

            <div className="flex px-4 py-4 items-center">
              <div className="bg-[#0d820d] rounded-md">
                <SportsEsportsIcon />
              </div>
              <p className="text-[#ffff] px-4">Xbox</p>
            </div>

            <div className="w-full h-px  bg-[#1c1c1c] my-5 "></div>
          </div>

          {/* <div className=" flex-1 flex p-2 ">
            <div className="bg-[#f5f5f5] flex-1 rounded-3xl ">
              <div className='bg-[#fff] flex rounded-t-3xl h-20'>
                <div className=''>123</div>
                <div className='flex-1'>456 </div>
              </div>
            </div>
          </div> */}

          <div className="p-2   flex-1 ">
            <div className="bg-[#ffff] h-28 rounded-t-3xl flex flex-1">
              <div className="flex-1">123</div>
              <div className=" flex-1">456</div>
            </div>
            <div className="bg-[#f5f5f5] h-full ">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setlist((pre) => [...pre, value]);
                }}
                className="flex p-2"
              >
                <input
                  className="focus-visible:outline-0 p-2 rounded-md w-full"
                  type="text"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />

                <button
                  className="bg-blue-400 mx-2 rounded-md p-2 text-nowrap text-white"
                  type="submit"
                >
                添加{" "}
                </button>
              </form>

              <div className="flex flex-col gap-2">
                {" "}
                {list.map((inputName, index) => {
                  return (
                    <div
                      className="flex gap-2 items-center bg-white rounded-md overflow-hidden"
                      key={`item_${index}`}
                    >
                      <div className="bg-blue-400 px-4 py-2 text-white">
                        {index + 1}
                      </div>
                      <div
                        className="flex-1"
                        onClick={(e) => {
                          setIndexNumber(index);
                        }}
                      >
                        {indexNumber === index ? (
                          <div className="flex">
                            <input
                              className="flex-1"
                              value={inputName}
                              onChange={(e) => {
                                const newArray = list.slice();
                                newArray[index] = e.target.value;
                                setlist(newArray);
                              }}
                              type="text"
                            />
                            <div className="bg-green-500 p-2 rounded-md cursor-pointer hover:opacity-70">
                              <CheckIcon />
                            </div>
                          </div>
                        ) : (
                          inputName
                        )}
                      </div>
                      <div
                        className="bg-red-600 p-2 text-white cursor-pointer hover:opacity-70  "
                        onClick={(e) => {
                          const newArray = list.slice();
                          newArray.splice(index, 1);
                          setlist(newArray);
                        }}
                      >
                        <CloseIcon />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
