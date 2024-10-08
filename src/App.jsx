import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import "./styles/App.scss";
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import './styles/mediaquery.scss'

import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";


function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/services" element={<Services />}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App
