import React from "react";
import "./../auth.css";
import bulkmailerlogo from "../../../assets/bulkmailerlogo.png";
import { Carousel } from "antd";

function PageLayout() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const carouselContent = [
    {
      title: "Elevate Your Email Reach Effortlessly",
      content:
        "Unleash the power of bulk communication with our advanced mailer application. Seamlessly send messages to a multitude of recipients, ensuring your message reaches far and wide without a hitch.",
    },
    {
      title: "Unleash the Potential of Mass Messaging",
      content:
        "Break barriers in communication using our cutting-edge mailer app. Share messages with numerous recipients, expanding your reach and making an impact like never before.",
    },
    {
      title: "Dynamic Templates, Impactful Emails.",
      content:
        "Elevate your messages with customizable templates that captivate, ensuring your emails stand out in every inbox.",
    },
  ];

  return (
    <>
      <div className="bluediv">
        <div className="bluelogo">
          <img src={bulkmailerlogo} className="bluelogoimg" />
          <div className="titlelogotext">
            <p className="bluelogotext">Bulk</p>
            <p className="bluelogotext2">Mailer</p>
          </div>
        </div>
        <div className="bluetext">
          <Carousel afterChange={onChange} autoplay>
            {carouselContent?.map((item) => (
              <div>
                <h2>{item?.title}</h2>
                <p>{item?.content}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <img src={bulkmailerlogo} className="bluedivimg" />
      </div>
    </>
  );
}

export default PageLayout;
