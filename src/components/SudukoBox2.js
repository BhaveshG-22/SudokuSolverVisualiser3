import React, { useEffect, useState } from "react";
import "../App.css";

export default function SudokuBox() {
  const [sudokuData, setSudokuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sudoku-api2-0.vercel.app/");
        const data = await response.json();
        console.log(data);
        setSudokuData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const sudokuGrid = Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => "")
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-9 grid-rows-9 gap-0">
        {sudokuGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            // Determine border classes based on rowIndex and colIndex

            const borderClasses = [
              colIndex === 3 || colIndex === 6 || colIndex === 0
                ? "border-l-4 border-l-black z-4"
                : "",
              rowIndex === 0 || rowIndex === 3 || rowIndex === 6
                ? "border-t-4 border-t-black z-4"
                : "",
              colIndex === 8 || colIndex === 2 || colIndex === 5
                ? "border-r-4 border-r-black z-4"
                : "",
              rowIndex === 8 || rowIndex === 2 || rowIndex === 5
                ? "border-b-4 border-b-black z-4"
                : "",
              "border-[#71729f] border-2 z-10", // Change border color if needed
            ].join(" ");

            // console.log(rowIndex * 10 + colIndex - rowIndex);
            console.log(sudokuData[rowIndex * 10 + colIndex - rowIndex]);
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-12 h-12 text-3xl flex items-center justify-center ${borderClasses}`}
              >
                {sudokuData[rowIndex * 10 + colIndex - rowIndex]}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
