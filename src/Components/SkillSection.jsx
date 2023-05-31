import React from 'react'
import { skillArr } from './SkillDetail';
import SkillCard from './SkillCard';
import { styled } from 'styled-components';

const SkillSection = () => {
  // console.log(skillArr);

  return (
    <DIV className='div1'>
      <h1><span id='sp1'>My </span><span id='sp2'>Technical </span><span id='sp1'>Skills</span>
      </h1>

      <div className='div2'>
        {
          skillArr.map((el)=>(
            <SkillCard key={el.id} {...el}/>
          ))
        }
      </div>
    </DIV>
  )
}

export default SkillSection


const DIV = styled.div`

h1{
  padding-bottom : 40px;
}

#sp1{
  color : white ;
}

#sp2{
  color: #04aa6d;
}

padding-top : 40px;
padding-bottom : 80px;
background-color: rgb(15, 22, 36);
.div2{
  width : 70%;
  margin : auto;
  display : grid ;
  grid-template-columns : repeat(5,1fr);
  gap : 25px;
}

`;