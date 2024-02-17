import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import http from "../../../untils/axios";
import { ToastContainer, toast } from "react-toastify";
import VakansiyaTable from "../../../components/Allinfor/Vakansiya";
import "react-toastify/dist/ReactToastify.css";
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  p: 4,
};
const Vakansiyalar = () => {
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState(false);
  const [allData, setAlldata] = useState([]);
  const [titleEn, setTitleEn] = useState("");
  const [titleUz, setTitleUz] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [titleKr, setTitleKr] = useState("");
  const [positionEn, setPositionEn] = useState("");
  const [positonUz, setPositionUz] = useState("");
  const [positionRu, setPositionRu] = useState("");
  const [positionKr, setPositionKr] = useState("");
  const [descriptionuz, setDescriptionuz] = useState("");
  const [descriptionru, setDescriptionru] = useState("");
  const [descriptionen, setDescriptionen] = useState("");
  const [descriptionkr, setDescriptionkr] = useState("");
  const [salary, setSalary] = useState("");
  const [edit, setEdit] = useState(false);
  const [editid, setEditId] = useState("");

  const handleSubmit = () => {
    if (edit) {
      http
        .put(`/api/user/editVacancie/${editid}`, {
          nameKR: titleKr,
          nameRU: titleRu,
          nameUZ: titleUz,
          nameEN: titleEn,
          descriptionEN: descriptionen,
          descriptionKR: descriptionkr,
          descriptionRU: descriptionru,
          descriptionUZ: descriptionuz,
          positionKR: positionKr,
          positionRU: positionRu,
          positionUZ: positionUz,
          positionEN: positionEn,
          salary: salary,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data?.success) {
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
            setRefresh(!refresh);
          } else {
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
          if (res.status === 400) {
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
          if (res.status === 200) {
            handleClose();
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Qushilgan malumotlarda kamchilik bor !!!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } else {
      http
        .post("/api/user/addVacancie", {
          nameKR: titleKr,
          nameRU: titleRu,
          nameUZ: titleUz,
          nameEN: titleEn,
          positionKR: positionKr,
          positionRU: positionRu,
          positionUZ: positionUz,
          positionEN: positionEn,
          descriptionEN: descriptionen,
          descriptionKR: descriptionkr,
          descriptionRU: descriptionru,
          descriptionUZ: descriptionuz,
          salary: salary,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data?.success) {
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
            setRefresh(!refresh);
          } else {
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
          if (res.status === 400) {
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
          if (res.status === 200) {
            handleClose();
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Qushilgan malumotlarda kamchilik bor !!!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };
  const handleClose = () => {
    setModal(false);
    setEditId("");
    setEdit(false);
    setTitleRu("");
    setTitleKr("");
    setTitleUz("");
    setTitleEn("");
    setDescriptionen("");
    setDescriptionru("");
    setDescriptionuz("");
    setDescriptionkr("");
    setPositionRu("");
    setPositionKr("");
    setPositionUz("");
    setPositionEn("");
    setSalary("");
  };
  const getData = () => {
    http
      .get("/api/public/allVacancie")
      .then((res) => {
        console.log(res.data);
        setAlldata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteData = (id) => {
    http
      .delete(`/api/user/deleteVacancie/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data?.success) {
          toast.warn(res.data?.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setRefresh(!refresh);
        } else {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (data) => {
    setEdit(true);
    setModal(true);
    setEditId(data?.id);
    setTitleRu(data?.nameRU);
    setTitleKr(data?.nameKR);
    setTitleUz(data?.nameUZ);
    setTitleEn(data?.nameEN);
    setPositionRu(data?.positionRU);
    setPositionKr(data?.positionKR);
    setPositionUz(data?.positionUZ);
    setPositionEn(data?.positionEN);
    setDescriptionen(data?.descriptionEN);
    setDescriptionru(data?.descriptionRU);
    setDescriptionuz(data?.descriptionUZ);
    setDescriptionkr(data?.descriptionKR);
    setSalary(data?.salary);
    
  };

  useEffect(() => {
    getData();
  }, [refresh]);
  return (
    <>
      <ToastContainer />
      <div className="add__newbtn">
        <Button onClick={() => setModal(true)} variant="contained">
          Add new
        </Button>
      </div>
      <VakansiyaTable
        handleEdit={handleEdit}
        data={allData}
        handleDelete={deleteData}
      />

      <Modal
        open={modal}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="elontitle">Vakansiya qushish</h2>
          <div className="elontitlewrapper">
            <TextField
              onChange={(e) => setTitleUz(e.target.value)}
              defaultValue={titleUz}
              className="elontitleinput"
              id="outlined-basic"
              label="TitleUz"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleRu(e.target.value)}
              defaultValue={titleRu}
              className="elontitleinput"
              id="outlined-basic"
              label="TitleRu"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleEn(e.target.value)}
              defaultValue={titleEn}
              className="elontitleinput"
              id="outlined-basic"
              label="TitleEn"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleKr(e.target.value)}
              defaultValue={titleKr}
              className="elontitleinput"
              id="outlined-basic"
              label="TitleKr"
              variant="outlined"
            />
          </div>
          <div className="elontitlewrapper">
            <TextField
              onChange={(e) => setPositionUz(e.target.value)}
              defaultValue={positonUz}
              className="elontitleinput"
              id="outlined-basic"
              label="PositionUz"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setPositionRu(e.target.value)}
              defaultValue={positionRu}
              className="elontitleinput"
              id="outlined-basic"
              label="PositionRu"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setPositionEn(e.target.value)}
              defaultValue={positionEn}
              className="elontitleinput"
              id="outlined-basic"
              label="PositionEn"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setPositionKr(e.target.value)}
              defaultValue={positionKr}
              className="elontitleinput"
              id="outlined-basic"
              label="PositionKr"
              variant="outlined"
            />
          </div>
          <div className="elondescription">
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label=" DescribtionUz"
              defaultValue={descriptionuz}
              onChange={(e) => setDescriptionuz(e.target.value)}
              multiline
              rows={4}
            />
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="DescribtionRu"
              multiline
              defaultValue={descriptionru}
              onChange={(e) => setDescriptionru(e.target.value)}
              rows={4}
            />
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="DescribtionEng"
              multiline
              defaultValue={descriptionen}
              onChange={(e) => setDescriptionen(e.target.value)}
              rows={4}
            />
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="DescribtionKr"
              multiline
              defaultValue={descriptionkr}
              onChange={(e) => setDescriptionkr(e.target.value)}
              rows={4}
            />
          </div>
          <div>
            <TextField
              style={{ marginTop: "20px", width: "100%", marginBottom: "10px" }}
              defaultValue={salary}
              onChange={(e) => setSalary(e.target.value)}
              id="outlined-basic"
              label="Salary"
              variant="outlined"
            />
          </div>
          <div className="submitwrap">
            <Button
              onClick={handleSubmit}
              className="sumbitbuttonelon"
              variant="contained"
            >
              Qo'shish
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Vakansiyalar;
