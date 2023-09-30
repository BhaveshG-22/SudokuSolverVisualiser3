import React from "react";
import "../App.css";

export default function SudokuBox() {
  const squareSize = "10%"; // Set the size of each square as a percentage of the container

  const squareStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black",
    boxSizing: "border-box",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(9, ${squareSize})`, // 9 columns
    // gridTemplateRows: `repeat(9, ${squareSize})`, // 9 rows
    margin: "auto",
    // marginTop: "40px",
  };
  return (
    <div className="flex  items-center justify-center h-screen">
      <div lassName=" border-4 border-red-500 " style={gridStyle}>
        {[...Array(81)].map((_, index) => (
          <div
            key={index}
            className="m-5 flex justify-center items-center font-bold text-2xl"
            style={squareStyle}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {/* <div className="grid mt-40 grid-cols-9 grid-rows-9 mx-auto my-auto ">
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className=" w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2  "
          id="box00"
        >
          9
        </div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>

        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>

        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
        <div
          className="w-10 h-10 min-h-fit flex justify-center items-center fill-black  border-black border-2 "
          id="box00"
        ></div>
      </div> */}
      {/* <div className="grid mt-40 grid-cols-9 grid-rows-9 mx-auto my-auto ">  
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml3 mt3"
        id="box00"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt3"
        id="box01"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mt3"
        id="box02"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml mt3"
        id="box03"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt3"
        id="box04"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mt3"
        id="box05"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml mt3"
        id="box06"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt3"
        id="box07"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt3 mr3"
        id="box08"
      ></div>

      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml3"
        id="box10"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box"
        id="box11"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr"
        id="box12"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml"
        id="box13"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box"
        id="box14"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr"
        id="box15"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml"
        id="box16"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box"
        id="box17"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr3"
        id="box18"
      ></div>

      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml3 mb"
        id="box20"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb"
        id="box21"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mb"
        id="box22"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml mb"
        id="box23"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb"
        id="box24"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mb"
        id="box25"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml mb"
        id="box26"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb"
        id="box27"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb mr3"
        id="box28"
      ></div>

      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml3 mt"
        id="box30"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt"
        id="box31"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mt"
        id="box32"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt ml"
        id="box33"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt"
        id="box34"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mt"
        id="box35"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt ml"
        id="box36"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt"
        id="box37"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt mr3 "
        id="box38"
      ></div>

      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml3"
        id="box40"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box"
        id="box41"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr"
        id="box42"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml"
        id="box43"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box"
        id="box44"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr"
        id="box45"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml"
        id="box46"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box"
        id="box47"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr3"
        id="box48"
      ></div>

      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml3 mb"
        id="box50"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb"
        id="box51"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mb"
        id="box52"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb ml"
        id="box53"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb"
        id="box54"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mb"
        id="box55"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb ml"
        id="box56"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb"
        id="box57"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb mr3"
        id="box58"
      ></div>

      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml3 mt"
        id="box60"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt"
        id="box61"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mt"
        id="box62"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt ml"
        id="box63"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt"
        id="box64"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mt"
        id="box65"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt ml"
        id="box66"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt"
        id="box67"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mt mr3"
        id="box68"
      ></div>

      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml3"
        id="box70"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box"
        id="box71"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr"
        id="box72"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml"
        id="box73"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box"
        id="box74"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr"
        id="box75"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml"
        id="box76"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box"
        id="box77"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr3"
        id="box78"
      ></div>

      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml3 mb3"
        id="box80"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb3"
        id="box81"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mb3"
        id="box82"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml mb3"
        id="box83"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb3"
        id="box84"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr mb3"
        id="box85"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box ml mb3"
        id="box86"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mb3"
        id="box87"
      ></div>
      <div
        className="border-2 border-black w-full h-full flex justify-center items-center"
        ok="box mr3 mb3"
        id="box88"
      ></div>
       </div>   */}
    </div>
  );
}
