import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";

const Layout = (props) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModalHandler = () => {
    setIsModalShown((prevState) => !prevState);
  };

  return (
    <>
      <Navbar onToggle={toggleModalHandler} />
      <div className="container">{props.children}</div>
      {isModalShown && <Login onClose={toggleModalHandler} />}
    </>
  );
};

export default Layout;
