import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import http from "../../untils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Uquvtable from "../../components/Uquvtable/Uquvtable";
import Newsdaytable from "../../components/Newsday/Newsdaytable";
import Murojatlartable from "../../components/Murojatlar/Murajatlartable";
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
const Murojatlar = () => {
  const [refresh, setRefresh] = useState(false);
  const [allData, setAlldata] = useState([]);

  const getData = () => {
    http
      .get("/api/user/allAppeals")
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
      .delete(`/api/user/deleteAppeals/${id}`)
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

  useEffect(() => {
    getData();
  }, [refresh]);
  return (
    <>
      <ToastContainer />

      <div className="homeContainer">
        <div style={{ margin: "20px" }}>
          <h2>Murojatlar</h2>
        </div>

        <Murojatlartable data={allData} handleDelete={deleteData} />
      </div>
    </>
  );
};

export default Murojatlar;
