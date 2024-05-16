import React from "react";
import diag1 from "../assets/diagram1.png";
import diag2 from "../assets/diagram2.png";
import diag3 from "../assets/diagram3.png";
const Donation = () => {
  return (
    <>
      <div className=" w-full text-center"></div>;
      <div className="img-space">
        <img src={diag1} alt={diag1} width={"80%"}></img>

        <img className="" src={diag2} alt={diag2} width={"55%"}></img>

        <img className="" src={diag3} alt={diag3} width={"55%"}></img>
        <div className="mb-5"></div>
        <br></br>
      </div>
    </>
  );
};

export default Donation;
