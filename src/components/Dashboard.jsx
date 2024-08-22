import React, { useState } from 'react';
import { BiPlus } from "react-icons/bi";
import { LuRefreshCcw } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { categories } from '../data/data';
import Widgetcard from './Widgetcard';
import { RxCross2 } from "react-icons/rx";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";
import { useDispatch } from 'react-redux';
import Header from './Header'

import style from  './Dashboard.module.css'
import { addwidget, removewidget } from '../features/counter/action';

const Dashboard = () => {
  const [dropdown, setDropdown]=useState('Last 2 days');
  const [open , setOpen]=useState(false);
  const handleDropdown =()=>{
    setOpen(!open)
  }
  const handleEl=(el)=>{
    setDropdown(el);
    setOpen(false)
  }
  const[query, setQuery]=useState('');

const dispatch= useDispatch();
  const handleCheckbox = (widget, e) => {
      // Remove widget from selectedWidgets
      dispatch(removewidget(widget.id, e.id))
      console.log(widget,e)
   
  };

  const [active, setActive]= useState(0);
  const handleClick = (id)=>{
    console.log(id)
    setActive(id)
  }
      const [add,setAdd] = useState(false);
    const categories = useSelector(state=> state.categories);
    const filteredwidgets= categories.map(el=>({...el, widgets:el.widgets.filter(e=> e.name.toLowerCase().includes(query.toLowerCase())
    )}))
  return (
    <>
         <Header setquery={setQuery}/>

<div className='w-full  bg-[#f0f5fa] my-2 py-4'>
    <div className='w-[90%] mx-auto'>
    <div className='flex w-full justify-between mb-7 '>
<h6 className='text-[15px] font-poppins-bold '>CNAPP Dashboard</h6>
<div className='flex gap-3 '>
    <button className='border-2 rounded-[6px] py-[8px] px-3 font-poppins-medium flex gap-2 items-center border-[#e7ebef] text-[#949aa3] shadow-sm text-xs bg-[#fff] ' onClick={()=>setAdd(true)}>Add Widget<BiPlus className='text-[#9198a4] ' size={'16px'} />

    </button>
    <button className='border-2 rounded-[6px] py-[8px] px-[6px] font-poppins-medium flex gap-2 items-center border-[#e7ebef] text-[#949aa3] shadow-sm text-xs bg-[#fff] '>
        <LuRefreshCcw className='text-[#717b89]' size={'16px'}/>

    </button>
    <button className='border-2 rounded-[6px] py-[8px] px-[6px] font-poppins-medium flex gap-2 items-center border-[#e7ebef] text-[#949aa3] shadow-sm text-xs bg-[#fff] '>
        <HiOutlineDotsVertical className='text-[#717b89]' size={'16px'}/>

    </button>
    <div className="relative"> 
    <div className='flex items-center px-2 py-1 border-2 border-[#14147d] rounded-[4px]'>
        <span className='border-r-2 border-[#14147d] pr-1 mr-2 flex items-center h-[90%]'>
        <MdAccessTimeFilled className='text-[#14147d]'/>

        </span>
        <div className='flex items-center justify-between gap-2' onClick={handleDropdown}>
      
    <p className='text-[13px] font-poppins-semibold text-[#2e308a]'>{dropdown}</p>
    <FaAngleDown size={'15px'} className={`text-[#2e308a] ${open ? style.rotate : " "}`} />

        </div>
       
    </div>
   {open && <div className="flex  bg-[#fff] w-full mt-2 z-10 rounded-2 py-3 px-3 flex-col gap-2 absolute ">
    
    { ["Last 5 days","Last Week","Last Month"].map((el)=>(
          <p className='text-[13px] font-poppins-semibold text-[#2e308a]' onClick={()=>handleEl(el)}>{el}</p>

))} </div>}
    </div>
</div>


<Modal show={add}
className=" !rounded-0 !m-0 !pr-0"
size="lg"
aria-labelledby="contained-modal-title-vcenter"

dialogClassName={style.addwidget}
contentClassName={style.content}
onHide={()=>setAdd(false)}>
<div  className=" py-[10px] px-4 text-white flex justify-between font-poppins-semibold bg-[#14147d] rounded-0">
  <Modal.Title className='font-poppins-medium text-[13px]'>Add Widget</Modal.Title>
  <RxCross2 size="22px" onClick={()=>setAdd(false)} />

</div>
<Modal.Body className="h-full pr-0">
  <p className='font-poppins-medium text-[12px]'>Personalise your dashboard by adding the following widgets </p>
  <Tabs>
    <TabList className={`${style.tablist} mt-1 mb-3 flex gap-2 !w-[43%] border-b-2 border-[#e7ebef]`}>
      <Tab className={`${style.tab} text-[13px] px-3 py-2 font-poppins-semibold ${active==0? style.active: "text-[#8b8f96]"}`} onClick={()=>handleClick(0)}>CSPM</Tab>
      <Tab  className={`${style.tab} text-[13px]  px-3 py-2 font-poppins-semibold  ${active== 1 ? style.active :  "text-[#8b8f96]"}`} onClick={()=>handleClick(1)}>CWPP </Tab>
      <Tab className={`text-[13px] px-3 ${style.tab} py-2 font-poppins-semibold ${active== 2  ? style.active : "text-[#8b8f96]"}`} onClick={()=>handleClick(2)}>Image </Tab>
      <Tab  className={`text-[13px] ${style.tab}  px-3 py-2 font-poppins-semibold  ${active== 3 ?  style.active : "text-[#8b8f96]"}`} onClick={()=>handleClick(3)}>Ticket </Tab>
    </TabList>
    <TabPanel className="h-full">
      <div className="w-full pl-3" >
        {
        categories.map((el)=>(
          (el.id==active) &&
            el.widgets.map((e)=>(
<div className="border-[1px] border-[#e7ebef] flex gap-2 items-center py-2 pl-2 my-2 rounded-[4px]"> 
<Checkbox
        icon={ <div
          style={{
            // display: "flex",
            // flex: 1,
            backgroundColor: "#43386b",
            // alignSelf: "stretch",
          }}
        >
          <Icon.FiCheck color="white" size={14} />
        </div>}
        name="my-input"
        checked={e}
        onChange={()=>handleCheckbox(e, el)}
       size={15}
        borderColor="#14147d"
        backGroundColor="#14147d"
        borderRadius={1}
        style={{ cursor: "pointer" }}
       
       
      />
        
              <p className="text-xs font-poppins-medium"> {e.name}</p>
              </div>
            ))
          
        ))
        }

        </div>
 
   
    </TabPanel>
    <TabPanel className="h-full">
      <div className="w-full" >
        {
        categories.map((el)=>(
          (el.id==active) &&
            el.widgets.map((e)=>(
<div className="border-[1px] border-[#e7ebef] flex gap-2 items-center py-2 pl-2 my-2 rounded-[4px]"> 
<Checkbox
        icon={ <div
          style={{
            // display: "flex",
            // flex: 1,
            backgroundColor: "#43386b",
            // alignSelf: "stretch",
          }}
        >
          <Icon.FiCheck color="white" size={14} />
        </div>}
        name="my-input"
        checked={e}
        onChange={()=>handleCheckbox(e, el)}
       size={15}
        borderColor="#14147d"
        backGroundColor="#14147d"
        borderRadius={1}
        style={{ cursor: "pointer" }}
       
       
      />
        
              <p className="text-xs font-poppins-medium"> {e.name}</p>
              </div>
            ))
          
        ))
        }

        </div>
 
   
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
     
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
     
    </TabPanel>
  </Tabs>
  <div className="flex justify-end gap-3 absolute right-0 bottom-3 ">
  <button variant="secondary" className='text-[13px] border-2 text-[] font-poppins-semibold border-[#14147d] py-[5px] px-2 w-[110px] rounded-2' >
    Cancel
  </button>
  <button variant="secondary" className='text-[13px] text-white font-poppins-semibold bg-[#14147d] py-[5px] px-2 w-[110px] rounded-2' >
    Confirm
  </button>
</div>
</Modal.Body>

</Modal>
</div>


{
  filteredwidgets.map((el) => (
   <Widgetcard key={el.id} el={el}/>
  ))
}

</div>


</div>

    </>
  )
}

export default Dashboard