import React from 'react'

import { styled } from "styled-components";
import ProjectCard from './ProjectCard';
import { projectArr } from "./miniprojectdetails";

const Miniprojects = () => {
    const proArr = projectArr;
  return (
    <div id="projects">
      <DIV>
        <h1>
          <span id="pro1">Mini</span> <span id="pro2">Projects</span>
        </h1>
        <div className="proArr">
          {proArr.map((el) => (
            <ProjectCard key={el.id} {...el} />
          ))}
        </div>
      </DIV>
    </div>
  )
}

export default Miniprojects;


const DIV = styled.div`
  background-color: rgb(15, 22, 36);
  padding-top: 40px;
  padding-bottom: 80px;
  h1 {
    margin-top: 40px;
  }
  #pro1 {
    color: white;
  }

  #pro2 {
    color: #04aa6d;
  }

  .proArr {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 80px;
    width:80%;
    margin:auto;
    align-content: start;
  }

  @media only screen and (max-width: 768px) and (min-width: 500px) {
    .proArr {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }

  @media only screen and (max-width: 500px) {
    .proArr {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
`;

