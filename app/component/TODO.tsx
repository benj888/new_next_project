import { ReactNode, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

import UndoIcon from "@mui/icons-material/Undo";


interface Prop { 
    title?:string
    iconstr?:string
    iconshape?: string|ReactNode
    buttonClassName?: string
 }

export const Todo = (prop:Prop) => {
    const { title = 'dafault title' } = prop
    const {iconstr = '加入'} = prop
    const {iconshape = '+' } = prop
    const {buttonClassName='bg-blue-400' }=prop

  const [value, setValue] = useState("");
  const [list, setlist] = useState<string[]>([]);
  const [indexNumber, setIndexNumber] = useState<number | null>(null);
  const Edit = useRef<HTMLInputElement>(null);
  return (
    <>
    <div>{title}</div>
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
          className={`bg-blue-400 mx-2 rounded-md p-2 text-nowrap text-white ${buttonClassName}`}
          type="submit"
        >
         {iconshape}
         {iconstr}
        </button>
      </form>
      
      <div className="flex flex-col gap-2">
        
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
                      type="text"
                      ref={Edit}
                      defaultValue={inputName}
                    />
                    <div
                      className="bg-green-500 p-2 rounded-md cursor-pointer hover:opacity-70"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(Edit.current?.value);
                        const newArray = list.slice();
                        newArray.splice(
                          index,
                          1,
                          Edit.current?.value as string
                        );
                        setlist(newArray);
                        setIndexNumber(null);
                      }}
                    >
                      <CheckIcon />
                    </div>
                  </div>
                ) : (
                  inputName
                )}
              </div>

              {indexNumber === index ? (
                <div
                  className="bg-red-600 p-2 text-white cursor-pointer hover:opacity-70  "
                  onClick={(e) => {
                    setIndexNumber(null);
                  }}
                >
                  <UndoIcon />
                </div>
              ) : (
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
              )}
            </div>
          );
        })}
      </div>
      
    </>
  );
};
