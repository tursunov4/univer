import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbar from '../../../components/navbar/Navbar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import http from "../../../untils/axios"
import { ToastContainer, toast } from 'react-toastify';
import Nizomtable from '../../../components/Allinfor/Nizomtable';
import TalabaTable from '../../../components/Talabalar/Talabalartable';
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
const Faxriytalaba   = () => {
  const [refresh , setRefresh] = useState(false)
  const [modal , setModal] = useState(false)
  const [allData , setAlldata] = useState([])
  const [imagearr , setImageArr] = useState([])
  const [image , setImage] = useState("")
  const [titleEn , setTitleEn] = useState("")
  const [titleUz , setTitleUz] = useState("")
  const [titleRu , setTitleRu] = useState("")
  const [titleKr , setTitleKr] = useState("")
  const [fullNameEn , setfullNameEn] = useState("")
  const [fullNameUz , setfullNameUz] = useState("")
  const [fullNameRu , setfullNameRu] = useState("")
  const [fullNameKr , setfullNameKr] = useState("")
  const [directionEn , setdirectionEn] = useState("")
  const [directionUz , setdirectionUz] = useState("")
  const [directionRu , setdirectionRu] = useState("")
  const [directionKr , setdirectionKr] = useState("")
  const [descriptionuz , setDescriptionuz] = useState("")
  const [descriptionru , setDescriptionru] = useState("")
  const [descriptionen , setDescriptionen] = useState("")
  const [descriptionkr , setDescriptionkr] = useState("")
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
    http.put(`/api/user/editStudents/${editid}` , {
      hashId:arr?.at(-1),
      degreeKR: titleKr,
      degreeRU: titleRu,
      degreeUZ: titleUz,
      degreeEN: titleEn,
      descriptionEN: descriptionen,
    descriptionKR: descriptionkr,
    descriptionRU: descriptionru,
    descriptionUZ: descriptionuz,
    directionEN: directionEn,
    directionKR: directionKr,
    directionRU: directionRu,
    directionUZ: directionUz,
    fullNameEN: fullNameEn,
    fullNameKR: fullNameKr,
    fullNameRU: fullNameRu,
    fullNameUZ: fullNameUz,
    status: "BITIRGAN"
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
    http.post("/api/user/addStudents" , {
        hashId:arr?.at(-1),
        degreeKR: titleKr,
        degreeRU: titleRu,
        degreeUZ: titleUz,
        degreeEN: titleEn,
        descriptionEN: descriptionen,
      descriptionKR: descriptionkr,
      descriptionRU: descriptionru,
      descriptionUZ: descriptionuz,
      directionEN: directionEn,
      directionKR: directionKr,
      directionRU: directionRu,
      directionUZ: directionUz,
      fullNameEN: fullNameEn,
      fullNameKR: fullNameKr,
      fullNameRU: fullNameRu,
      fullNameUZ: fullNameUz,
      status: "BITIRGAN"
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
  setImageArr([])
  setTitleRu("")
  setTitleKr("")
  setTitleUz("")
  setTitleEn("")
  setfullNameRu("")
  setfullNameKr("")
  setfullNameUz("")
  setfullNameEn("")
  setdirectionRu("")
  setdirectionUz("")
  setdirectionKr("")
  setdirectionEn("")
  setDescriptionen("")
  setDescriptionru("")
  setDescriptionuz("")
  setDescriptionkr("")
 }
const getData =()=>{
  http.get("/api/public/allgraduated" ).then((res) =>{
    console.log(res.data)
    setAlldata(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}
const deleteData =(id)=>{
  http.delete(`/api/user/deleteStudent/${id}`).then((res) =>{
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
    setImageArr([data?.images])   
    setTitleRu(data?.degreeRU)
    setTitleKr(data?.degreeKR)
    setTitleUz(data?.degreeUZ)
    setTitleEn(data?.degreeEN)
    setDescriptionen(data?.descriptionEN)
    setDescriptionru(data?.descriptionRU)
    setDescriptionuz(data?.descriptionUZ)
    setDescriptionkr(data?.descriptionKR)
    setfullNameRu(data?.fullNameRU)
    setfullNameKr(data?.fullNameKR)
    setfullNameUz(data?.fullNameUZ)
    setfullNameEn(data?.fullNameEN)
    setdirectionRu(data?.directionRU)
    setdirectionUz(data?.directionUZ)
    setdirectionKr(data?.directionKR)
    setdirectionEn(data?.directionEN)

  }

useEffect(()=>{
  getData()
}, [refresh])
  return (
    <>
      <ToastContainer/>
      <div className="add__newbtn">
       <Button onClick={()=>setModal(true)} variant="contained">
      Add new
     </Button>
      </div>  
    <TalabaTable handleEdit={handleEdit} data={allData} handleDelete={deleteData}/>
  
    <Modal
      open={modal}
      onClose={()=>handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box  sx={style}>
         <h2 className='elontitle'>Bitirgan faxriyla</h2>
         <div className='elontitlewrapper'>
          <TextField onChange={(e)=>setfullNameUz(e.target.value)} defaultValue={fullNameUz} className='elontitleinput' id="outlined-basic" label="fullNameUz" variant="outlined" />
          <TextField onChange={(e)=>setfullNameRu(e.target.value)} defaultValue={fullNameRu} className='elontitleinput' id="outlined-basic" label="fullNameRu" variant="outlined" />
          <TextField onChange={(e)=>setfullNameEn(e.target.value)} defaultValue={fullNameEn} className='elontitleinput' id="outlined-basic" label="fullNameEn" variant="outlined" />
          <TextField onChange={(e)=>setfullNameKr(e.target.value)} defaultValue={fullNameKr} className='elontitleinput' id="outlined-basic" label="fullNameKr" variant="outlined" />
          </div>
         <div className='elontitlewrapper'>
          <TextField onChange={(e)=>setTitleUz(e.target.value)} defaultValue={titleUz} className='elontitleinput' id="outlined-basic" label="degreeUz" variant="outlined" />
          <TextField onChange={(e)=>setTitleRu(e.target.value)} defaultValue={titleRu} className='elontitleinput' id="outlined-basic" label="degreeRu" variant="outlined" />
          <TextField onChange={(e)=>setTitleEn(e.target.value)} defaultValue={titleEn} className='elontitleinput' id="outlined-basic" label="degreeEn" variant="outlined" />
          <TextField onChange={(e)=>setTitleKr(e.target.value)} defaultValue={titleKr} className='elontitleinput' id="outlined-basic" label="degreeKr" variant="outlined" />
          </div>
         <div className='elontitlewrapper'>
          <TextField onChange={(e)=>setdirectionUz(e.target.value)} defaultValue={directionUz} className='elontitleinput' id="outlined-basic" label="directionUz" variant="outlined" />
          <TextField onChange={(e)=>setdirectionRu(e.target.value)} defaultValue={directionRu} className='elontitleinput' id="outlined-basic" label="directionRu" variant="outlined" />
          <TextField onChange={(e)=>setdirectionEn(e.target.value)} defaultValue={directionEn} className='elontitleinput' id="outlined-basic" label="directionEn" variant="outlined" />
          <TextField onChange={(e)=>setdirectionKr(e.target.value)} defaultValue={directionKr} className='elontitleinput' id="outlined-basic" label="directionKr" variant="outlined" />
          </div>
          <div className="elondescription">
          <TextField
          className='elontextarea'
          id="outlined-multiline-static"
          label=" DescribtionUz"
          defaultValue={descriptionuz}
          onChange={(e)=>setDescriptionuz(e.target.value)}
          multiline
          rows={4}
        />
         <TextField
          className='elontextarea'
          id="outlined-multiline-static"
          label="DescribtionRu"
          multiline
          defaultValue={descriptionru}
          onChange={(e) =>setDescriptionru(e.target.value)}
          rows={4}
        />
         <TextField
           className='elontextarea'
          id="outlined-multiline-static"
          label="DescribtionEn"
          multiline
          defaultValue={descriptionen}
          onChange={(e) => setDescriptionen(e.target.value)}
          rows={4}
        />
         <TextField
           className='elontextarea'
          id="outlined-multiline-static"
          label="DescribtionKr"
          multiline
          defaultValue={descriptionkr}
          onChange={(e) => setDescriptionkr(e.target.value)}
          rows={4}
        />
          </div>
        
      <div className="elonimg">
        <label className='eloninput'>
        <input
           onChange={(e)=>setImage(e.target.files[0])}        
          type="file"       
          placeholder={imagearr.length >0 ?  `выбраны ${imagearr.length} - файла`:"Загрузить файл"}
        />
        <div  className='eloninput__btn'>{imagearr.length >0 ?  `Image tanlash`:"Image tanlash"}</div><span>Faqat bitta fayl qushish mumkin</span>
        </label>     
      </div>
      <div className='image__orginalname'>
            {
                 imagearr?.at(-1)?.orginalName
            }
          </div>

         
         <div className="submitwrap">
         <Button   onClick={handleSubmit} className='sumbitbuttonelon' variant="contained">{edit ? "Tahrirlash" : "Qo'shish"}</Button>
         </div>
      </Box>
    </Modal>
  </>
  )
}

export default Faxriytalaba