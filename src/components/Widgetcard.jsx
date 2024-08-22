import React, { useRef, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import Modal from 'react-bootstrap/Modal';
import { BiPlus } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addwidget, removewidget } from '../features/counter/action';
import crossmark from '../images/Group-19.png'
const Widgetcard = ({el}) => {
  const [show, setShow] = useState(false);

const name =useRef();
const text= useRef();


  const dispatch =useDispatch()
  const handleRemove =(id)=>{
dispatch(removewidget(id, el.id))
console.log(id)
  }
  const handleAdd =()=>{
    const Widgetname= name.current.value;
    const widgettext=text.current.value;
    if(widgettext && Widgetname){
      dispatch(addwidget(Widgetname,widgettext, el.id));

    }
  
    name.current.value="";
    text.current.value="";

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <section key={el.id} className='relative my-1'>
      <h6 className='text-[13px] font-poppins-semibold absolute -top-[12px] left-[20px]'>
        {el.name}
      </h6>
      <div className='flex flex-wrap '>
        {el.widgets.map((e) => (
          <div
            key={e.id}
            className='relative w-[33%] bg-[#fff] border-y-[13px] border-x-[20px] border-[#f0f0f5] rounded-[30px] bg-[#fff] h-[200px] p-4'
          >
            <h4 className='text-xs font-poppins-semibold'>{e.name}</h4>
          
           <p className='text-xs font-poppins-medium mt-2'>{e.text}</p>
<button onClick={()=>handleRemove(e.id)}> <img className='w-8 h-8 absolute -top-3 -right-3' src={crossmark}/></button>
          </div>
        ))}
        <div className=' flex justify-center items-center w-[33%] bg-[#fafafa] border-y-[13px] border-x-[20px] border-[#f0f0f5] rounded-[30px] bg-[#fff] h-[200px] p-4'
        >
           <button onClick={handleShow} className='border-2 rounded-[6px] py-[7px] px-4 font-poppins-medium flex gap-2 items-center border-[#e7ebef] text-[#949aa3] shadow-sm text-xs bg-[#fff] '><BiPlus className='text-[#9198a4] ' size={'16px'} />
           Add Widget
</button>

        </div>
      </div>
    </section>
    <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title className='font-poppins-bold text-[15px]'>Add Widget to {el.name}</Modal.Title>
</Modal.Header>
<Modal.Body>
  <div className='flex flex-col w-full gap-2'>
  <label  className='font-poppins-semibold text-[13px]'>Widget Title</label>
  <input ref={name} type='text'  className='focus:outline-0 font-poppins-medium text-[12px] w-full border-b-2 ' placeholder='Enter Widget title'/></div>
  <div className='mb-2 mt-4 flex flex-col w-full gap-2'>
  <label  className='font-poppins-semibold text-[13px]'>Widget Description</label>
  <textarea ref={text} type='text'  className='focus:outline-0 font-poppins-medium text-[12px] w-full border-2 px-2 py-2 rounded-sm ' name="desc" placeholder='write anything...'/>

  </div>
</Modal.Body>
<Modal.Footer>
  <button variant="secondary" className='text-[13px] text-white font-poppins-semibold bg-[#14147d] py-[5px] px-2 w-[100px] rounded-1' onClick={handleAdd}>
    Add
  </button>
 
</Modal.Footer>
</Modal>
    </>
  )
}


export default Widgetcard