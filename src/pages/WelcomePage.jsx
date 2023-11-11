import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WelcomeComponent from "../components/home/WelcomeComponent";

const WelcomePage = () => {
  return (
    <div>
      <Navbar />
      <WelcomeComponent />
      <Footer />
    </div>
  );
};

export default WelcomePage;
