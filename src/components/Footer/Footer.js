import React from "react";

import github from "./github.png";
import linkedIn from "./linkedIn.png";
import home from "./home.png";

class Footer extends React.Component {
  logos = [
    {
      className: "home",
      key: 1,
      src: home,
      alt: "home",
      link: "https://jkmagnussen.com/",
    },
    {
      className: "linkedIn",
      key: 2,
      src: linkedIn,
      alt: "linkedin",
      link: "https://linkedin.com/in/joseph-magnussen/",
    },
    {
      className: "github",
      key: 3,
      src: github,
      alt: "github",
      link: "https://github.com/jkmagnussen/ravenous",
    },
  ];

  render() {
    const X = this.logos.map((item) => {
      return (
        <a key={item.alt} href={item.link}>
          <img
          key={item.alt}
            className={item.className}
            src={item.src}
            alt={item.alt}
            style={{
              width: 58,
              height: 58,
              padding: 20,
            }}
          />
        </a>
      );
    });

    return <div className="footer" 
    style={{ 
      textAlign: "center"
    }} 
    >{X}</div>;
  }
}

export default Footer;
