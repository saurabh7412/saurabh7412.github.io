import React from 'react';
import { skillArr } from './SkillDetail';
import SkillCard from './SkillCard';
import styled from 'styled-components';

const SkillSection = () => {
  return (
    <div id="skills">
      <DIV className="div1">
        <h1>
          <span id="sp1">My </span>
          <span id="sp2">Technical </span>
          <span id="sp1">Skills</span>
        </h1>

        <div className="grid-container">
          {/* Frontend Skills */}
          <div className="skill-category">
            <h2>Frontend</h2>
            <div className="div2">
              {skillArr.frontend.map((el) => (
                <SkillCard key={el.id} {...el} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skill-category">
            <h2>Backend</h2>
            <div className="div2">
              {skillArr.backend.map((el) => (
                <SkillCard key={el.id} {...el} />
              ))}
            </div>
          </div>

          {/* Language Skills */}
          <div className="skill-category">
            <h2>Languages</h2>
            <div className="div2">
              {skillArr.language.map((el) => (
                <SkillCard key={el.id} {...el} />
              ))}
            </div>
          </div>

          {/* AI Skills */}
          <div className="skill-category">
            <h2>AI</h2>
            <div className="div2">
              {skillArr.AI.map((el) => (
                <SkillCard key={el.id} {...el} />
              ))}
            </div>
          </div>
        </div>
      </DIV>
    </div>
  );
};

export default SkillSection;

const DIV = styled.div`
  h1 {
    padding-bottom: 40px;
    text-align: center;
  }

  #sp1 {
    color: white;
  }

  #sp2 {
    color: #04aa6d;
  }

  padding-top: 40px;
  padding-bottom: 80px;
  background-color: rgb(15, 22, 36);

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    width: 70%;
    margin: auto;
  }

  .skill-category {
    text-align: center;
    background-color: #1e2a3a;
    padding: 20px;
    border-radius: 8px;
  }

  .skill-category h2 {
    color: #04aa6d;
    margin-bottom: 20px;
  }

  .div2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  /* Medium screens */
  @media only screen and (max-width: 768px) and (min-width: 500px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
    .div2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Small screens */
  @media only screen and (max-width: 500px) {
    .grid-container {
      grid-template-columns: repeat(1, 1fr);
    }
    .div2 {
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
    }
  }
`;
