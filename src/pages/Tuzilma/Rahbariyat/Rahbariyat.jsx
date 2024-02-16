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
import "react-toastify/dist/ReactToastify.css";
import Rahbartable from "../../../components/Rahbariyat/Rahbariyattable";
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  height: "80vh",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  p: 4,
  overflow: "auto",
};
const Rahbariyat = () => {
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState(false);
  const [allData, setAlldata] = useState([]);
  const [imagearr, setImageArr] = useState([]);
  const [image, setImage] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleUz, setTitleUz] = useState("");
  const [titleRu, setTitleRu] = useState("");
  const [titleKr, setTitleKr] = useState("");
  const [degreeEN, setDegreeEN] = useState("");
  const [degreeRU, setDegreeRU] = useState("");
  const [degreeUZ, setDegreeUZ] = useState("");
  const [degreeKR, setDegreeKR] = useState("");
  const [dutiesEN, setDutiesEN] = useState("");
  const [dutiesRU, setDutiesRU] = useState("");
  const [dutiesUZ, setDutiesUZ] = useState("");
  const [dutiesKR, setDutiesKR] = useState("");
  const [descriptionuz, setDescriptionuz] = useState("");
  const [descriptionru, setDescriptionru] = useState("");
  const [descriptionen, setDescriptionen] = useState("");
  const [descriptionkr, setDescriptionkr] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [telegram, setTelegram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [skype, setSkype] = useState("");
  const [likedin, setLinkedin] = useState("");

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
        .put(`/api/user/editLeadership/${editid}`, {
          hashId: arr?.at(-1),
          fullNameKR: titleKr,
          fullNameRU: titleRu,
          fullNameUZ: titleUz,
          fullNameEN: titleEn,
          biographyEN: descriptionen,
          biographyKR: descriptionkr,
          biographyRU: descriptionru,
          biographyUZ: descriptionuz,
          dutiesEN: dutiesEN,
          dutiesKR: dutiesKR,
          dutiesRU: dutiesRU,
          dutiesUZ: dutiesUZ,
          email: email,
          degreeEN: degreeEN,
          degreeKR: degreeKR,
          degreeRU: degreeRU,
          degreeUZ: degreeUZ,
          linkedln: likedin,
          phoneNumber: phone,
          skype: skype,
          telegramlink: telegram,
          twitterlink: twitter,
          leadershipStatus: "RAHBARIYAT",
          facebooklink: facebook,
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
        .post("/api/user/addLeadership", {
          hashId: arr?.at(-1),
          fullNameKR: titleKr,
          fullNameRU: titleRu,
          fullNameUZ: titleUz,
          fullNameEN: titleEn,
          biographyEN: descriptionen,
          biographyKR: descriptionkr,
          biographyRU: descriptionru,
          biographyUZ: descriptionuz,
          dutiesEN: dutiesEN,
          dutiesKR: dutiesKR,
          dutiesRU: dutiesRU,
          dutiesUZ: dutiesUZ,
          email: email,
          degreeEN: degreeEN,
          degreeKR: degreeKR,
          degreeRU: degreeRU,
          degreeUZ: degreeUZ,
          linkedln: likedin,
          phoneNumber: phone,
          skype: skype,
          telegramlink: telegram,
          twitterlink: twitter,
          leadershipStatus: "RAHBARIYAT",
          facebooklink: facebook,
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
    setTitleRu("");
    setTitleKr("");
    setTitleUz("");
    setTitleEn("");
    setDescriptionen("");
    setDescriptionru("");
    setDescriptionuz("");
    setDescriptionkr("");
    setDegreeRU("");
    setDegreeKR("");
    setDegreeUZ("");
    setDegreeEN("");
    setDutiesRU("");
    setDutiesKR("");
    setDutiesUZ("");
    setDutiesEN("");
    setEmail("");
    setLinkedin("");
    setPhone("");
    setSkype("");
    setTelegram("");
    setTwitter("");
    setFacebook("");
  };
  const getData = () => {
    http
      .get("/api/public/allLeader")
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
      .delete(`/api/user/deleteLeadership/${id}`)
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
    setImageArr([data?.file]);
    setTitleRu(data?.fullNameRU);
    setTitleKr(data?.fullNameKR);
    setTitleUz(data?.fullNameUZ);
    setTitleEn(data?.fullNameEN);
    setDegreeRU(data?.degreeRU);
    setDegreeKR(data?.degreeKR);
    setDegreeUZ(data?.degreeUZ);
    setDegreeEN(data?.degreeEN);
    setDutiesRU(data?.dutiesRU);
    setDutiesKR(data?.dutiesKR);
    setDutiesUZ(data?.dutiesUZ);
    setDutiesEN(data?.dutiesEN);
    setEmail(data?.email);
    setLinkedin(data?.linkedln);
    setPhone(data?.phoneNumber);
    setSkype(data?.skype);
    setTelegram(data?.telegramlink);
    setTwitter(data?.twitterlink);
    setFacebook(data?.facebooklink);
    setDescriptionen(data?.biographyEN);
    setDescriptionru(data?.biographyRU);
    setDescriptionuz(data?.biographyUZ);
    setDescriptionkr(data?.biographyKR);
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
      <Rahbartable
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
          <h2 className="elontitle">
            Rahbar {edit ? "tahrirlash" : "qo'shish"}
          </h2>
          <div className="elontitlewrapper">
            <TextField
              onChange={(e) => setTitleUz(e.target.value)}
              defaultValue={titleUz}
              className="elontitleinput"
              id="outlined-basic"
              label="fullNameUz"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleRu(e.target.value)}
              defaultValue={titleRu}
              className="elontitleinput"
              id="outlined-basic"
              label="fullNameRu"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleEn(e.target.value)}
              defaultValue={titleEn}
              className="elontitleinput"
              id="outlined-basic"
              label="fullNameEn"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTitleKr(e.target.value)}
              defaultValue={titleKr}
              className="elontitleinput"
              id="outlined-basic"
              label="fullNameKr"
              variant="outlined"
            />
          </div>
          <div className="elontitlewrapper">
            <TextField
              onChange={(e) => setDegreeUZ(e.target.value)}
              defaultValue={degreeUZ}
              className="elontitleinput"
              id="outlined-basic"
              label="degreeUZ"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDegreeRU(e.target.value)}
              defaultValue={degreeRU}
              className="elontitleinput"
              id="outlined-basic"
              label="degreeRu"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDegreeEN(e.target.value)}
              defaultValue={degreeEN}
              className="elontitleinput"
              id="outlined-basic"
              label="degreeEn"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDegreeKR(e.target.value)}
              defaultValue={degreeKR}
              className="elontitleinput"
              id="outlined-basic"
              label="degreeKr"
              variant="outlined"
            />
          </div>
          <div className="elontitlewrapper">
            <TextField
              onChange={(e) => setDutiesUZ(e.target.value)}
              defaultValue={dutiesUZ}
              className="elontitleinput"
              id="outlined-basic"
              label="dutiesUZ"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDutiesRU(e.target.value)}
              defaultValue={dutiesRU}
              className="elontitleinput"
              id="outlined-basic"
              label="dutiesRu"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDutiesEN(e.target.value)}
              defaultValue={dutiesEN}
              className="elontitleinput"
              id="outlined-basic"
              label="dutiesEn"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setDutiesKR(e.target.value)}
              defaultValue={dutiesKR}
              className="elontitleinput"
              id="outlined-basic"
              label="dutiesKr"
              variant="outlined"
            />
          </div>
          <div className="elontitlewrapper">
            <TextField
              onChange={(e) => setFacebook(e.target.value)}
              defaultValue={facebook}
              className="elontitleinput"
              id="outlined-basic"
              label="Facebook link"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTelegram(e.target.value)}
              defaultValue={telegram}
              className="elontitleinput"
              id="outlined-basic"
              label="Telegram link"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setTwitter(e.target.value)}
              defaultValue={twitter}
              className="elontitleinput"
              id="outlined-basic"
              label="Twitter link"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setSkype(e.target.value)}
              defaultValue={skype}
              className="elontitleinput"
              id="outlined-basic"
              label="Skype link"
              variant="outlined"
            />
          </div>
          <div className="elontitlewrapper">
            <TextField
              style={{ width: "100%" }}
              onChange={(e) => setLinkedin(e.target.value)}
              defaultValue={likedin}
              className="elontitleinput"
              id="outlined-basic"
              label="Linkdin link"
              variant="outlined"
            />
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
          <div className="elondescription">
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="biographyUz"
              defaultValue={descriptionuz}
              onChange={(e) => setDescriptionuz(e.target.value)}
              multiline
              rows={4}
            />
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="biographyRu"
              multiline
              defaultValue={descriptionru}
              onChange={(e) => setDescriptionru(e.target.value)}
              rows={4}
            />
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="biographyEn"
              multiline
              defaultValue={descriptionen}
              onChange={(e) => setDescriptionen(e.target.value)}
              rows={4}
            />
            <TextField
              className="elontextarea"
              id="outlined-multiline-static"
              label="biographyKr"
              multiline
              defaultValue={descriptionkr}
              onChange={(e) => setDescriptionkr(e.target.value)}
              rows={4}
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
                {imagearr.length > 0 ? `Image tanlash` : "Image tanlash"}
              </div>
              <span>Faqat bitta fayl qushish mumkin</span>
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

export default Rahbariyat;
