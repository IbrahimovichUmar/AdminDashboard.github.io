import React, { useState } from "react";
import "../Login/index.scss";
import loginKey from "../../assets/images/login/login-key.png";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import usersImg from "../../assets/images/home/user-img.png";
function Login() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark(!isDark);
  return (
    <div className={`wrapper__login ${isDark && "wrapper__loginDark"}`}>
      <div className={`logo ${isDark && "logoDark"}`}>
        <h1>
          SOL<span>ID </span>
        </h1>
      </div>
      <div className={`header__mobile ${isDark && "header__mobileDark"}`}>
        <span className="three__line">
          <AiOutlineMenu />
        </span>
        <h1>
          SOL<span>ID </span>
        </h1>

        <img className="user" src={usersImg} alt="/" />
      </div>

      <div className="wrapper__content">
        <div className={`login ${isDark && "loginDark"}`}>
          <div className="left">
            <div className="search__login">
              <AiOutlineUser />
              <input type="text" placeholder="Username" name="search" />
            </div>
            <div className="search__login">
              <AiOutlineLock />
              <input type="text" placeholder="Password" name="search" />
            </div>
            <div className={`remember ${isDark && "rememberDark"}`}>
              <form>
                <input type="checkbox" name="taste" value="pie" />
              </form>
              <p>
                Remember me <a href="#">Forgot password</a>
              </p>
            </div>
            <div className={`login__button ${isDark && "login__buttonDark"}`}>
              <Link to="/home">
                <button>Log in</button>
              </Link>
              <p>
                Or <span>register now!</span>
              </p>
            </div>
          </div>
          <div className="right">
            <img className="login__key" src={loginKey} alt="/" />
          </div>
        </div>
      </div>

      <button
        className={`primary ${isDark && "primaryDark"}`}
        onClick={toggleDarkMode}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Login;
