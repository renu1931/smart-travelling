import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/tripTwo.module.css";
import icon1 from "../public/images/tripTwo/Group 22133.png";
import icon2 from "../public/images/tripTwo/Group 22134.png";
import icon3 from "../public/images/tripTwo/Group 22135.png";
import rectangle1 from "../public/images/tripTwo/Rectangle 4574.png";
import rectangle2 from "../public/images/tripTwo/Rectangle 4575.png";
import image1 from "../public/images/tripTwo/image1.png";
import image2 from "../public/images/tripTwo/image2.png";
import image3 from "../public/images/tripTwo/image3.png";
import image4 from "../public/images/tripTwo/image4.png";
import image5 from "../public/images/tripTwo/image5.png";
import image6 from "../public/images/tripTwo/image6.png";
import image7 from "../public/images/tripTwo/image7.png";
import image8 from "../public/images/tripTwo/image8.png";
import image9 from "../public/images/tripTwo/image9.png";
import image10 from "../public/images/tripTwo/image10.png";
import image11 from "../public/images/tripTwo/image11.png";
import image12 from "../public/images/tripTwo/image12.png";
import cross from "../public/images/trip/cross.png";
import Link from "next/link";

function TripTwo() {
  const [input1, setInput1] = useState(false);
  const [changeColor, setChangeColor] = useState(true);
  const [firstColor, setFirstColor] = useState(true);
  const [secondColor, setSecondColor] = useState(true);
  const [thirdColor, setThirdColor] = useState(true);
  const [fourthColor, setFourthColor] = useState(true);
  const [fifthColor, setFifthColor] = useState(true);
  const [sixthColor, setSixthColor] = useState(true);
  const [seventhColor, setSeventhColor] = useState(true);
  const [eighthColor, setEighthColor] = useState(true);
  const [ninthColor, setNinthColor] = useState(true);
  const [tenthColor, setTenthColor] = useState(true);
  const [elevenColor, setElevenColor] = useState(true)
  const [text, setText] = useState([])
  const [info, setInfo] = useState("")

  const toggleInput1 = () => {
    setInput1(!input1);
  };

  const handleChangeColor = (data) => {
    setText([...text, data])
    setChangeColor(!changeColor);
  };
  const handleFirstColor = (data) => {
    setText([...text, data])
    setFirstColor(!firstColor)
  }
  const handleSecondColor = (data) => {
    setText([...text, data]);
    setSecondColor(!secondColor)
  }
  const handleThirdColor = (data) => {
    setText([...text, data]);
    setThirdColor(!thirdColor)
  }
  const handleFourthColor = (data) => {
    setText([...text, data]);
    setFourthColor(!fourthColor)
  }
  const handleFifthColor = (data) => {
    setText([...text, data]);
    setFifthColor(!fifthColor)
  }
  const handleSixthColor = (data) => {
    setText([...text, data]);
    setSixthColor(!sixthColor)
  }
  const handleSeventhColor = (data) => {
    setText([...text, data]);
    setSeventhColor(!seventhColor)
  }
  const handleEighthColor = (data) => {
    setText([...text, data]);
    setEighthColor(!eighthColor)
  }
  const handleNinthColor = (data) => {
    setText([...text, data]);
    setNinthColor(!ninthColor)
  }
  const handleTenthColor = (data) => {
    setText([...text, data]);
    setTenthColor(!tenthColor)
  }
  const handleElevenColor = (data) => {
    setText([...text, data]);
    setElevenColor(!elevenColor)
  }
  const handleSubmit = () => {
    toggleInput1()
    console.log("submit text ====>", text)
    for (let i = 0; i < text.length; i++) {
      info = info.concat(text[i]);
      if (i < text.length - 1) {
        info = info.concat(", ");
      }
    }
    setInfo(info);
  }

  const saveBtn = () => {
    toggleInput2();
  };
  return (
    <div className={styles.tripTwo}>
      <div className="container">
        <div className="text-center">
          <Image src={icon1} alt="trip-two" />
          <Image src={icon2} alt="trip-two" />
          <Image src={icon3} alt="trip-two" />
        </div>
      </div>
      <div className={styles.tripTwo_input_Container}>
        <input value={info.length == 0 ? "Choose Interest" : text} className={styles.tripTwo_input} onClick={toggleInput1} />
        <div style={{ display: input1 ? "block" : "none", }}>
          <div className="container p-0" id={styles.tripTwo_inputtwo_container}>
            <p className={styles.tripTwo_content}>Choose 1 or more</p>
            <p className={styles.tripTwo_cross_para} onClick={toggleInput1}>
              <Image src={cross} alt="cross_image" height={12} width={15} className={styles.cross_image} />
            </p>
            <div className={styles.image_display_container}>
              <div className={`${!changeColor ? styles.camping_div_color : styles.camping_div}`} onClick={() => handleChangeColor("camping")}>
                <p><Image src={image1} height={50} width={50} /></p>
                <p className={styles.image_para_content}>Camping</p>
              </div>
              <div className={`${!firstColor ? styles.camping_div_color : styles.camping_div}`} onClick={() => handleFirstColor("Hiking")}>
                <p> <Image src={image2} height={50} width={50} /> </p>
                <p className={styles.image_para_content} >Hiking</p>
              </div>
              <div className={`${!secondColor ? styles.camping_div_color : styles.camping_div}`} onClick={() => handleSecondColor("Offbeat")}>
                <p><Image src={image3} height={50} width={50} /> </p>
                <p className={styles.image_para_content}>Offbeat</p>
              </div>
              <div className={`${!thirdColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleThirdColor("Apple Orchards")}>
                <p><Image src={image4} height={50} width={50} /></p>
                <p className={styles.image_para_content2}>Apple Orchards</p>
              </div>
            </div>
            <div className={styles.image_display_container}>
              <div className={`${!fourthColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleFourthColor("Biking")}>
                <p> <Image src={image5} height={50} width={50} /></p>
                <p className={styles.image_para_content}>Biking</p>
              </div>
              <div className={`${!fifthColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleFifthColor("Forest")}>
                <p><Image src={image6} height={50} width={50} /></p>
                <p className={styles.image_para_content}>Forest</p>
              </div>
              <div className={`${!sixthColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleSixthColor("Historical")}>
                <p><Image src={image7} height={50} width={50} /></p>
                <p className={styles.image_para_content}>Historical</p>
              </div>
              <div className={`${!seventhColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleSeventhColor("Romantic")}>
                <p> <Image src={image8} height={50} width={50} />  </p>
                <p className={styles.image_para_content}>Romantic</p>
              </div>
            </div>
            <div className={styles.image_display_container}>
              <div className={`${!eighthColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleEighthColor("Adventure")}>
                <p> <Image src={image9} height={50} width={50} /> </p>
                <p className={styles.image_para_content}>Adventure</p>
              </div>
              <div className={`${!ninthColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleNinthColor("Offroading")}>
                <p><Image src={image10} height={50} width={50} /></p>
                <p className={styles.image_para_content}>Offroading</p>
              </div>
              <div className={`${!tenthColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleTenthColor("Traditional")}>
                <p><Image src={image11} height={50} width={50} /></p>
                <p className={styles.image_para_content}>Traditional</p>
              </div>
              <div className={`${!elevenColor ? styles.camping_div_color1 : styles.camping_div1}`} onClick={() => handleElevenColor("Waterfall")}>
                <p><Image src={image12} height={50} width={50} /></p>
                <p className={styles.image_para_content}>Waterfall</p>
              </div>
            </div>
            <div className={styles.tripTwo_inputtwo_btn_container}>
              <button className={styles.tripTwo_inputtwo_btn} onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
        <input defaultValue="Budget Per Person" className={styles.tripTwo_input} />
      </div>
      <div className={styles.btn_container}>
        <Link href="/tripThree"><button className={styles.save_btn}>Save & Continue</button></Link>
      </div>
    </div>
  );
}

export default TripTwo;
