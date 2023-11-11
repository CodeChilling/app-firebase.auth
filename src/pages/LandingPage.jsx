import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import HomeComponent from "../components/home/HomeComponent"

const LandingPage = () => {
  return (
    <div data-theme="cupcake" className="flex-col">
        <Navbar/>
        <HomeComponent/>
        <Footer/>
    </div>
  )
}

export default LandingPage