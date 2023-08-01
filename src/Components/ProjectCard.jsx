import React from "react";
import { styled } from "styled-components";
import github from "../images/github.png";
import video from "../images/video.png";
import netlify from "../images/view.png";
import { ViewIcon } from "@chakra-ui/icons";
import { Icon, Img } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({
  id,
  image,
  title,
  desc,
  project_type,
  duration,
  tech_stack,
  deploy_link,
  github_link,
  presentation_link,
  myrole
}) => {

    // const navigate = useNavigate();

    // const handleClick=(github_link)=>{
    //     navigate(github_link);
    // }
  return (
    <div className="project-card">

    <DIV >
      <img className="img1" src={image} alt="product" />
      <h2 className="project-title" >
        <span className="greencolor">{title}</span>
      </h2>
        {myrole && <h3><span className="greencolor">My Role :</span> {myrole}</h3>}
      <p>
        <span className="project-description">{desc}</span>
      </p>
      <p>
        <span className="greencolor">Type of Project</span> :{" "}
        <span>{project_type}</span> | <span className="greencolor">Duration </span>: <span>{duration} days</span>
      </p>
      <h4 className="project-tech-stack">
        <span  className="greencolor">TECH STACK</span> : <span>{tech_stack}</span>
      </h4>
      <div className="imgdiv">
        <a  href={github_link} class="project-github-link"  target="_blank"><img title="Github" className="img2"  src={github} alt="github" /></a>
        <a href={presentation_link} target="_blank"><img
          title="Presentation Video"
          className="img2"
          src={video}
          alt="presentation"
        /></a>
        <a href={deploy_link} class="project-deployed-link" target="_blank"><img
          title="Netlify Link"
          className="img2"
          src={netlify}
          alt="netlify"
        /></a>
      </div>
    </DIV>
    </div>
  );
};

export default ProjectCard;

const DIV = styled.div`
  color: white;
  border : 1px solid #04aa6d ; 
  box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 15px;
  border-radius: 20px;
  margin: 20px;
  padding: 25px;
  background-color : rgb(26, 32, 44);
  p {
    text-align: center;
  }
  img {
    width: 100%;
  }
  .greencolor {
    color: #04aa6d;
  }

  .imgdiv {
    ${"" /* border : 1px solid red; */}
    display : flex;
    justify-content: space-around;
    align-items: center;
  }
  .img1 {
    border-radius: 20px;
  }
  .img1:hover {
    scale: 1.2;
    transition: 600ms;
  }

  .img2 {
    width: 24%;
    background-color: #04aa6d;
    border-radius: 50%;
    padding: 5px;
  }
  .img2:hover {
    scale: 1.3;
    transition: 500ms;
  }
`;
