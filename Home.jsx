import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  console.log(openSidebar);

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show Modal
      </button>
    </main>
  );
};

export default Home;
