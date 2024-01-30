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
import Interaktivtable from '../../../components/Interaktiv/Interaktivtable';
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
const Interaktivservive = () => {
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
  const [link , setLink] = useState("")
  
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
    http.put(`/api/user/editservice/${editid}` , {
        icon:arr?.at(-1),
        descriptionEN: descriptionen,
        descriptionKR: descriptionkr,
        descriptionRU: descriptionru,
        descriptionUZ: descriptionuz,
        nameKR: titleKr,
        nameRU: titleRu,
        nameUZ: titleUz,
        nameEN: titleEn,
        link : link
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
    http.post("/api/user/addService" , {
        icon:arr?.at(-1),
        descriptionEN: descriptionen,
        descriptionKR: descriptionkr,
        descriptionRU: descriptionru,
        descriptionUZ: descriptionuz,
        nameKR: titleKr,
        nameRU: titleRu,
        nameUZ: titleUz,
        nameEN: titleEn,
        link : link
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
  setDescriptionen("")
  setDescriptionru("")
  setDescriptionuz("")
  setDescriptionkr("")
  setLink("")
  setTitleRu("")
  setTitleKr("")
  setTitleUz("")
  setTitleEn("")
 }
const getData =()=>{
  http.get("/api/public/allService" ).then((res) =>{
    console.log(res.data)
    setAlldata(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}
const deleteData =(id)=>{
  http.delete(`/api/user/deleteservice/${id}`).then((res) =>{
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
    setImageArr([data?.icon])   
    setDescriptionen(data?.descriptionEN)
    setDescriptionru(data?.descriptionRU)
    setDescriptionuz(data?.descriptionUZ)
    setDescriptionkr(data?.descriptionKR)
    setTitleRu(data?.nameRU)
    setTitleKr(data?.nameKR)
    setTitleUz(data?.nameUZ)
    setTitleEn(data?.nameEN)
    setLink(data?.link)
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
    <Interaktivtable  handleEdit={handleEdit} data={allData} handleDelete={deleteData}/>
    
    <Modal
      open={modal}
      onClose={()=>handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box  sx={style}>
         <h2 className='elontitle'>Interaktiv hizmatlar</h2>
         <div className='elontitlewrapper'>
          <TextField onChange={(e)=>setTitleUz(e.target.value)} defaultValue={titleUz} className='elontitleinput' id="outlined-basic" label="nameUz" variant="outlined" />
          <TextField onChange={(e)=>setTitleRu(e.target.value)} defaultValue={titleRu} className='elontitleinput' id="outlined-basic" label="nameRu" variant="outlined" />
          <TextField onChange={(e)=>setTitleEn(e.target.value)} defaultValue={titleEn} className='elontitleinput' id="outlined-basic" label="nameEn" variant="outlined" />
          <TextField onChange={(e)=>setTitleKr(e.target.value)} defaultValue={titleKr} className='elontitleinput' id="outlined-basic" label="nameKr" variant="outlined" />
          </div>
         <div className='elontitlewrapper'>
          <TextField style={{width :"100%"}} onChange={(e)=>setLink(e.target.value)} defaultValue={link} className='elontitleinput' id="outlined-basic" label="link" variant="outlined" />
          </div>
          <div className="elondescription">
          <TextField
          className='elontextarea'
          id="outlined-multiline-static"
          label="descriptionUz"
          defaultValue={descriptionuz}
          onChange={(e)=>setDescriptionuz(e.target.value)}
          multiline
          rows={4}
        />
         <TextField
          className='elontextarea'
          id="outlined-multiline-static"
          label="descriptionRu"
          multiline
          defaultValue={descriptionru}
          onChange={(e) =>setDescriptionru(e.target.value)}
          rows={4}
        />
         <TextField
           className='elontextarea'
          id="outlined-multiline-static"
          label="descriptionEn"
          multiline
          defaultValue={descriptionen}
          onChange={(e) => setDescriptionen(e.target.value)}
          rows={4}
        />
         <TextField
           className='elontextarea'
          id="outlined-multiline-static"
          label="descriptionKr"
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
        <div  className='eloninput__btn'>{imagearr.length >0 ?  `Image tanlash`:"Image tanlash"}</div><span>Faqat bitta image qushish mumkin</span>
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

export default Interaktivservive