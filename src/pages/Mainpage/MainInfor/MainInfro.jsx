import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbar from '../../../components/navbar/Navbar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import http from "../../../untils/axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Uquvtable from '../../../components/Uquvtable/Uquvtable';
import Newsdaytable from '../../../components/Newsday/Newsdaytable';
import Generalinfortable from '../../../components/Generalinfor/Generalinfortable';
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
const MainInfor = () => {
  const [refresh , setRefresh] = useState(false)
  const [modal , setModal] = useState(false)
  const [allData , setAlldata] = useState([])
  const [imagearr , setImageArr] = useState([])
  const [image , setImage] = useState("")
  const [descriptionuz , setDescriptionuz] = useState("")
  const [descriptionru , setDescriptionru] = useState("")
  const [descriptionen , setDescriptionen] = useState("")
  const [descriptionkr , setDescriptionkr] = useState("")
  const [titleEn , setTitleEn] = useState("")
  const [titleUz , setTitleUz] = useState("")
  const [titleRu , setTitleRu] = useState("")
  const [titleKr , setTitleKr] = useState("")
  
  const [edit , setEdit ] = useState(false)
  const [editid , setEditId] = useState("")
  if(image){
    const form = new FormData()
    form.append('image' , image)
    http.post("/api/user/addAttachment" ,form).then((res) =>{
      setImage('')
      if(res.status === 200){
        setImageArr([...imagearr , res.data])
      }
      console.log(res.data)
    }).catch((err)=>{
      setImage("")
      console.log(err)
    })
  }

 const handleSubmit =()=>{
  const arr = []
  for(let i=0 ; i <imagearr.length ; i++){
   arr.push(imagearr[i]?.hashId)
  }
  if(edit){
    http.put(`/api/user/editGeneralInformat/${editid}` , {
        proffessorNumber: descriptionen,
        studentsNumber: descriptionkr,
        jointTrainingNumber: descriptionru,
        independentResearchersNumber: descriptionuz,
        fieldsofStudyNumber: titleKr,
        doktorantNumber: titleRu,
        auditoriumNumber: titleUz,
        facultyNumber: titleEn,
    }).then((res) =>{
      console.log(res.data)
      if(res.data?.success){
        toast.success(res.data?.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setRefresh(!refresh)
      }else{
        toast.error(res.data?.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      if(res.status === 400){
        toast.error("There is a flaw in the written information!!!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      if(res.status ===200){
        handleClose()
      }
      
    }).catch((err) =>{
      console.log(err)
    })
  }else{
    http.post("/api/user/GeneralInformatsave" , {
        proffessorNumber: descriptionen,
        studentsNumber: descriptionkr,
        jointTrainingNumber: descriptionru,
        independentResearchersNumber: descriptionuz,
        fieldsofStudyNumber: titleKr,
        doktorantNumber: titleRu,
        auditoriumNumber: titleUz,
        facultyNumber: titleEn,
    }).then((res) =>{
      console.log(res.data)
      if(res.data?.success){
        toast.success(res.data?.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setRefresh(!refresh)
      }else{
        toast.error(res.data?.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      if(res.status === 400){
        toast.error("There is a flaw in the written information!!!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      if(res.status ===200){
        handleClose()
      }
    }).catch((err) =>{
      console.log(err)
    })
  }
 
 }
 const handleClose =()=>{
  setModal(false)
  setEditId("")
  setEdit(false)
  setDescriptionen("")
  setDescriptionru("")
  setDescriptionuz("")
  setDescriptionkr("")
  setTitleRu("")
  setTitleKr("")
  setTitleUz("")
  setTitleEn("")
 }
const getData =()=>{
  http.get("/api/public/allGeneralInformat" ).then((res) =>{
    console.log(res.data)
    setAlldata(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}
const deleteData =(id)=>{
  http.delete(`/api/user/deleteGeneralInformat/${id}`).then((res) =>{
    console.log(res.data)
    if(res.data?.success){
      toast.warn(res.data?.message , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setRefresh(!refresh)
    }else{
      toast.error(res.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }).catch((err) =>{
    console.log(err)
  })}
  const handleEdit =(data)=>{
    setEdit(true)
    setModal(true)
    setEditId(data?.id)
    setDescriptionen(data?.proffessorNumber)
    setDescriptionru(data?.jointTrainingNumber)
    setDescriptionuz(data?.independentResearchersNumber)
    setDescriptionkr(data?.studentsNumber)
    setTitleRu(data?.doktorantNumber)
    setTitleKr(data?.fieldsofStudyNumber)
    setTitleUz(data?.auditoriumNumber)
    setTitleEn(data?.facultyNumber)
  }

useEffect(()=>{
  getData()
}, [refresh])
  return (  
    <>
      <ToastContainer/>
      <div className="add__newbtn">
        {
            allData.length === 0 && 
            <Button onClick={()=>setModal(true)} variant="contained">
            Add new
           </Button>
        }
      
      </div>  
    <Generalinfortable  handleEdit={handleEdit} data={allData} handleDelete={deleteData}/>
  
    <Modal
      open={modal}
      onClose={()=>handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box  sx={style}>
         <h2 className='elontitle'>Umumiy malumotlar</h2>
         <div className='elontitlewrapper'>
          <TextField onChange={(e)=>setTitleUz(e.target.value)} defaultValue={titleUz} className='elontitleinput' id="outlined-basic" label="auditoriumNumber" variant="outlined" />
          <TextField onChange={(e)=>setTitleRu(e.target.value)} defaultValue={titleRu} className='elontitleinput' id="outlined-basic" label="doktorantNumber" variant="outlined" />
          <TextField onChange={(e)=>setTitleEn(e.target.value)} defaultValue={titleEn} className='elontitleinput' id="outlined-basic" label="facultyNumber" variant="outlined" />
          <TextField onChange={(e)=>setTitleKr(e.target.value)} defaultValue={titleKr} className='elontitleinput' id="outlined-basic" label="fieldsofStudyNumber" variant="outlined" />
          </div>
         <div className='elontitlewrapper'>
          <TextField onChange={(e)=>setDescriptionuz(e.target.value)} defaultValue={titleUz} className='elontitleinput' id="outlined-basic" label="independentResearchersNumber" variant="outlined" />
          <TextField onChange={(e)=>setDescriptionkr(e.target.value)} defaultValue={titleRu} className='elontitleinput' id="outlined-basic" label="jointTrainingNumber" variant="outlined" />
          <TextField onChange={(e)=>setDescriptionen(e.target.value)} defaultValue={titleEn} className='elontitleinput' id="outlined-basic" label="proffessorNumber" variant="outlined" />
          <TextField onChange={(e)=>setDescriptionkr(e.target.value)} defaultValue={titleKr} className='elontitleinput' id="outlined-basic" label="studentsNumber" variant="outlined" />
          </div>       
         <div className="submitwrap">
         <Button   onClick={handleSubmit} className='sumbitbuttonelon' variant="contained">{edit ? "Tahrirlash" : "Qo'shish"}</Button>
         </div>
      </Box>
    </Modal>
  </>
  )
}

export default MainInfor