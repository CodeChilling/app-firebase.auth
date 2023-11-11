import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SignInComponent from "../components/signin/SignInComponent";

const LoginPage = () => {
  return (
    <div data-theme="cupcake" className="flex-col">
        <Navbar/>
        <SignInComponent/>
        <Footer/>
    </div>
  )
}

export default LoginPage;
