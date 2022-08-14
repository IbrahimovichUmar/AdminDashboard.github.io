import React, { useState } from "react";
import "./index.scss";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiOutlineWechat } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import usersImg from "../../assets/images/home/user-img.png";
import bannerImg from "../../assets/images/home/banner-img.png";
import bannerDark from "../../assets/images/darkmode/banner-dark.png";

import { Card } from "../../components";
import Chart1 from "../../components/Charts-1/Chart";
import Chart2 from "../../components/Charts-2/Chart";
import Chart from "../../components/Charts-3/Chart";

const data = [
  { name: "Page A", uv: 1000, pv: 20 },
  { name: "Page B", uv: 3000, pv: 15 },
  { name: "Page C", uv: 2000, pv: 28 },
  { name: "Page D", uv: 3000, pv: 15 },
  { name: "Page D", uv: 3000, pv: 20 },
  { name: "Page D", uv: 3000, pv: 10 },
];

const data2 = [
  { name: "Page A", uv: 100, pv: 12 },
  { name: "Page B", uv: 10, pv: 11 },
  { name: "Page C", uv: 2000, pv: 5 },
  { name: "Page D", uv: 3000, pv: 20 },
  { name: "Page D", uv: 3000, pv: 5 },
];

const data3 = [
  { name: "Page A", uv: 100, pv: 7 },
  { name: "Page B", uv: 10, pv: 10 },
  { name: "Page C", uv: 2000, pv: 15 },
  { name: "Page D", uv: 3000, pv: 5 },
  { name: "Page D", uv: 3000, pv: 20 },
  { name: "Page D", uv: 3000, pv: 5 },
];

function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className={`wrapper ${isDark && "wrapperDark"}`}>
      <div className={`sidebar ${isDark && "sidebarDark"}`}>
        <h1>
          SOL<span>ID</span>
        </h1>
        <div className="sidebar__content">
          <Link to={"/"}>
            <AiOutlineBarChart />
            <span>Dashboard</span>
          </Link>
          <Link to={"/"}>
            <RiShoppingCart2Line />
            <span>Orders</span>
          </Link>
          <Link to={"/"}>
            <AiOutlineUser />
            <span>Account</span>
          </Link>
          <Link to={"/"}>
            <AiOutlineSetting />
            <span>Settings</span>
          </Link>
          <p className="choose">Support</p>
          <Link to={"/"}>
            <AiOutlineWechat />
            <span>Chat</span>
          </Link>
          <Link to={"/"}>
            <BsFillQuestionCircleFill />
            <span>FAQ</span>
          </Link>
        </div>

        <button
          className={`primary ${isDark && "primaryDark"}`}
          onClick={toggleDarkMode}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="navbar">
        <div className={`header ${isDark && "headerDark"}`}>
          <div className="search__bar">
            <AiOutlineSearch />
            <input type="text" placeholder="Search" name="search" />
          </div>
          <div className="user">
            <span>
              <FaBell />
            </span>
            <div className="vertical__line"></div>
            <p>Matt Appleyard</p>
            <img className="user__img" src={usersImg} alt="/" />
          </div>
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
        <div className="main">
          <div className="content__1">
            <div className={`card1 ${isDark && "card1Dark"}`}>
              <div className="leftMobile">
                <img
                  className="banner"
                  src={isDark ? bannerDark : bannerImg}
                  alt="/"
                />
              </div>

              <div className="left">
                <h2>Welcome to your dashboard!</h2>
                <p>
                  Try our new Admin Dashboard Template, build with live
                  Ant-Design components. Customize it to your needs and release
                  to production!
                </p>
              </div>
              <div className="right">
                <img
                  className="banner"
                  src={isDark ? bannerDark : bannerImg}
                  alt="/"
                />
              </div>
            </div>
            <div className={`card2 ${isDark && "card2Dark"}`}>
              <div className="chart">
                <h2>Chart Title</h2>
                <Chart1 />
              </div>
            </div>
          </div>
          <div className="content__2">
            <Card
              className={isDark && "cardDark"}
              chartNumber={2643}
              percentage={1.1}
              chartColor={"#FF7777"}
              data={data}
            />
            <Card
              className={isDark && "cardDark"}
              chartNumber={2650}
              percentage={4.1}
              chartColor={"#F3C522"}
              data={data2}
            />
            <Card
              className={isDark && "cardDark"}
              chartNumber={2660}
              percentage={2.15}
              chartColor={"#06AA8D"}
              data={data3}
            />
          </div>
          <div className="content__3">
            <div className={`card6 ${isDark && "card6Dark"}`}>
              <div className="chart">
                <h2>Chart Title</h2>
                <Chart />
              </div>
            </div>
            <div className={`card7 ${isDark && "card7Dark"}`}>
              <div className="chart">
                <h2>Chart Title</h2>

                <p>
                  <span>
                    <BiUpArrowAlt />
                  </span>
                  1.10% Since yesterday
                </p>
              </div>
              <div className="circle__chart">
                <Chart2 />
              </div>
            </div>
          </div>
          <div className="button__mobile">
            <button
              className={`primaryMobile ${isDark && "primaryMobileDark"}`}
              onClick={toggleDarkMode}
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
