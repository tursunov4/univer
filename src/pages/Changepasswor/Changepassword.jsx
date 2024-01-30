import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import http from "../../untils/axios"
import { ToastContainer, toast } from 'react-toastify';
import Rahbartable from '../../components/Rahbariyat/Rahbariyattable';
import 'react-toastify/dist/ReactToastify.css';
const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"80%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  border:'none',
  p: 4,
};
const username = localStorage.getItem("username")
const  ChangePassword = () => {
   const [oldpasword , setOldpassword] = useState("")
   const [newpasword , setNewpassword] = useState("")
   const [confirmpasword, setConfirmpassword] = useState("")
   const handleSubmit =(e) =>{
    e.preventDefault()
    http.put("/api/auth/changePassword" , {
        confirmPassword: confirmpasword,
  login: username,
  newPassword: newpasword,
  oldPasssword: oldpasword
    }).then((res) =>{
      console.log(res.data)
  
        toast.success("Password o'zgartirildi!!!    ", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
       
   
     
      if(res.status ===202){
          localStorage.removeItem("token")
          setTimeout(() => {
              window.location.reload()
          }, 500);
      }
    }).catch((err) =>{
      console.log(err)
    
        toast.error(err.response?.data, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          
      
    })
   }
  return (
    <>
      <ToastContainer/>
      <div style={{width:"90%" , margin : "50px"}}>
          <h2>Password o'zgartirish</h2>
          <div  className="password__container">
          <TextField style={{width:'400px'}} onChange={(e)=>setOldpassword(e.target.value)} defaultValue={oldpasword} className='elontitleinput' id="outlined-basic" label="Old password" variant="outlined" />
          <TextField style={{width:'400px'}}  onChange={(e)=>setNewpassword(e.target.value)} defaultValue={newpasword} className='elontitleinput' id="outlined-basic" label="New password" variant="outlined" />
          <TextField style={{width:'400px'}}  onChange={(e)=>setConfirmpassword(e.target.value)} defaultValue={confirmpasword} className='elontitleinput' id="outlined-basic" label="Confirm password" variant="outlined" />
          <Button  style={{width:'400px' , cursor:"pointer"}}   onClick={handleSubmit}  variant="contained">Jo'natish</Button>
          </div>
      </div>
  </>
  )
}

export default ChangePassword