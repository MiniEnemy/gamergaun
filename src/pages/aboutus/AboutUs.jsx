import React from "react";
import CommonPages from "../../pages/common/CommonPages";
import about2 from "../../assets/images/abut2.jpg";
import Moreabout from "../../pages/aboutus/Moreabout.jsx";

const AboutUs = () => {
  
    return (
      <>
        <CommonPages
          title="About"
          subtitle="GamerGaun"
          description1="At Gamer Gaun, we specialize in offering the best gaming accessories to elevate your gaming experience. Whether you're a casual player or a hardcore gamer, we have everything you need to stay ahead in the game."
          description2="From top-quality headphones and mechanical keyboards to precision mice and smooth mousepads, our products are selected to meet the demands of gamers who settle for nothing but the best."
          buttonText="Learn more"
          visit="/more-info"
          imageAbout={about2}
        />
        <Moreabout />
      </>
    );
  };

export default AboutUs;
