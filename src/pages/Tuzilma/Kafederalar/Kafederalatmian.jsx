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
import Abutable from '../../../components/Abuturentlar/AbutTable';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Kafederatable from '../../../components/Kafedera/Kafederatable';
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
const Kafederalarmain = () => {
  const [refresh , setRefresh] = useState(false)
  const [modal , setModal] = useState(false)
  const [allData , setAlldata] = useState([])
  const [imagearr , setImageArr] = useState([])
  const [image , setImage] = useState("")
  const [descriptionuz , setDescriptionuz] = useState("")
  const [descriptionru , setDescriptionru] = useState("")
  const [descriptionen , setDescriptionen] = useState("")
  const [descriptionkr , setDescriptionkr] = useState("")
  const [moliyatype , setMoliyatype] = useState([])
  const [moliyaSelection , setMoliyaSelection] = useState('')
  const [fakultyselection , setFakultySelection] = useState("")
  const [fakulty , setFaculty] = useState([])
  const [edit , setEdit ] = useState(false)
  const [editid , setEditId] = useState("")
  const [titleEn , setTitleEn] = useState("")
  const [titleUz , setTitleUz] = useState("")
  const [titleRu , setTitleRu] = useState("")
  const [titleKr , setTitleKr] = useState("")
 
 const handleSubmit =()=>{

  if(edit){
    http.put(`/api/user/editDepartment/${editid}` , {
      
        descriptionEN: descriptionen,
        descriptionKR: descriptionkr,
        descriptionRU: descriptionru,
        descriptionUZ: descriptionuz,
        leadershipId: moliyaSelection      ,
        nameKR: titleKr,
        nameRU: titleRu,
        nameUZ: titleUz,
        nameEN: titleEn,    
        facultyId : fakultyselection
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
    http.post("/api/user/addDepartment" , {
       
        descriptionEN: descriptionen,
        descriptionKR: descriptionkr,
        descriptionRU: descriptionru,
        descriptionUZ: descriptionuz,
        leadershipId: moliyaSelection      ,
        nameKR: titleKr,
        nameRU: titleRu,
        nameUZ: titleUz,
        nameEN: titleEn,   
        facultyId : fakultyselection
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
  setTitleRu("")
  setTitleKr("")
  setTitleUz("")
  setTitleEn("")
  setMoliyaSelection("")
  setFakultySelection('')

 }
const getData =()=>{
  http.get("/api/public/allDepartments" ).then((res) =>{
    console.log(res.data)
    setAlldata(res.data)
  }).catch((err)=>{
    console.log(err)
  })
}   
const deleteData =(id)=>{
  http.delete(`/api/user/deleteFaculty/${id}`).then((res) =>{
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
   
    setDescriptionen(data?.descriptionEN)
    setDescriptionru(data?.descriptionRU)
    setDescriptionuz(data?.descriptionUZ)
    setDescriptionkr(data?.descriptionKR)
    setTitleRu(data?.nameRU)
    setTitleKr(data?.nameKR)
    setTitleUz(data?.nameUZ)
    setTitleEn(data?.nameEN)
    setMoliyaSelection(data?.leadershipGet?.id )
    setFakultySelection(data?.facultyid)

  }
  const handleChange = (event) => {
    setMoliyaSelection(event.target.value);
  };
  const handleChange2 = (event) => {
    setFakultySelection(event.target.value);
  };
  
  const getMoliyaType =()=>{
    http.get("/api/public/allLeaderShipstatusDekanat" ).then((res) =>{
      console.log(res.data)
      setMoliyatype(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    http.get("/api/public/allFaculty" ).then((res) =>{
      console.log(res.data)
      setFaculty(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
useEffect(()=>{
  getData()
}, [refresh])
useEffect(()=>{
   getMoliyaType()
},[])
  return (
    <>
      <ToastContainer/>
      <div className="add__newbtn">
       <Button onClick={()=>setModal(true)} variant="contained">
      Add new
     </Button>
      </div>  
    <Kafederatable handleEdit={handleEdit} data={allData} handleDelete={deleteData}/>

    <Modal
      open={modal}
      onClose={()=>handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box  sx={style}>
         <h2 className='elontitle'> Kafedera {edit ? "tahrirlash" : "qo'shish"}</h2>
         <div className='elontitlewrapper'>
          <TextField onChange={(e)=>setTitleUz(e.target.value)} defaultValue={titleUz} className='elontitleinput' id="outlined-basic" label="TitleUz" variant="outlined" />
          <TextField onChange={(e)=>setTitleRu(e.target.value)} defaultValue={titleRu} className='elontitleinput' id="outlined-basic" label="TitleRu" variant="outlined" />
          <TextField onChange={(e)=>setTitleEn(e.target.value)} defaultValue={titleEn} className='elontitleinput' id="outlined-basic" label="TitleEn" variant="outlined" />
          <TextField onChange={(e)=>setTitleKr(e.target.value)} defaultValue={titleKr} className='elontitleinput' id="outlined-basic" label="TitleKr" variant="outlined" />
          </div>
          <div className="elondescription">
          <TextField
          className='elontextarea'
          id="outlined-multiline-static"
          label="informationUz"
          defaultValue={descriptionuz}
          onChange={(e)=>setDescriptionuz(e.target.value)}
          multiline
          rows={4}
        />
         <TextField
          className='elontextarea'
          id="outlined-multiline-static"
          label="informationRu"
          multiline
          defaultValue={descriptionru}
          onChange={(e) =>setDescriptionru(e.target.value)}
          rows={4}
        />
         <TextField
           className='elontextarea'
          id="outlined-multiline-static"
          label="informationEng"
          multiline
          defaultValue={descriptionen}
          onChange={(e) => setDescriptionen(e.target.value)}
          rows={4}
        />
         <TextField
           className='elontextarea'
          id="outlined-multiline-static"
          label="informationKr"
          multiline
          defaultValue={descriptionkr}
          onChange={(e) => setDescriptionkr(e.target.value)}
          rows={4}
        />
          </div>
          <div>
          <FormControl style={{marginTop:'20px'}} fullWidth>
          <InputLabel id="demo-simple-select-label">Kafedera rahbarlari</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={moliyaSelection}
          label="Fakultet rahbarlari"
          onChange={handleChange}
        >
            {
                moliyatype.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                    {item.fullNameUZ}
                    </MenuItem>
                ))
            }
        </Select>
          </FormControl>
          <FormControl style={{marginTop:'20px'}} fullWidth>
          <InputLabel id="demo-simple-select-label">Fakultetlar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fakultyselection}
          label="Fakultet rahbarlari"
          onChange={handleChange2}
        >
            {
                fakulty?.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                    {item.nameUZ}
                    </MenuItem>
                ))
            }
        </Select>
          </FormControl>
          </div>
        
            
         <div className="submitwrap">
         <Button   onClick={handleSubmit} className='sumbitbuttonelon' variant="contained">Qo'shish</Button>
         </div>
      </Box>
    </Modal>
  </>
  )
}

export default Kafederalarmain