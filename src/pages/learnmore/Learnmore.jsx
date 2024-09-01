import React from "react";
import CommonPages from "../commonPages/CommonPages";
import aboutImg from "../../assets/images/aboutus.png"; 
// Use another Image

const LearnMore = () => {
  return (
    <>
      <CommonPages
        title="Information"
        subtitle="MoreOver"
        description1="At Gamer Gaun, we specialize in offering the best gaming accessories to elevate your gaming experience. Whether you're a casual player or a hardcore gamer, we have everything you need to stay ahead in the game."
        description2="From top-quality headphones and mechanical keyboards to precision mice and smooth mousepads, our products are selected to meet the demands of gamers who settle for nothing but the best."
        buttonText="Contact Us"
        visit="/more-info"
        imageAbout={aboutImg}
        // use another image
      />
    </>
  );
};

export default LearnMore;