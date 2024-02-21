import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import http from "../../../untils/axios";
import { ToastContainer, toast } from "react-toastify";
import Nizomtable from "../../../components/Allinfor/Nizomtable";
import Hamkortable from "../../../components/Hamkortable/Hamkortable";
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
const Hamkorlar = () => {
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState(false);
  const [allData, setAlldata] = useState([]);
  const [imagearr, setImageArr] = useState([]);
  const [image, setImage] = useState("");
  const [titleEn, setTitleEn] = useState("");

  const [edit, setEdit] = useState(false);
  const [editid, setEditId] = useState("");
  if (image) {
    const form = new FormData();
    form.append("image", image);
    http
      .post("/api/user/addAttachment", form)
      .then((res) => {
        setImage("");
        if (res.status === 200) {
          setImageArr([...imagearr, res.data]);
        }
        console.log(res.data);
      })
      .catch((err) => {
        setImage("");
        console.log(err);
      });
  }

  const handleSubmit = () => {
    const arr = [];
    for (let i = 0; i < imagearr.length; i++) {
      arr.push(imagearr[i]?.hashId);
    }
    if (edit) {
      http
        .put(`/api/user/editpartner/${editid}`, {
          icon: arr?.at(-1),
          link: titleEn,
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
        .post("/api/user/addpartner", {
          icon: arr?.at(-1),
          link: titleEn,
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
    setImageArr([]);

    setTitleEn("");
  };
  const getData = () => {
    http
      .get("api/public/allpartner")
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
      .delete(`/api/user/deletepartner/${id}`)
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
    setImageArr([data?.icon]);
    setTitleEn(data?.link);
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
      <Hamkortable
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
          <h2 className="elontitle">Hamkorlar</h2>
          <div className="elontitlewrapper">
            <TextField
              style={{ width: "100%" }}
              onChange={(e) => setTitleEn(e.target.value)}
              defaultValue={titleEn}
              className="elontitleinput"
              id="outlined-basic"
              label="Link"
              variant="outlined"
            />
          </div>

          <div className="elonimg">
            <label className="eloninput">
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                placeholder={
                  imagearr.length > 0
                    ? `выбраны ${imagearr.length} - файла`
                    : "Загрузить файл"
                }
              />
              <div className="eloninput__btn">
                {imagearr.length > 0 ? `Icon tanlash` : "Icon tanlash"}
              </div>
              <span>
                Faqat bitta fayl qushish mumkin. Fayl tanlash majburiy
              </span>
            </label>
          </div>
          <div className="image__orginalname">
            {imagearr?.at(-1)?.orginalName}
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

export default Hamkorlar;
