import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import http from "../../../untils/axios";
import { ToastContainer, toast } from "react-toastify";
import PhotoTable from "../../../components/Yangiliklar/Phototable";
import MoliyaTable from "../../../components/Moliyatype/Moliyatype";
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

const Moliyatype = () => {
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState(false);
  const [allData, setAlldata] = useState([]);
  const [titleEn, setTitleEn] = useState("");
  const [titleUz, setTitleUz] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [titleKr, setTitleKr] = useState("");
  const [edit, setEdit] = useState(false);
  const [editid, setEditId] = useState("");

  const handleSubmit = () => {
    if (edit) {
      http
        .put(`/api/user/editFinancialOperationsDepartment/${editid}`, {
          nameKR: titleKr,
          nameRU: titleRu,
          nameUZ: titleUz,
          nameEN: titleEn,
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
        .post("/api/user/addFinancialOperationsDepartment", {
          nameKR: titleKr,
          nameRU: titleRu,
          nameUZ: titleUz,
          nameEN: titleEn,
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
  };
  const getData = () => {
    http
      .get("/api/public/allfinancialOperationsDepartment")
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
      .delete(`/api/user/deleteFinancialOperationsDepartment/${id}`)
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
      <MoliyaTable
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
          <h2 className="elontitle">Moliyaviy faoliyat turi</h2>
          <div className="phototitle__wrapper">
            <TextField
              onChange={(e) => setTitleUz(e.target.value)}
              defaultValue={titleUz}
              className="elontitleinput"
              id="outlined-basic"
              label="NameUz"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleRu(e.target.value)}
              defaultValue={titleRu}
              className="elontitleinput"
              id="outlined-basic"
              label="NameRu"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleEn(e.target.value)}
              defaultValue={titleEn}
              className="elontitleinput"
              id="outlined-basic"
              label="NameEn"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleKr(e.target.value)}
              defaultValue={titleKr}
              className="elontitleinput"
              id="outlined-basic"
              label="NameKr"
              variant="outlined"
            />
          </div>
          <div className="submitwrap">
            <Button
              onClick={handleSubmit}
              className="sumbitbuttonelon"
              variant="contained"
            >
              {edit ? "Tahrirlash" : "Qo'shish"}
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Moliyatype;
