import React, { useEffect, useState } from "react";
import "./App.css"; // Ensure you have imported the CSS file
import "./cuahang.css"; // Ensure you have imported the CSS file

interface GiohoaProps {
  numbers: number[];
}

const Giohoa: React.FC<GiohoaProps> = ({ numbers }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const stringsArray = Array.from({ length: 30 }, (_, i) => ``);
  stringsArray[2] = "Chúc mừng sinh nhật mẹ"; // String for index 1 (2nd element)
  stringsArray[4] =
    "Tuy có lúc con hay gắt gỏng nhưng thực sự con vẫn rất yêu mẹ"; // String for index 3 (4th element)
  stringsArray[6] = "Chúc mừng sinh nhật mẹ, người phụ nữ tuyệt vời nhất!";
  stringsArray[8] = "Chúc mẹ luôn mạnh khỏe và hạnh phúc!";
  stringsArray[10] =
    "Chúc mẹ sẽ càng gặt hái được nhiều thành công trong sự nghiệp trồng người!";
  stringsArray[12] = "Đi khắp thế gian không ai tốt b ằng Mẹ.";
  stringsArray[14] = "Chúc mẹ luôn xinh đẹp và rạng rỡ!";
  stringsArray[16] =
    "Ánh mặt trời đánh thức con dậy, còn Mẹ là người ru con ngủ";
  stringsArray[18] = "Chúc mẹ sẽ luôn được mọi người yêu quý  !";
  stringsArray[20] =
    "Mẹ Thoa như ánh trăng khuya \n Dịu dàng soi tỏ bước đi con hiền.";
  stringsArray[22] = "Chúc mẹ có mỗi một ngày trôi qua đều tràn đầy niềm vui";
  stringsArray[24] = "Ôi! tình mẹ, mối tình không ai quên được. (V.Hugo)";
  stringsArray[26] = "Happy birthday <3";
  stringsArray[28] =
    "Vũ trụ có rất nhiều kì quan, nhưng kỳ quan vĩ đại nhất là Trái tim người Mẹ. (Bernard Shaw)";
  stringsArray[30] =
    "Con gửi cùng món quà nhỏ này với tình yêu thương của con!";

  const handleClick = (index: number) => {
    setActiveIndex(index);
    const element = document.querySelector(".numberanhchinh");

    if (element) {
      element.textContent = numbers[index].toString();
    }
    if (numbers[index] % 2 === 0) {
      const anh = document.querySelector(".anhthechinh") as HTMLElement;
      if (anh) {
        anh.style.backgroundImage = "none";
      }
      const anhTrongElement = document.querySelector(
        ".anhtrongchinh"
      ) as HTMLElement;

      if (anhTrongElement) {
        anhTrongElement.style.backgroundImage = "url(../public/paper.png)";
        anhTrongElement.style.width = "66vh";
        anhTrongElement.style.height = "51vh";
      }
      const textanhchinh = document.querySelector(
        ".textanhchinh"
      ) as HTMLElement;
      if (textanhchinh) {
        textanhchinh.textContent = stringsArray[numbers[index]];
      }
    }
    if (numbers[index] % 2 === 1) {
      const text = document.querySelector(".textanhchinh") as HTMLElement;
      if (text) {
        text.textContent = "";
      }
      const nd = document.querySelector(".anhnoidungchinh") as HTMLElement;
      if (nd) {
        (nd.style.backgroundImage = "url(../public/" + index), ".jpg)";
      }
      const trong = document.querySelector(".anhtrongchinh") as HTMLElement;
      if (trong) {
        trong.style.backgroundImage = "url(../public/khung.png)";
        trong.style.width = "60vh";
        trong.style.height = "56vh";
      }
      const anh = document.querySelector(".anhthechinh") as HTMLElement;
      if (anh) {
        anh.style.backgroundImage = "url(../public/" + numbers[index] + ".jpg)";
      }
    }
  };
  useEffect(() => {
    const anhTrongElement = document.querySelector(".textline");
    if (anhTrongElement) {
      anhTrongElement.textContent = "Noi tram hoa đua no?";
    }
  }, [activeIndex]);

  return (
    <div className="nentuong">
      <div className="tuong">
        <div className="anh">
          <div className="anhtrongchinh">
            <div className="anhthechinh">
              <div className="numberanhchinh"></div>
              <div className="textanhchinh"></div>
            </div>
          </div>
        </div>
        <div className="list">
          {numbers.map((number, index) => (
            <div
              key={index}
              className={`${number % 2 === 0 ? "doituong" : "anhthe"} ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div
                className="anhnoidung"
                style={{ backgroundImage: "url(" + numbers[index] + ".jpg)" }}
              >
                <div className="number">{number}</div>
                <div className="textanh">{stringsArray[number]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Giohoa;
