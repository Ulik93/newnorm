import "./assets/css/index.css"
import React from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./pages/Main"
import News from "./pages/News/News.js"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Alcohol from "./pages/Alcohol/Alcohol"
import Tekstil from "./pages/Tekstil/Tekstil"
import Shoes from "./pages/Shoes/Tekstil"
import EquipmentMain from "./pages/Equipments/EquipmentMain"
import Filials from "./pages/filials/filials"
import AboutUs from "./pages/AboutUs/aboutUs"
import Projects from "./pages/projects/projects.js"
import HeaderTop from "./pages/News/components/HeaderTop"
import Add from "./pages/News/Add/Add"
import New from "./pages/News/New.jsx"
import SignUp from "./pages/Sign/SignUp/SignUp"
import FullCard from "./pages/News/FullCard/FullCard"
import License from "./pages/License/License"
import Privacypolicy from "./pages/policy/privacypolicy"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/news" component={News} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/news/top" component={HeaderTop} />
        <Route path="/news/add" component={Add} />
        <Route path="/alcohol" component={Alcohol} exact />
        <Route path="/tekstil" component={Tekstil} exact />
        <Route path="/shoes" component={Shoes} exact />
        <Route path="/equipments" component={EquipmentMain} exact />
        <Route path="/filials" component={Filials} exact />
        <Route path="/about" component={AboutUs} exact />
        <Route path="/top" component={HeaderTop} />
        <Route path="/New" component={New} />
        <Route path="/signup" component={SignUp} />
        <Route path="/News/:id" component={FullCard} />
        <Route path="/license" component={License} />
<<<<<<< HEAD
        <Route path="/policy" component={Privacypolicy}/>
=======
        <Route path="/privacypolicy" component={Privacypolicy} />
>>>>>>> 05b064a403e4712f5105ee1ffddcad976f42a6f3
        <Redirect to="/" />
      </Switch>
      <Footer />
      {/* <a href='https://api.whatsapp.com/send?phone=+996501588882' target='_blank' rel='noopener noreferrer' className='fab fa-whatsapp' ></a> */}
    </BrowserRouter>
  )
}
export default App