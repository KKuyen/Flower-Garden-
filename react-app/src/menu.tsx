import React, { useEffect, useState } from "react";

import Home from "./home";
import Giohoa from "./giohoa";
import Cuahang from "./cuahang.css"; // Import the Cuahang component
import "./App.css"; // Ensure you have imported CSS
interface MenuProps {
  numbers: number[];
  addUniqueRandomNumber: () => void;
  addUniqueOddRandomNumber: () => void;
}

const Menu: React.FC<MenuProps> = ({
  numbers,
  addUniqueRandomNumber,
  addUniqueOddRandomNumber,
}) => {
  const [isGiohoa, setIsGiohoa] = useState(true);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [chuot, setChuot] = useState(0);
  const [thucan, setThucan] = useState(0);
  const [phanbon, setPhanbon] = useState(0);
  const [nuoc, setNuoc] = useState(0);

  const handleGiohoaClick = () => {
    setIsGiohoa(!isGiohoa);
  };

  const handleToolClick = (tool: string) => {
    setActiveTool(tool);
    if (tool === "chuot") {
      setChuot(1);
      setThucan(0);
      setPhanbon(0);
      setNuoc(0);
    } else if (tool === "thucan") {
      setChuot(0);
      setThucan(1);
      setPhanbon(0);
      setNuoc(0);
    } else if (tool === "phanbon") {
      setChuot(0);
      setThucan(0);
      setPhanbon(1);
      setNuoc(0);
    } else if (tool === "nuoc") {
      setChuot(0);
      setThucan(0);
      setPhanbon(0);
      setNuoc(1);
    }
  };

  return (
    <>
      <div className="back">
        <div className="menu">
          <div
            className={`giohoa ${isGiohoa ? "giohoa-active" : ""}`}
            onClick={handleGiohoaClick}
          >
            <div className="rectangle">
              <div className="textso"></div>
            </div>
          </div>
          <div className="congcu">
            <div
              className={`chuot ${activeTool === "chuot" ? "active" : ""}`}
              onClick={() => handleToolClick("chuot")}
            >
              <div className="anhchuot"></div>
            </div>
            <div
              className={`nuoc ${activeTool === "nuoc" ? "active" : ""}`}
              onClick={() => handleToolClick("nuoc")}
            >
              <div className="anhnuoc"></div>
            </div>
            <div
              className={`thucan ${activeTool === "thucan" ? "active" : ""}`}
              onClick={() => handleToolClick("thucan")}
            >
              <div className="anhthucan"></div>
            </div>
            <div
              className={`phanbon ${activeTool === "phanbon" ? "active" : ""}`}
              onClick={() => handleToolClick("phanbon")}
            >
              <div className="anhphanbon"></div>
            </div>
          </div>
        </div>
        <div className="noidung">
          {isGiohoa ? (
            <Home
              chuot={chuot}
              thucan={thucan}
              phanbon={phanbon}
              nuoc={nuoc}
              numbers={numbers}
              addUniqueRandomNumber={addUniqueRandomNumber}
              addUniqueOddRandomNumber={addUniqueOddRandomNumber}
            />
          ) : (
            <Giohoa numbers={numbers} />
          )}
        </div>

        <div className="menu2">
          <div className="textline">Chúc mu'ng sinh nha^t me.</div>
        </div>
      </div>
    </>
  );
};

export default Menu;
