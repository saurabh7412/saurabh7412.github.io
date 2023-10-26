// import React from "react";
// import { styled } from "styled-components";
// import { projectArr } from "./projectdetails";
// import ProjectCard from "./ProjectCard";

// const ProjectSection = () => {
//   const proArr = projectArr;
//   // console.log(proArr);

//   return (
//     <div id="projects">
//     <DIV>
//       <h1>
//         <span id="pro1">My</span> <span id="pro2">Projects</span>
//       </h1>
//       <div className="proArr">
//         {
//           proArr.map((el)=>(
//             <ProjectCard key={el.id} {...el}/>
//           ))
//         }
//       </div>
//     </DIV>
//     </div>
//   );
// };

// export default ProjectSection;

// const DIV = styled.div`
// background-color: rgb(15, 22, 36);
// padding-top : 40px;
// padding-bottom : 40px;
// h1 {
//     margin-top: 40px;
//   }
// #pro1{
//   color : white;
// }

// #pro2{
//   color: #04aa6d;
// }

// .proArr {
//   display : grid;
//   width: 85%;
//   margin : auto;
//   grid-template-columns : repeat(2,1fr);
//   gap: 20px;
// }



// @media only screen and (max-width: 768px) and (min-width: 500px) {
//   .proArr {
//   display : grid;
//   width: 85%;
//   margin : auto;
//   grid-template-columns : repeat(2,1fr);
//   gap: 20px;
// }
//   }

//   /* Add styles for small screens */
//   @media only screen and (max-width: 500px) {
//     .proArr {
//   display : grid;
//   width: 85%;
//   margin : auto;
//   grid-template-columns : repeat(1,1fr);
//   gap: 20px;
// }
//   }



// `;



import React from "react";
import { styled } from "styled-components";
import { projectArr } from "./projectdetails";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const proArr = projectArr;

  return (
    <div id="projects">
      <DIV>
        <h1>
          <span id="pro1">My</span> <span id="pro2">Projects</span>
        </h1>
        <div className="proArr">
          {proArr.map((el) => (
            <ProjectCard key={el.id} {...el} />
          ))}
        </div>
      </DIV>
    </div>
  );
};

export default ProjectSection;

const DIV = styled.div`
  background-color: rgb(15, 22, 36);
  padding-top: 40px;
  padding-bottom: 40px;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width:90%;
    margin:auto;
    align-content: start;
  }

  .project-card {
    height: 900px; /* Set a fixed height for each card */
  }

  @media only screen and (max-width: 768px) and (min-width: 500px) {
    .proArr {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
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

