import React from "react";
import { styled } from "styled-components";
import github from "../images/github.png";
import video from "../images/video.png";
import netlify from "../images/view.png";
import { ViewIcon } from "@chakra-ui/icons";
import { Icon, Img } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const breakpoints = {
  mobile: "600px",
  tablet: "900px",
  large: "1200px",
};

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
  myrole,
}) => {
  const isMobile = window.innerWidth <= parseInt(breakpoints.mobile);
  const isTablet = window.innerWidth <= parseInt(breakpoints.tablet);

  console.log("isMobile", isMobile);

  return (
    <div className="project-card">



      {isMobile ? (
        // Render for mobile

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

        {video.length > 0 &&
        <a href={presentation_link} target="_blank"><img
          title="Presentation Video"
          className="img2"
          src={video}
          alt="presentation"
        /></a>
        }

        <a href={deploy_link} class="project-deployed-link" target="_blank"><img
          title="Netlify Link"
          className="img2"
          src={netlify}
          alt="netlify"
        /></a>
      </div>
    </DIV>




      ) : (
        // Render for tablet and large screens
        <MAINDIV>
        <div className="div1">
          <img src={image} alt="project image" className="img1" />
        </div>

        <div className="div2">
          <div>
            <h2 className="project-title">
              <span className="greencolor">{title}</span>
            </h2>
            {myrole && (
              <h3>
                <span className="greencolor">My Role :</span> {myrole}
              </h3>
            )}
            <p>
              <span className="project-description">{desc}</span>
            </p>

            <p>
              <span className="greencolor">Type of Project</span> :{" "}
              <span>{project_type}</span> |{" "}
              <span className="greencolor">Duration </span>:{" "}
              <span>{duration} days</span>
            </p>
            <h4 className="project-tech-stack">
              <span className="greencolor">TECH STACK</span> :{" "}
              <span>{tech_stack}</span>
            </h4>

            <div className="imgdiv">
              <a href={github_link} class="project-github-link" target="_blank">
                <img
                  title="Github"
                  className="img2"
                  src={github}
                  alt="github"
                />
              </a>

              {presentation_link && (
                <a href={presentation_link} target="_blank">
                  <img
                    title="Presentation Video"
                    className="img2"
                    src={video}
                    alt="presentation"
                  />
                </a>
              )}

              <a
                href={deploy_link}
                class="project-deployed-link"
                target="_blank"
              >
                <img
                  title="Netlify Link"
                  className="img2"
                  src={netlify}
                  alt="netlify"
                />
              </a>
            </div>
          </div>
        </div>
      </MAINDIV>

      )}



    </div>
  );
};

export default ProjectCard;

const MAINDIV = styled.div`
  color: white;
  border: 1px solid #04aa6d;
  box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 15px;
  border-radius: 20px;
  padding: 20px 20px;
  background-color: rgb(26, 32, 44);
  p,
  h3,
  h4 {
    text-align: left;
  }
  img {
    width: 100%;
  }
  .greencolor {
    color: #04aa6d;
  }

  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;

  .div1,
  .div2 {
    width: 50%;
    padding: 20px;
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
    scale: 1.1;
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

  @media (max-width: ${breakpoints.tablet}) {
    /* Styles for tablet screens */
    /* You can override the styles for tablet screens here */
  }

  @media (max-width: ${breakpoints.mobile}) {
    /* Styles for mobile screens */
    /* You can override the styles for mobile screens here */

    /* Example: Make the layout full-width for mobile */
    width: 100%;
    padding: 10px;
  }
`;

const DIV = styled.div`
  color: white;
  border: 1px solid #04aa6d;
  box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 15px;
  border-radius: 20px;
  margin: 20px;
  padding: 40px;
  background-color: rgb(26, 32, 44);
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
    scale: 1.1;
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
