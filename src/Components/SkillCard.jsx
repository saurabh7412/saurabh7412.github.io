import React from "react";
import { styled } from "styled-components";

const SkillCard = ({ id, image, title }) => {
  return (

    <div class="skills-card">
    <DIV >
    <div id="x">
      <img src={image} class="skills-card-img" />
      <h2 class="skills-card-name">
        {title}
      </h2>
      </div>
    </DIV>
    </div>
  );
};

export default SkillCard;

const DIV = styled.div`
#x{
border : 1px solid #04aa6d;
padding : 10px 30px;
border-radius : 20px;
box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 15px;
color : white;
}
img{
    width: 70%;
}
#x:hover {
    scale : 1.1;
    transition : 500ms;

}

`;

