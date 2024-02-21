import "./sidebar.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

const Sidebar = () => {
  const [news, setNews] = useState(false);
  const [allinfor, setAllinfor] = useState(false);
  const [tuzilma, setTuzilma] = useState(false);
  const [faoliyat, setFaoliyat] = useState(false);
  const [talaba, setTalaba] = useState(false);
  const [abuturent, setAbuturent] = useState(false);
  const [asosiy, setAsosiy] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("tokenTime");
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p onClick={() => setAsosiy(!asosiy)} className="sidebar__theme">
            Asosiy page
            <ArrowForwardIosIcon
              className={asosiy ? "iconture" : "iconfalse"}
            />
          </p>
          {asosiy && (
            <>
              <NavLink className={"navlink"} to={"/daynew"}>
                <span>Kun yangiliklar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/generalinfor"}>
                <span>Umumiy ma'lumot</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/interaktiveser"}>
                <span>Interaktiv hizmatlar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/aboutus"}>
                <span>Filial haqida</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/hamkor"}>
                <span>Hamkorlar</span>
              </NavLink>
            </>
          )}
          <p onClick={() => setNews(!news)} className="sidebar__theme">
            Yangiliklar{" "}
            <ArrowForwardIosIcon className={news ? "iconture" : "iconfalse"} />
          </p>
          {news && (
            <>
              <NavLink className={"navlink"} to={"/elonlar"}>
                <span>E'lonlar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/latesnews"}>
                <span>So'ngi Yangiliklar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/photos"}>
                <span>Foto Galareya</span>
              </NavLink>
            </>
          )}
          <p onClick={() => setAllinfor(!allinfor)} className="sidebar__theme">
            Umumiy ma'lumotlar{" "}
            <ArrowForwardIosIcon
              className={allinfor ? "iconture" : "iconfalse"}
            />
          </p>
          {allinfor && (
            <>
              <NavLink className={"navlink"} to={"/nizom"}>
                <span>Nizomlar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/meyoriyhujjat"}>
                <span>Me'yoriy hujjatlar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/opendata"}>
                <span>Ochiq ma'lumotlar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/vakansiya"}>
                <span>Vakansiyalar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/korupsiya"}>
                <span>Korupsiyaga qarishi kurashish</span>
              </NavLink>
            </>
          )}
          <p onClick={() => setTuzilma(!tuzilma)} className="sidebar__theme">
            Tuzilma
            <ArrowForwardIosIcon
              className={tuzilma ? "iconture" : "iconfalse"}
            />
          </p>
          {tuzilma && (
            <>
              <NavLink className={"navlink"} to={"/rahbariyat"}>
                <span>Rahbariyat</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/dekanat"}>
                <span>Fakultet Rahbarlari</span>
              </NavLink>

              <NavLink className={"navlink"} to={"/fakultetlar"}>
                <span>Fakultetlar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/kafedera"}>
                <span>Kafedera rahbarlari</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/kafederamain"}>
                <span>Kafederalar </span>
              </NavLink>
              <NavLink className={"navlink"} to={"/markazcontrol"}>
                <span>Markaz va bo'limlar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/markazhodimlar"}>
                <span>Markaz va bo'limlar hodimlari</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/kengashlar"}>
                <span>Kengashlar</span>
              </NavLink>
            </>
          )}
          <p onClick={() => setFaoliyat(!faoliyat)} className="sidebar__theme">
            Faoliyat
            <ArrowForwardIosIcon
              className={faoliyat ? "iconture" : "iconfalse"}
            />
          </p>
          {faoliyat && (
            <>
              <NavLink className={"navlink"} to={"/uquvgrafik"}>
                <span>O'quv grafigi</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/uquvreja"}>
                <span>O'quv rejalar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/uquvqoida"}>
                <span>O'quv qoidalar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/ilmiykengash"}>
                <span>Ilmiy kengash</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/ilmiyjurnal"}>
                <span>Ilmiy Juranal</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/moliyatype"}>
                <span>Moliyaviy faoliyat turi</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/moliya"}>
                <span>Moliyaviy faoliyat</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/kanferensiya"}>
                <span>Kanferensiyalar</span>
              </NavLink>

              <NavLink className={"navlink"} to={"/halqaroaloqa"}>
                <span>Xalqaro aloqalar</span>
              </NavLink>
            </>
          )}

          <p onClick={() => setTalaba(!talaba)} className="sidebar__theme">
            Talabalarga
            <ArrowForwardIosIcon
              className={talaba ? "iconture" : "iconfalse"}
            />
          </p>
          {talaba && (
            <>
              <NavLink className={"navlink"} to={"/lessontable"}>
                <span>Dars jadvali</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/iqtidorlitalaba"}>
                <span>Iqtidorli talabalar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/tugaraklar"}>
                <span>To'garaklar</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/faxriylar"}>
                <span>Bitirgan faxriylar</span>
              </NavLink>
            </>
          )}
          <p
            onClick={() => setAbuturent(!abuturent)}
            className="sidebar__theme"
          >
            Abuturentlarga
            <ArrowForwardIosIcon
              className={abuturent ? "iconture" : "iconfalse"}
            />
          </p>
          {abuturent && (
            <>
              <NavLink className={"navlink"} to={"/bakalvaryat"}>
                <span> Bakalavriat</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/utishbali"}>
                <span>O'tish ballari</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/qabulkvota"}>
                <span>Qabul kvotalari</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/srtqibakalavr"}>
                <span>Srtqi bakalvaryat</span>
              </NavLink>
              <NavLink className={"navlink"} to={"/magistr"}>
                <span>Magistratura</span>
              </NavLink>
            </>
          )}
          <NavLink className={"navlink"} to={"/murojatlar"}>
            <span>Murojatlar</span>
          </NavLink>
          <NavLink className={"navlink"} to={"/rektormurojat"}>
            <span> Rektorga Murojatlar</span>
          </NavLink>
          <NavLink className={"navlink"} to={"/changepassword"}>
            <span>Parolni o'zgartirish</span>
          </NavLink>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
