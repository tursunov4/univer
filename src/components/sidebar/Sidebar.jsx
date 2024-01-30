import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link , useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

const Sidebar = () => {
  const [news , setNews]= useState(false)
  const [allinfor , setAllinfor] = useState(false)
  const [tuzilma , setTuzilma] = useState(false)
  const [faoliyat , setFaoliyat] = useState(false)
  const [talaba , setTalaba ] = useState(false)
  const [abuturent , setAbuturent] = useState(false)
  const [asosiy , setAsosiy] = useState(false)
  const navigate = useNavigate()
  const handleLogout =()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("tokenTime")
    window.location.reload()
  }

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
          
          <p onClick={()=>setAsosiy(!asosiy)} className="sidebar__theme">Asosiy page<ArrowForwardIosIcon  className={asosiy ? "iconture" : "iconfalse"}/></p>
          {
            asosiy &&          
              <>
              <li onClick={()=>navigate("/daynew")}>
            <span>Kun yangiliklar</span>
             </li>
             <li onClick={()=>navigate("/generalinfor")}>
            <span>Umumiy ma'lumot</span>
             </li>
             <li onClick={()=>navigate("/interaktiveser")}>
            <span>Interaktiv hizmatlar</span>
             </li>
             <li onClick={()=>navigate("/aboutus")}>
            <span>Biz haqimizda</span>
             </li>
             </>
          }
          <p onClick={()=>setNews(!news)} className="sidebar__theme">Yangiliklar <ArrowForwardIosIcon  className={news ? "iconture" : "iconfalse"}/></p>
          {
            news &&          
              <>
              <li onClick={()=>navigate("/elonlar")}>
            <span>E'lonlar</span>
             </li>
             <li onClick={()=>navigate("/latesnews")}>
            <span>So'ngi Yangiliklar</span>
             </li>
             <li onClick={()=>navigate("/photos")}>
            <span>Foto Galareya</span>
             </li>
             </>
          }
          <p onClick={()=>setAllinfor(!allinfor)} className="sidebar__theme">Umumiy ma'lumotlar <ArrowForwardIosIcon  className={allinfor ? "iconture" : "iconfalse"}/></p>
         {
          allinfor && 
          <>
           <li  onClick={()=>navigate("/nizom")}>
              <span>Filial nizom</span>
            </li>
            <li  onClick={()=>navigate("/meyoriyhujjat")}>
              <span>Me'yoriy hujjatlar</span>
            </li>
            <li  onClick={()=>navigate("/opendata")}>
              <span>Ochiq ma'lumotlar</span>
            </li>
            <li  onClick={()=>navigate("/vakansiya")}>
              <span>Vakansiyalar</span>
            </li>

          </>
         }
            <p onClick={()=>setTuzilma(!tuzilma)} className="sidebar__theme">Tuzilma<ArrowForwardIosIcon  className={tuzilma ? "iconture" : "iconfalse"}/></p>
        {
          tuzilma && 
          <>
          <li onClick={()=>navigate("/rahbariyat")}>
           <span>Rahbariyat</span>
          </li>
          <li onClick={()=>navigate("/dekanat")}>
           <span>Fakultet Rahbarlari</span>
          </li>
         
          <li onClick={()=>navigate("/fakultetlar")}>
           <span>Fakultetlar</span>
          </li>
          <li onClick={()=>navigate("/kafedera")}>
           <span>Kafedera rahbarlari</span>
          </li>
          <li onClick={()=>navigate("/kafederamain")}>
           <span>Kafederalar </span>
          </li>
          <li onClick={()=>navigate("/markazcontrol")}>
           <span>Markaz va bo'limlar</span>
          </li>
          <li onClick={()=>navigate("/markazhodimlar")}>
           <span>Markaz va bo'limlar hodimlari</span>
          </li>
          <li onClick={()=>navigate("/kengashlar")}>
           <span>Kengashlar</span>
          </li>

          </>
        }
        <p onClick={()=>setFaoliyat(!faoliyat)} className="sidebar__theme">Faoliyat<ArrowForwardIosIcon  className={faoliyat ? "iconture" : "iconfalse"}/></p>
         {
          faoliyat && <>
         
          <li onClick={()=>navigate("/uquvgrafik")}>
           <span>O'quv grafigi</span>
          </li>
          <li onClick={()=>navigate("/uquvreja")}>
           <span>O'quv rejalar</span>
          </li>
          <li onClick={()=>navigate("/uquvqoida")}>
           <span>O'quv qoidalar</span>
          </li>
          <li onClick={()=>navigate("/ilmiykengash")}>
           <span>Ilmiy kengash</span>
          </li>
          <li onClick={()=>navigate("/ilmiyjurnal")}>
           <span>Ilmiy Juranal</span>
          </li>
          <li onClick={()=>navigate("/moliyatype")}>
           <span>Moliyaviy faoliyat turi</span>
          </li>
          <li onClick={()=>navigate("/moliya")}>
           <span>Moliyaviy faoliyat</span>
          </li>
          <li onClick={()=>navigate("/kanferensiya")}>
           <span>Kanferensiyalar</span>
          </li>
          
          <li onClick={()=>navigate("/halqaroaloqa")}>
           <span>Xalqaro aloqalar</span>
          </li>
          
          
       
          </>
         }
       
        <p onClick={()=>setTalaba(!talaba)} className="sidebar__theme">Talabalarga<ArrowForwardIosIcon  className={talaba ? "iconture" : "iconfalse"}/></p>
         {
          talaba && <>
          <li onClick={()=>navigate("/lessontable")}>
           <span>Dars jadvali</span>
          </li>
          <li onClick={()=>navigate("/iqtidorlitalaba")}>
           <span>Iqtidorli talabalar</span>
          </li>
          <li onClick={()=>navigate("/tugaraklar")}>
           <span>To'garaklar</span>
          </li>
          <li onClick={()=>navigate("/faxriylar")}>
           <span>Bitirgan faxriylar</span>
          </li>
          </>
         }
        <p onClick={()=>setAbuturent(!abuturent)} className="sidebar__theme">Abuturentlarga<ArrowForwardIosIcon  className={abuturent ? "iconture" : "iconfalse"}/></p>
         {
          abuturent && <>
          <li onClick={()=>navigate("/bakalvaryat")}>
           <span>  Bakalavriat</span>
          </li>
          <li onClick={()=>navigate("/utishbali")}>
           <span>O'tish ballari</span>
          </li>
          <li onClick={()=>navigate("/qabulkvota")}>
           <span>Qabul kvotalari</span>
          </li>
          <li onClick={()=>navigate("/srtqibakalavr")}>
           <span>Srtqi bakalvaryat</span>
          </li>
          <li onClick={()=>navigate("/magistr")}>
           <span>Magistratura</span>
          </li>
          </>
         }
           <li onClick={()=>navigate('/murojatlar')}>
            <span >Murojatlar</span>
          </li>
           <li onClick={()=>navigate('/rektormurojat')}>
            <span > Rektorga Murojatlar</span>
          </li>
           <li onClick={()=>navigate('/changepassword')}>
            <span >Parolni o'zgartirish</span>
          </li>
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
