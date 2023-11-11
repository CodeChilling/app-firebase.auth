import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../config/AuthContext";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleClick = async () => {
    try {
      await logout();
      toast.success("Logged out successfully", {
        duration: 3000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch (error) {
      toast.error(error.message, {
        duration: 3000,
      });
    }
  };

  return (
    <div className="w-full">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <li>
                <a onClick={handleClick}>Logout</a>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">register</Link>
                </li>
              </>
            )}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
