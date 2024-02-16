import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import PrivateRoutes from "./untils/PriveteRoute";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Elonlar from "./pages/Yangiliklar/Elonlar/Elonlar"
import Sungiyangiliklar from "./pages/Yangiliklar/Sungiyanglik/Sungiyangilik";
import Fotogalareya from "./pages/Yangiliklar/Fotogalareya/Fotolareya";
import Filialnizom from "./pages/Allinformation/Filialnizom/Filialnizom";
import Meyoriyhujjat from "./pages/Allinformation/Meyorhujjat/Meyorhujjat";
import Ochiqmalumot from "./pages/Allinformation/Ochiqmalumot/Ochiqmalumot";
import Vakansiyalar from "./pages/Allinformation/Vakansiya/Vakansiya";
import Bakalaviryat from "./pages/Abuturent/Bakalaviryat/Bakalaviryat";
import Magistr from "./pages/Abuturent/Magistr/Magistr";
import Utishball from "./pages/Abuturent/Utishball/Utishball"
import Qabulkvota from "./pages/Abuturent/Qabulkvota/Qabutlkvota";
import Srtqibakalavr from "./pages/Abuturent/Srtqibakalavr/Srtqibakalavr";
import Darsjadvali from "./pages/Talabalarga/Darsjadvali/Darsjadvali";
import Tugaraklar from "./pages/Talabalarga/To'garaklar/To'garaklar";
import IqtidorliTalabalar from "./pages/Talabalarga/Iqtidorlitalaba/Iqtidorlitalaba";
import Faxriytalaba from "./pages/Talabalarga/Faxriytalaba/Faxriytalaba";
import Uquvgrafig from "./pages/Faoliyat/Uquvgrafig/Uquvgrafig";
import UquvReja from "./pages/Faoliyat/UquvReja/UquvReja";
import Uquvqoida from "./pages/Faoliyat/Uquvqoida/Uquvqoida";
import Ilmiykengash from "./pages/Faoliyat/Ilmiykengash/Ilmiykengash";
import Moliyatype from "./pages/Faoliyat/MoliyaviyFaoliyat/MoliyaviyFaoliyat";
import Moliyafaoliyat from "./pages/Faoliyat/MoliyaviyFaoliyat/Moliyafaoliya";
import Kanferensiyalar from "./pages/Faoliyat/Kanferensiyalar/Kanferensiyalar";
import XalqaroAloqa from "./pages/Faoliyat/XalqaroAloqa/XalqaroAloqa";
import Rahbariyat from "./pages/Tuzilma/Rahbariyat/Rahbariyat";
import Dekanat from "./pages/Tuzilma/Dekanat/Dekanat";
import Kafedera from "./pages/Tuzilma/Kafederalar/Kafedera";
import Markazcontrol from "./pages/Tuzilma/Markaz/Markazcontrol";
import Markazhodimlar from "./pages/Tuzilma/Markaz/Markazhodim";
import Kengashlar from "./pages/Tuzilma/Kengashlar/Kengashlar";
import Fakultetlar from "./pages/Tuzilma/Fakultetlar/Fakultetlar";import Kafederalarmain from "./pages/Tuzilma/Kafederalar/Kafederalatmian";
import Newsday from "./pages/Mainpage/Newsday/Newsday";
import MainInfor from "./pages/Mainpage/MainInfor/MainInfro";
import Interaktivservive from "./pages/Mainpage/Interaktiv/Interakrtiv";
import Aboutus from "./pages/Mainpage/Aboutus/Aboutus";
import Murojatlar from "./pages/Murojatlar/Murojatlar";
import Rectormurojat from "./pages/Murojatlar/Rectort";
import ChangePassword from "./pages/Changepasswor/Changepassword";
import Layout from "./components/Layout/Layout";
import Ilmiyjurnal from "./pages/Faoliyat/Ilmiyjurnal/Ilmiyjurnal";
function App() {
  const { darkMode } = useContext(DarkModeContext);
 

    useEffect(() => {
      const token = localStorage.getItem('token');
      const tokenTime = localStorage.getItem('tokenTime');
      
      if (!token || !tokenTime) {
        return;
      }
  
      const currentTime = new Date().getTime();
      const storedTime = new Date(parseInt(tokenTime, 10)).getTime();
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 soat millisekundda
  
      if (currentTime - storedTime > twentyFourHours) {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenTime');
        window.location.reload()
        console.log('Token muddati o\'tdi');
      } else {
        const timeUntilExpiration = twentyFourHours - (currentTime - storedTime);
        const timeout = setTimeout(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenTime');
          console.log('Token muddati o\'tdi');
        }, timeUntilExpiration);
        return () => clearTimeout(timeout);
      }
    }, []);
  
    
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route element={<PrivateRoutes/>}>
            <Route path="*" element={<NotFound/>} />
             <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="/elonlar" element={<Elonlar/>}/>  
            <Route path="/latesnews" element={<Sungiyangiliklar/>}/>
            <Route path="/photos" element={<Fotogalareya/>}/>
            <Route path="/nizom" element={<Filialnizom/>} />
            <Route path="/meyoriyhujjat" element={<Meyoriyhujjat/>}/>
            <Route path="/opendata" element={<Ochiqmalumot/>} />
            <Route path="/vakansiya" element={<Vakansiyalar/>}/>
            <Route path="/bakalvaryat"  element={<Bakalaviryat/>} />
            <Route path="/magistr" element={<Magistr/>}/>
            <Route path="/utishbali" element={<Utishball/>}/>
            <Route path="/qabulkvota" element={<Qabulkvota/>} />
            <Route path='/srtqibakalavr' element={<Srtqibakalavr/>} />
            <Route path='/lessontable' element={<Darsjadvali/>} />
            <Route path='/iqtidorlitalaba' element={<IqtidorliTalabalar/>} />
            <Route path='/tugaraklar' element={<Tugaraklar/>} />
            <Route path='/faxriylar' element={<Faxriytalaba/>} />
            <Route path={"/uquvgrafik"}  element={<Uquvgrafig/>} />
            <Route path={"/uquvreja"}  element={<UquvReja/>} />
            <Route path={"/uquvqoida"}  element={<Uquvqoida/>} />
            <Route path={"/ilmiykengash"}  element={<Ilmiykengash/>} />
            <Route path={"/ilmiyjurnal"}  element={<Ilmiyjurnal/>} />
            <Route path={"/moliyatype"}  element={<Moliyatype/>} />
            <Route path={"/moliya"}  element={<Moliyafaoliyat/>} />
            <Route path="/kanferensiya" element={<Kanferensiyalar/>} />
            <Route path="/halqaroaloqa" element={<XalqaroAloqa/>} />
            <Route path="/rahbariyat" element={<Rahbariyat/>} />
            <Route path="/dekanat" element={<Dekanat/>} />
            <Route path="/kafedera" element ={<Kafedera/>}/>
            <Route path="/markazcontrol" element ={<Markazcontrol/>}/>
            <Route path="/markazhodimlar" element ={<Markazhodimlar/>}/>
            <Route path="/kengashlar" element ={<Kengashlar/>}/>
            <Route path="/fakultetlar" element ={<Fakultetlar/>}/>
            <Route path="/kafederamain" element ={<Kafederalarmain/>}/>
             <Route path="/daynew" element={<Newsday/>} />
             <Route path="/generalinfor" element={<MainInfor/>} />
             <Route path="/interaktiveser" element={<Interaktivservive/>} />
             <Route path="/aboutus" element={<Aboutus/>} />
             <Route path="/murojatlar" element={<Murojatlar/>} />
             <Route path="/rektormurojat" element={<Rectormurojat/>} />
             <Route path="/changepassword" element={<ChangePassword/>} />
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
