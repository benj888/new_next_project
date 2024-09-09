"use client";

import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";

import CropSquareIcon from "@mui/icons-material/CropSquare";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import AppleIcon from "@mui/icons-material/Apple";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Dropdown } from "./component/Dropdown";
import { Todo } from "./component/TODO";
export default function Home() {
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
              <Todo title='123' iconstr='add' iconshape={<AppleIcon/>} />
              <Todo  buttonClassName='bg-red-400'/>
              

              {/* <div className="px-2">
                array : {JSON.stringify(list, null, 5)}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
