import React, { useState } from "react";
import left from "../assets/componets-bg/left.png";
import right from "../assets/componets-bg/right.png";

export default function NanoGr() {
  const images = [
    {
      src: left,
      link: "https://youtu.be/zvqRX10mjnI?feature=shared",
      title: "Ultimate Paint Protection Guide",
    },
    {
      src: right,
      link: "https://youtu.be/ySdni52z8Qk?feature=shared",
      title: "Bikers - Why You Need It",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setFade(false);
      }, 300);
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    minHeight: "500px",
  };

  const leftStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    height: "350px",
    overflow: "hidden",
  };
const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "opacity 0.3s ease-in-out",
  opacity: fade ? 0 : 1,
};

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    gap: "8px",
  };

  const dotStyle = (isActive) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: isActive ? "red" : "white",
    cursor: "pointer",
  });

  const rightStyle = {
    flex: 1,
    paddingLeft: "30px",
  };

//   const headingStyle = {
//     fontSize: "42px",
//     fontWeight: 600,
//     marginBottom: "16px",
//   };
const headingStyle = {
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: "72px",
  fontWeight: 400,
  fontStyle: "normal",
  lineHeight: "100%",
  letterSpacing: "0%",
  textTransform: "uppercase",
  marginBottom: "16px",
};


  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "24px",
  };

  const buttonStyle = {
  backgroundColor: "red",
  color: "#fff",
  padding: "12px 24px",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  width: "250px",
  textAlign: "center", 
  fontWeight: "560", 
};


  return (
    <div style={containerStyle}>
      {/* Left Side - Image Carousel */}
      <div style={leftStyle}>
        <div style={imageContainerStyle}>
          <a
            href={images[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={imageStyle}
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
            />
          </a>
        </div>
        <div style={dotsContainerStyle}>
          {images.map((_, index) => (
            <div
              key={index}
              style={dotStyle(currentIndex === index)}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side - Text & Button */}
      <div style={rightStyle}>
        <h1 style={headingStyle}>ARTDESHINE NANO GRAPHENE +</h1>
        <p style={paragraphStyle}>
          NGC+ (Nano Graphene Coating) is the most advanced protective coating
          yet. <br /> Built for extreme durability, faster curing, and a deeper,
          glossier finish. <br /> Its enhanced hydrophobic and self-cleaning
          properties mean your car stays cleaner for longer, with less effort.
          <br /> Designed to resist the harshest elements, NGC+ not only protects
          your paint, but <br />
          it also elevates its look and feel. For those who demand the best,
          nothing <br />else comes close.
        </p>
        <button style={buttonStyle}>View More</button>
      </div>
    </div>
  );
}
