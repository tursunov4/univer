import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import Dashboardcard from "../../components/Dashboardcard/Dashboardcard";
import http from "../../untils/axios";
const Dashboard = () => {
  const [data, setData] = useState({});
  const getData = () => {
    http
      .get("/api/public/allGeneralInformat")
      .then((res) => {
        console.log(res.data[0]);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="dcard__wrap">
      <Dashboardcard text={"Talabalar soni"} number={data?.studentsNumber} />
      <Dashboardcard
        text={"Professor-o‘qituvchilar"}
        number={data?.proffessorNumber}
      />
      <Dashboardcard
        text={"Doktorantlar soni"}
        number={data?.doktorantNumber}
      />
      <Dashboardcard
        text={"Mustaqil tadqiqotchilar"}
        number={data?.independentResearchersNumber}
      />
      <Dashboardcard
        text={"Auditoriyalar soni"}
        number={data?.auditoriumNumber}
      />
      <Dashboardcard
        text={"Qo‘shma taʼlim dasturlari"}
        number={data?.jointTrainingNumber}
      />
      <Dashboardcard
        text={"Taʼlim yo‘nalishlari"}
        number={data?.fieldsofStudyNumber}
      />
      <Dashboardcard text={"Fakultetlar soni"} number={data?.facultyNumber} />
    </div>
  );
};

export default Dashboard;
