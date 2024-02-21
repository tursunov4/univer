import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import http from "../../../untils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Uquvtable from "../../../components/Uquvtable/Uquvtable";
import Kanferensiyatable from "../../../components/Uquvtable/Kaferensiya";
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
const Kanferensiyalar = () => {
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState(false);
  const [allData, setAlldata] = useState([]);
  const [imagearr, setImageArr] = useState([]);
  const [image, setImage] = useState("");
  const [descriptionuz, setDescriptionuz] = useState("");
  const [descriptionru, setDescriptionru] = useState("");
  const [descriptionen, setDescriptionen] = useState("");
  const [descriptionkr, setDescriptionkr] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleUz, setTitleUz] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [titleKr, setTitleKr] = useState("");
  const [titEn, setTitEn] = useState("");
  const [titUz, setTitUz] = useState("");
  const [titRu, setTitRu] = useState("");
  const [titKr, setTitKr] = useState("");
  const [dateEN, setDateEN] = useState("");
  const [dateUZ, setDateUZ] = useState("");
  const [dateRU, setDateRU] = useState("");
  const [dateKR, setDateKR] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sana, setSana] = useState("");
  const [edit, setEdit] = useState(false);
  const [editid, setEditId] = useState("");

  const handleSubmit = () => {
    const arr = [];
    for (let i = 0; i < imagearr.length; i++) {
      arr.push(imagearr[i]?.hashId);
    }
    if (edit) {
      http
        .put(`/api/user/conferenceEdit/${editid}`, {
          descriptionEN: descriptionen,
          descriptionKR: descriptionkr,
          descriptionRU: descriptionru,
          descriptionUZ: descriptionuz,
          addressKR: titleKr,
          addressRU: titleRu,
          addressUZ: titleUz,
          addressEN: titleEn,
          dateEN: dateEN,
          dateUZ: dateUZ,
          dateRU: dateRU,
          dateKR: dateKR,
          titleKR: titKr,
          titleRU: titRu,
          titleUZ: titUz,
          titleEN: titEn,
          email: email,
          phone: phone,
          sana: sana,
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
        .post("/api/user/conferenceSave", {
          descriptionEN: descriptionen,
          descriptionKR: descriptionkr,
          descriptionRU: descriptionru,
          descriptionUZ: descriptionuz,
          addressKR: titleKr,
          addressRU: titleRu,
          addressUZ: titleUz,
          addressEN: titleEn,
          titleKR: titKr,
          titleRU: titRu,
          titleUZ: titUz,
          titleEN: titEn,
          dateEN: dateEN,
          dateUZ: dateUZ,
          dateRU: dateRU,
          dateKR: dateKR,
          email: email,
          phone: phone,
          sana: sana,
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
    setDescriptionen("");
    setDescriptionru("");
    setDescriptionuz("");
    setDescriptionkr("");
    setTitleRu("");
    setTitleKr("");
    setTitleUz("");
    setTitleEn("");
    setTitRu("");
    setTitKr("");
    setTitUz("");
    setTitEn("");
    setDateRU("");
    setDateKR("");
    setDateUZ("");
    setDateEN("");
    setEmail("");
    setPhone("");
    setSana("");
  };
  const getData = () => {
    http
      .get("/api/public/allconferencenotpage")
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
      .delete(`/api/user/conferenceDelete/${id}`)
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
    setDescriptionen(data?.descriptionEN);
    setDescriptionru(data?.descriptionRU);
    setDescriptionuz(data?.descriptionUZ);
    setDescriptionkr(data?.descriptionKR);
    setTitleRu(data?.addressRU);
    setTitleKr(data?.addressKR);
    setTitleUz(data?.addressUZ);
    setTitleEn(data?.addressEN);
    setTitRu(data?.titleRU);
    setTitKr(data?.titleKR);
    setTitUz(data?.titleUZ);
    setTitEn(data?.titleEN);
    setDateRU(data?.dateRU);
    setDateKR(data?.dateKR);
    setDateUZ(data?.dateUZ);
    setDateEN(data?.dateEN);
    setEmail(data?.email);
    setPhone(data?.phone);
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
      <Kanferensiyatable
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
          <h2 className="elontitle">Kanferensiyalar</h2>
          <div className="elontitlewrapper">
            <TextField
              onChange={(e) => setTitUz(e.target.value)}
              defaultValue={titUz}
              className="elontitleinput"
              id="outlined-basic"
              label="titleUz"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitRu(e.target.value)}
              defaultValue={titRu}
              className="elontitleinput"
              id="outlined-basic"
              label="titleRu"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitEn(e.target.value)}
              defaultValue={titEn}
              className="elontitleinput"
              id="outlined-basic"
              label="titleEn"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitKr(e.target.value)}
              defaultValue={titKr}
              className="elontitleinput"
              id="outlined-basic"
              label="titleKr"
              variant="outlined"
            />
          </div>
          <div className="elontitlewrapper">
            <TextField
              onChange={(e) => setTitleUz(e.target.value)}
              defaultValue={titleUz}
              className="elontitleinput"
              id="outlined-basic"
              label="addressUz"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleRu(e.target.value)}
              defaultValue={titleRu}
              className="elontitleinput"
              id="outlined-basic"
              label="addressRu"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleEn(e.target.value)}
              defaultValue={titleEn}
              className="elontitleinput"
              id="outlined-basic"
              label="addressEn"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleKr(e.target.value)}
              defaultValue={titleKr}
              className="elontitleinput"
              id="outlined-basic"
              label="addressKr"
              variant="outlined"
            />
          </div>
          <div className="elontitlewrapper">
            <TextField
              onChange={(e) => setDateUZ(e.target.value)}
              defaultValue={dateUZ}
              className="elontitleinput"
              id="outlined-basic"
              label="Kutilayotgan sana Uz"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDateRU(e.target.value)}
              defaultValue={dateRU}
              className="elontitleinput"
              id="outlined-basic"
              label="Kutilayotgan sana Ru"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDateEN(e.target.value)}
              defaultValue={dateEN}
              className="elontitleinput"
              id="outlined-basic"
              label="Kutilayotgan sana En"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDateKR(e.target.value)}
              defaultValue={dateKR}
              className="elontitleinput"
              id="outlined-basic"
              label="Kutilayotgan sana Kr"
              variant="outlined"
            />
          </div>
          <div className="elondescription">
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="descriptionUz"
              defaultValue={descriptionuz}
              onChange={(e) => setDescriptionuz(e.target.value)}
              multiline
              rows={4}
            />
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="descriptionRu"
              multiline
              defaultValue={descriptionru}
              onChange={(e) => setDescriptionru(e.target.value)}
              rows={4}
            />
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="descriptionEn"
              multiline
              defaultValue={descriptionen}
              onChange={(e) => setDescriptionen(e.target.value)}
              rows={4}
            />
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="descriptionKr"
              multiline
              defaultValue={descriptionkr}
              onChange={(e) => setDescriptionkr(e.target.value)}
              rows={4}
            />
          </div>
          <div style={{ margin: "20px" }} className="elontitlewrapper">
            <TextField
              style={{ width: "100%" }}
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              className="elontitleinput"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              style={{ width: "100%" }}
              onChange={(e) => setPhone(e.target.value)}
              defaultValue={phone}
              className="elontitleinput"
              id="outlined-basic"
              label="Telefon raqam"
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

export default Kanferensiyalar;
