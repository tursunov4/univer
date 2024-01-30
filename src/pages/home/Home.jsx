import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import TableGolobal from "../../components/Table/TableGlobal";
import Navbar from "../../components/navbar/Navbar";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import Box from '@mui/material/Box';
import { useDebounce } from "../../hooks/useDeabance";

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"90%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const Home = () => {
  const [modal , setModal] = useState(false)
  const data = [
    {
      name : "Name",
      calories :23,
      fat:32
    },
    {
      name : "Name",
      calories :23,
      fat:32
    },
    {
      name : "Name",
      calories :23,
      fat:32
    },
    {
      name : "Name",
      calories :23,
      fat:32
    },
    {
      name : "Name",
      calories :23,
      fat:32
    },
      {
        name : "Name",
        calories :23,
        fat:32
      },
  ]
  const handleEdit =(id) =>{
    console.log(id)
  }
  const handleDelete =(id)=>{
   console.log(id)
  }
  const [search ,setSearch] = useState("")
  const searchDebance = useDebounce(search , 500)
  console.log(searchDebance)
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      <Navbar setSearch={setSearch}/>
        <div className="add__newbtn">
       <Button onClick={()=>setModal(true)} variant="contained">
        Add new
       </Button>
        </div>  
       <TableGolobal handleEdit={handleEdit} handleDelete={handleDelete} data={data}/>
        
      </div>
      <Modal
        open={modal}
        onClose={()=>setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;