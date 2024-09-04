import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import React, { useRef } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// interface Text {
//   name: string
//   age: number
//   male: boolean
//   // def_self: () => void  
// }

// const func: Text = {
//   age: 15,
//   male: true,
//   name: '123'
// def_self:() => {
//   console.log('123')}
// }
// func.def_self()


// const funcArray = [func, { age: 16, male: 1, name: '456' }]


// console.log(funcArray)

// const func1 = funcArray.map((item) => ({ age1: item.age * 2, name1: item.name + '456' }))
// console.log(func1)

// const func2 = funcArray.map((i, ind) => ({
//   ...i,
//   name3: '789',
//   indexnumber: ind,
//   male: i.male ===1 ? "男": "女" 
// }))
// console.log(func2)



// const funArray = [ 1,2,3,4 ]
// funArray.push(5)
// console.log(funArray)




// const fArray = [{fname:'dda', sex:1}]
// const sexmap:{[key:string]:string}={ '0':'male','1':'female','2':'unknown' };
// const func3=fArray.map((item,i) => ({ ...item,  sex:  sexmap?.[item.sex] ?? '找不到'  }))
// // sex:sexmap[item.sex]||'找不到'
// // sex:sexmap?.[item.sex]??'找不到'
// console.log(func3)


// const func0 = { name: "123" ,
//                 age: "456", 
//                 color: "789",
//                detail:{
//                 name0:"123123"
//                }
//                } 
// console.log(func0?.detail?.name0 ?? '無' )
// console.log(func0.detail ? func0.detail.name0 : '無')


// const tarray = [-2,1,4,2,5]


// // const newary = tarray.slice()
// // tarray.splice(0, 4)
// // tarray.splice(1 , 0, 12 )  

// const sortarray = tarray.sort((a,b)=> b-a)
// console.log(sortarray)
// console.log(newary)
// console.log(tarray)
//  #################################################################
const Testcompoment = () => {
  console.log('render')
  return <div> </div>
}


let num = 123456;

export const Dropdown = () => {

  const currentRef = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = () => {
    // console.log(currentRef.current)
    setAnchorEl(currentRef.current);
   
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const [value, setValue] = React.useState<number>(0);



  return (
    <>
      <div className="bg-[#282727] flex items-center rounded-2xl h-14" aria-describedby={id} onClick={handleClick} ref={currentRef} >
        


        <div className='px-1'>
          <AddBoxRoundedIcon sx={{ fontSize: "50px" }} />
        </div>
        <div className='flex-1' onClick={(e) => {
          
          e.stopPropagation() 
          setValue((setValue) => setValue + 1)
          num = 123
          console.log(e.target)
        }}>

          <div className='text-[#4a4a4a] '>Accounts {num}</div>
          <div className='text-[#ffff] '>{value}</div>
        </div>
        <div>
          <KeyboardArrowDownRoundedIcon />
        </div>
        {/* <Testcompoment/> */}




      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover></>
  )
}


// {funcArray.map((item) =>item.name).join(' ')}



