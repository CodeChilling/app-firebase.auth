import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SignUpComponent from "../components/signup/SignUpComponent"

const RegisterPage = () => {
  return (
    <div data-theme="cupcake" className="flex-col">
        <Navbar/>
        <SignUpComponent/>
        <Footer/>
    </div>
  )
}

export default RegisterPage