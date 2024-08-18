import React, { useState, useEffect } from "react";

import "./App.css"; // Ensure you have imported CSS
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface HomeProps {
  chuot: number;
  thucan: number;
  phanbon: number;
  nuoc: number;
  numbers: number[];
  addUniqueRandomNumber: () => void;
  addUniqueOddRandomNumber: () => void;
}

const Home: React.FC<HomeProps> = ({
  chuot,
  thucan,
  phanbon,
  nuoc,
  numbers,
  addUniqueRandomNumber,
  addUniqueOddRandomNumber,
}) => {
  let landau = 1;
  const [k1n, setK1n] = useState(0); // Initialize k1n with a default value of 0
  const [k1p, setK1p] = useState(0); // Initialize k1n with a default value of 0
  const [ks, setKs] = useState(1); // Initialize k1n with a default value of 0
  const [k3n, setK3n] = useState(0); // Initialize k1n with a default value of 0
  const [k3p, setK3p] = useState(0); // Initialize k1n with a default value of 0
  const [k5n, setK5n] = useState(0); // Initialize k1n with a default value of 0
  const [k5p, setK5p] = useState(0); // Initialize k1n with a default value of 0
  const [backgroundImages, setBackgroundImages] = useState<{
    [key: string]: string;
  }>({
    khu1: "",
    khu2: "",
    khu3: "",
    khu4: "",
    khu5: "",
  });

  const upDateBackgroundImage = (image: string, khu: string) => {
    setBackgroundImages((prevImages) => {
      const currentImage = prevImages[khu];
      const newImage =
        currentImage === `url(${image})` ? `url(${image})` : `url(${image})`;
      const newImages = {
        ...prevImages,
        [khu]: newImage,
      };

      localStorage.setItem("backgroundImages", JSON.stringify(newImages));
      return newImages;
    });
  };
  const setSo = () => {
    const textlineElement = document.querySelector(".textso");
    if (textlineElement)
      textlineElement.textContent = numbers.length.toString();
  };

  useEffect(() => {
    const savedImages = localStorage.getItem("backgroundImages");
    if (savedImages) {
      setBackgroundImages(JSON.parse(savedImages));
    }
    upDateBackgroundImage("../public/doi2.jpeg", "khu4");
  }, []);

  const handleClick = (khu: string, imagegoc: string, imagedoi: string) => {
    const textlineElement = document.querySelector(".textline");
    if (khu === "khu1") {
      if (chuot == 1) {
        setBackgroundImages((prevImages) => {
          const currentImage = prevImages[khu];
          if (currentImage === `url(${imagedoi})`) {
            if (textlineElement)
              textlineElement.textContent = "Đã hái hoa ro^i' !!!";
          } else {
            if (textlineElement)
              textlineElement.textContent =
                "Thu hoanh 1 bo^ng hoa thành co^ng !!!";
            addUniqueRandomNumber();
            setSo();
          }
          const newImage =
            currentImage === `url(${imagegoc})`
              ? `url(${imagedoi})`
              : `url(${imagedoi})`;
          const newImages = {
            ...prevImages,
            [khu]: newImage,
          };

          localStorage.setItem("backgroundImages", JSON.stringify(newImages));
          return newImages;
        });
      }

      if (nuoc === 1) {
        if (ks === 1) {
          if (k1n === 1) {
            if (k1p === 1) {
              setK1n(0);
              setK1p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc6.jpeg", "khu1");
            } else {
              if (textlineElement)
                textlineElement.textContent = "Ca^y đã du? nuoc'";
            }
          } else if (k1n === 0) {
            if (k1p === 0) {
              setK1n(1);
              if (textlineElement)
                textlineElement.textContent = "Đã tuoi'nuoc'";
            } else if (k1p === 1) {
              setK1n(0);
              setK1p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc6.jpeg", "khu1");
            }
          }
        } else {
          if (textlineElement)
            textlineElement.textContent = "Thu? cách khác nhé";
        }
      }
      if (phanbon === 1) {
        if (ks === 1) {
          if (k1p === 1) {
            if (k1n === 1) {
              setK1n(0);
              setK1p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc6.jpeg", "khu1");
            } else {
              if (textlineElement)
                textlineElement.textContent = "ca^y đã du? pha^n bón";
            }
          } else if (k1p === 0) {
            if (k1n === 0) {
              setK1p(1);
              if (textlineElement) textlineElement.textContent = "Đã bón pha^n";
            } else if (k1n === 1) {
              setK1n(0);
              setK1p(0);
              if (textlineElement)
                textlineElement.textContent = "hoa đã no? !!!";
              upDateBackgroundImage("../public/goc6.jpeg", "khu1");
            }
          }
        } else {
          if (textlineElement)
            textlineElement.textContent = "Thu? cách khác nhé";
        }
      }
    } else if (khu === "khu2") {
      if (chuot == 1) {
        setBackgroundImages((prevImages) => {
          const currentImage = prevImages[khu];
          if (currentImage === `url(${imagedoi})`) {
            if (textlineElement)
              textlineElement.textContent = "Kho^ng có gì ca?";
          } else {
            if (textlineElement) textlineElement.textContent = "Meooooo!!!";
          }

          const newImage =
            currentImage === `url(${imagegoc})`
              ? `url(${imagedoi})`
              : `url(${imagedoi})`;
          const newImages = {
            ...prevImages,
            [khu]: newImage,
          };

          localStorage.setItem("backgroundImages", JSON.stringify(newImages));
          return newImages;
        });
      }
      if (thucan == 1) {
        if (ks === 0) {
          setBackgroundImages((prevImages) => {
            const currentImage = prevImages[khu];

            if (textlineElement) textlineElement.textContent = "Meooooo!!!";
            addUniqueOddRandomNumber();
            setSo();

            const newImage =
              currentImage === `url(${imagegoc})`
                ? `url(${imagegoc})`
                : `url(${imagegoc})`;
            const newImages = {
              ...prevImages,
              [khu]: newImage,
            };

            localStorage.setItem("backgroundImages", JSON.stringify(newImages));
            return newImages;
          });
        } else {
          if (textlineElement)
            textlineElement.textContent = "Thu? cách khác nhé";
        }
      }

      if (phanbon == 1 || nuoc == 1) {
        if (textlineElement) textlineElement.textContent = "Thu? cách khác nhé";
      }
    } else if (khu === "khu3") {
      if (chuot == 1) {
        setBackgroundImages((prevImages) => {
          const currentImage = prevImages[khu];
          if (currentImage === `url(${imagedoi})`) {
            if (textlineElement)
              textlineElement.textContent = "Đã hái hoa ro^i' !!!";
          } else {
            if (textlineElement)
              textlineElement.textContent =
                "Thu hoanh 1 bo^ng hoa thành co^ng !!!";
            addUniqueRandomNumber();
            setSo();
          }
          const newImage =
            currentImage === `url(${imagegoc})`
              ? `url(${imagedoi})`
              : `url(${imagedoi})`;
          const newImages = {
            ...prevImages,
            [khu]: newImage,
          };

          localStorage.setItem("backgroundImages", JSON.stringify(newImages));
          return newImages;
        });
      }
      if (nuoc === 1) {
        if (ks === 1) {
          if (k3n === 1) {
            if (textlineElement)
              textlineElement.textContent = "Ca^y đã du? nuoc'";
          } else if (k3n === 0) {
            if (k3p === 0) {
              setK3n(1);
              if (textlineElement)
                textlineElement.textContent = "Đã tuoi'nuoc'";
            } else if (k3p === 1) {
              setK3n(0);
              setK3p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc4.jpeg", "khu3");
            }
          }
        } else {
          if (textlineElement)
            textlineElement.textContent = "Thu? cách khác nhé";
        }
      }
      if (phanbon === 1) {
        if (ks === 1) {
          if (k3p === 1) {
            if (k3n === 1) {
              setK3n(0);
              setK3p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc4.jpeg", "khu2");
            } else {
              if (textlineElement)
                textlineElement.textContent = "Ca^y đã du? pha^n bón";
            }
          } else if (k3p === 0) {
            if (k3n === 0) {
              setK3p(1);
              if (textlineElement) textlineElement.textContent = "Đã bón pha^n";
            } else if (k3n === 1) {
              setK3n(0);
              setK3p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc4.jpeg", "khu3");
            }
          }
        } else {
          if (textlineElement)
            textlineElement.textContent = "Thu? cách khác nhé";
        }
      }
    } else if (khu === "khu4") {
      if (chuot == 1) {
        setBackgroundImages((prevImages) => {
          const currentImage = prevImages[khu];
          if (ks === 0) {
            setKs(1);
            if (textlineElement) textlineElement.textContent = "Đã ba^t đèn!";
          } else {
            setKs(0);
            if (textlineElement) textlineElement.textContent = "Đã tă't đèn!";
          }

          const newImage = ks === 0 ? `url(${imagedoi})` : `url(${imagegoc})`;
          const newImages = {
            ...prevImages,
            [khu]: newImage,
          };

          localStorage.setItem("backgroundImages", JSON.stringify(newImages));
          return newImages;
        });
      } else {
        if (textlineElement) textlineElement.textContent = "Thu? cách khác nhé";
      }
    } else if (khu === "khu5") {
      if (chuot == 1) {
        setBackgroundImages((prevImages) => {
          const currentImage = prevImages[khu];
          if (currentImage === `url(${imagedoi})`) {
            if (textlineElement)
              textlineElement.textContent = "Đã hái hoa ro^i' !!!";
          } else {
            if (textlineElement)
              textlineElement.textContent =
                "Thu hoanh 1 bo^ng hoa thành co^ng !!!";
            addUniqueRandomNumber();
            setSo();
          }
          const newImage =
            currentImage === `url(${imagegoc})`
              ? `url(${imagedoi})`
              : `url(${imagedoi})`;
          const newImages = {
            ...prevImages,
            [khu]: newImage,
          };

          localStorage.setItem("backgroundImages", JSON.stringify(newImages));
          return newImages;
        });
      }
      if (nuoc === 1) {
        if (ks === 1) {
          if (k5n === 1) {
            if (k5p === 1) {
              setK5n(0);
              setK5p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc1.jpeg", "khu5");
            } else {
              if (textlineElement)
                textlineElement.textContent = "ca^y đã du? nuoc'";
            }
          } else if (k5n === 0) {
            if (k5p === 0) {
              setK5n(1);
              if (textlineElement)
                textlineElement.textContent = "Đã tuoi' nuoc'";
            } else if (k5p === 1) {
              setK5n(0);
              setK5p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc1.jpeg", "khu5");
            }
          }
        } else {
          if (textlineElement)
            textlineElement.textContent = "Thu? cách khác nhé";
        }
      }
      if (phanbon === 1) {
        if (ks === 1) {
          if (k5p === 1) {
            if (k5n === 1) {
              setK5n(0);
              setK5p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc1.jpeg", "khu5");
            } else {
              if (textlineElement)
                textlineElement.textContent = "Ca^y đã du? pha^n bón";
            }
          } else if (k5p === 0) {
            if (k5n === 0) {
              setK5p(1);

              if (textlineElement) textlineElement.textContent = "Đã bón pha^n";
            } else {
              setK5n(0);
              setK5p(0);
              if (textlineElement)
                textlineElement.textContent = "Hoa đã no? !!!";
              upDateBackgroundImage("../public/goc1.jpeg", "khu5");
            }
          }
        } else {
          if (textlineElement)
            textlineElement.textContent = "Thu? cách khác nhé";
        }
      }
    }
  };

  return (
    <div>
      <div className="nenhome">
        <div className="divngang">
          <div className="khu11">
            <div
              className="khu1"
              style={{ backgroundImage: backgroundImages.khu1 }}
            >
              <div
                className="click5"
                onClick={() =>
                  handleClick(
                    "khu1",
                    "../public/goc6.jpeg",
                    "../public/doi6.jpeg"
                  )
                }
              ></div>
            </div>
          </div>
          <div className="khu22">
            <div
              className="khu2"
              style={{ backgroundImage: backgroundImages.khu2 }}
            >
              <div
                className="click4"
                onClick={() =>
                  handleClick(
                    "khu2",
                    "../public/goc5.jpeg",
                    "../public/doi4.png"
                  )
                }
              ></div>
            </div>
          </div>
          <div className="khu33">
            <div
              className="khu3"
              style={{ backgroundImage: backgroundImages.khu3 }}
            >
              <div
                className="click3"
                onClick={() =>
                  handleClick(
                    "khu3",
                    "../public/goc4.jpeg",
                    "../public/doi3.jpeg"
                  )
                }
              ></div>
            </div>
          </div>
          <div className="khu44">
            <div
              className="khu4"
              style={{ backgroundImage: backgroundImages.khu4 }}
            >
              <div className="cuahang"></div>

              <div
                className="click2"
                onClick={() =>
                  handleClick(
                    "khu4",
                    "../public/goc3.jpeg",
                    "../public/doi2.jpeg"
                  )
                }
              ></div>
            </div>
          </div>
          <div className="khu55">
            <div
              className="khu5"
              style={{ backgroundImage: backgroundImages.khu5 }}
            >
              <div
                className="click1"
                onClick={() =>
                  handleClick(
                    "khu5",
                    "../public/goc1.jpeg",
                    "../public/doi1.jpeg"
                  )
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
function toast(arg0: string) {
  throw new Error("Function not implemented.");
}
