import React from "react";
import github from "../images/github.png";
import styled from "styled-components";
import GitHubCalendar from "react-github-calendar";

const GithubSection = () => {
  return (
    <DIV>
      <div className="div1">
        <h1 id="github1">
          <span id="sp1">GitHub</span> <span id="sp2">Overview</span>
        </h1>
        <a
          title="Github Profile"
          href="https://github.com/saurabh7412"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="github" src={github} alt="Github" />
        </a>
      </div>

      <div className="div2">
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=saurabh7412&theme=gruvbox&card_width=501)](https://git.io/streak-stats"
          id="github-streak-stats"
        />
        <img
          src="https://github-readme-stats.vercel.app/api?username=saurabh7412&show_icons=true&theme=radical"
          id="github-stats-card"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=saurabh7412&theme=tokyonight"
          id="github-top-langs"
        />
        <GitHubCalendar username="saurabh7412" className="react-activity-calendar" />
      </div>

      <div className="div3">
        <div className="div3-1">
          <h1>
            <span id="sp1">1200+ </span><span id="sp2">Hours</span>
          </h1>
          <p id="sp2">Coding</p>
        </div>

        <div className="div3-1">
          <h1>
            <span id="sp1">10+ </span><span id="sp2">Projects</span>
          </h1>
          <p id="sp2">Done</p>
        </div>

        <div className="div3-1">
          <h1>
            <span id="sp1">600+ </span><span id="sp2">DSA</span>
          </h1>
          <p id="sp2">Solved (OJ)</p>
        </div>

        <div className="div3-1">
          <h1>
            <span id="sp1">700+ </span><span id="sp2">Hours</span>
          </h1>
          <p id="sp2">DSA</p>
        </div>
      </div>
    </DIV>
  );
};

export default GithubSection;

const DIV = styled.div`
  margin: 40px auto;
  width: 80%;
  max-width: 1200px;

  .div1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
  }

  #sp1 {
    color: #04aa6d;
  }

  #sp2 {
    color: white;
  }

  #github {
    width: 50px;
    background-color: #04aa6d;
    border-radius: 50%;
    padding: 3px;
    transition: scale 500ms;
  }

  #github:hover {
    transform: scale(1.2);
  }

  .div2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-items: center;
  }

  #github-streak-stats,
  #github-stats-card,
  #github-top-langs {
    width: 100%;
    max-width: 100%;
  }

  .react-activity-calendar {
    border: 1px solid white;
    border-radius: 6px;
    color: white;
    padding: 10px;
    width: 100%;
  }

  .div3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .div3-1 {
    border: 1px solid #04aa6d;
    padding: 10px 30px;
    border-radius: 20px;
    background-color: rgb(15, 22, 36);
    box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 15px;
    margin-bottom: 20px;
    transition: transform 500ms;
  }

  .div3-1:hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    .div2 {
      grid-template-columns: 1fr;
    }
    .div1, .div2, .div3 {
      width: 100%;
    }
  }

  @media only screen and (max-width: 500px) {
    .div1, .div2, .div3 {
      flex-direction: column;
      align-items: center;
    }
    .div3-1 {
      width: 80%;
    }
  }
`;
