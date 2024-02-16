import React from "react";
import "./style.scss";
const Dashboardcard = ({ text, number, img }) => {
  return (
    <div className="dashbordcard">
      {/* <img src={img} alt="" />   */}
      <p>{text}</p>
      <h3>{number ? number : 0}</h3>
    </div>
  );
};

export default Dashboardcard;
