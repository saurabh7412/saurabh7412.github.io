import React from "react";
import github from "../images/github.png";
import { styled } from "styled-components";
import GitHubCalendar from "react-github-calendar";


const GithubSection = () => {

    
  return (
    <DIV>
      {/* <div id="github1"></div> */}
      <div className="div1">
        <h1 id="github1">
          <span id="sp1">GitHub</span> <span id="sp2">OverView</span>
        </h1>
        <a
          title="Github Profile"
          href="https://github.com/saurabh7412"
          target="_blank"
        >
          <img id="github" src={github} alt="github" />
        </a>
      </div>

      <div className="div2">
        <img src="https://github-readme-streak-stats.herokuapp.com?user=saurabh7412&theme=gruvbox&card_width=501)](https://git.io/streak-stats" id="github-streak-stats"/>

        <img src="https://github-readme-stats.vercel.app/api?username=saurabh7412&show_icons=true&theme=radical" id="github-stats-card"/>

        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=saurabh7412&theme=tokyonight"  id="github-top-langs" />

        <GitHubCalendar username="saurabh7412" class="react-activity-calendar" />

      </div>
      
      <div className="div3">

        <div className="div3-1">
          <h1><span id="sp1">1200+ </span><span id="sp2">Hours</span></h1>
          <p id="sp2">Coding</p>
        </div>

        <div className="div3-1">
          <h1><span id="sp1">10+ </span><span id="sp2">Projects</span></h1>
          <p id="sp2">Done</p>
        </div>

        <div className="div3-1">
          <h1><span id="sp1">600+ </span><span id="sp2">DSA</span></h1>
          <p id="sp2">Solved (OJ)</p>
        </div>

        <div className="div3-1">
          <h1><span id="sp1">700+ </span><span id="sp2">Hours</span></h1>
          <p id="sp2">DSA</p>
        </div>

      </div>
    </DIV>
  );
};

export default GithubSection;

const DIV = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  .div1 {
    display: flex;
    width: 40%;
    margin-left : 530px;
    justify-content : space-around;
    padding: 10px;
    align-items: center;
  }
  .div2{
    width : 70%;
    display: grid;
    margin-left : 240px;
    grid-template-columns : repeat(2,1fr);
    gap: 45px;
    margin-bottom : 40px;
    margin-top : 30px;
  }
  a {
    ${"" /* border : 1px solid red; */}
    margin-left : -220px;
  }

  #sp1 {
    color: #04aa6d;
  }

  #sp2 {
    color: white;
  }

  #github {
    width: 15%;
    background-color: #04aa6d;
    border-radius: 50%;
    padding: 3px;
  }
  #github:hover {
    scale: 1.2;
    transition: 500ms;
  }

  .div3{
    width : 70%;
    display : flex;
    margin : auto;
    justify-content : space-around;
  }
  .div3-1 {
    border : 1px solid #04aa6d;
    padding : 10px 30px;
    border-radius : 20px;
    background-color: rgb(15, 22, 36);
    box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 15px;
  }
  .div3-1:hover {
    scale : 1.2;
    transition : 500ms;
  }

  .react-activity-calendar{
    border : 1px solid white;
    border-radius : 6px;
    color : white;
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    padding-top : 70px;
    padding-left : 25px;
    padding-right : 25px;
    margin-left : -90px;
  }




  /* Add styles for medium screens */
  @media only screen and (max-width: 768px) and (min-width: 500px) {
    .div1 {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      flex-direction: column;
      align-items: center;
    }
    a {
      margin-left: 0;
    }
    #github {
      margin-top: 20px;
    }
    .div2 {
      grid-template-columns: 1fr;
    }
    .react-activity-calendar {
      margin-left: 0;
    }
    .div3 {
      flex-wrap: wrap;
    }
  }

  /* Add styles for small screens */
  @media only screen and (max-width: 500px) {
    .div1 {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    .div2 {
      grid-template-columns: 1fr;
      gap: 20px;
      margin-left: 40px;
      margin-right: 40px;
    }
    #github-streak-stats {
      width: 100%;
    }
    #github-stats-card {
      width: 100%;
    }
    #github-top-langs {
      width: 100%;
    }
    .react-activity-calendar {
      margin-left: 0;
      padding-top: 30px;
    }
    .div3 {
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      margin-bottom: 30px;
      flex-direction: column;
    }
    .div3-1 {
      width: 80%;
      margin-bottom: 20px;
    }
  }

`;
