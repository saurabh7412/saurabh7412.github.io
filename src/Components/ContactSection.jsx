import React, { useState } from "react";
import { styled } from "styled-components";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import mobile from "../images/mobile.png";
import emailme from "../images/emailme.svg";


const obj = {
  name : "",
  email : "",
  phone : "",
  message : ""
}

const ContactSection = () => {
  const [input , setInput] = useState(obj);

  const handleChange =(e)=>{

    const {name , value} = e.target;

    setInput((p)=>{
     return {...p,  [name] : value}
    })

  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(input);
  }

  return (
    <div id="contact">
      <DIV id="div1">
        <div id="contactheading">
          <h1>
            <span id="sp1">Contact </span>
            <span id="sp2">Me</span>
          </h1>
        </div>

        <div id="div2">
          <div id="div2-1">
            <img src={emailme} />
          </div>

          <div id="div2-2">
            <div id="btndiv">
              <a
                href="https://www.linkedin.com/in/saurabh7412/"
                target="_blank"
                id="contact-linkedin"
              >
                <button id="btn1" title="LinkedIn Profile">
                  <img src={linkedin} />
                  Linkedin
                </button>
              </a>

              <a
                href="https://github.com/saurabh7412"
                target="_blank"
                id="contact-github"
              >
                <button id="btn2" title="Github">
                  <img src={github} />
                  Github
                </button>
              </a>

              <a
                href="mailto:saurabh7412@gmail.com"
                target="_blank"
                id="contact-email"
              >
                <button id="btn3" title="Email">
                  <img src={email} />
                  Email
                </button>
              </a>

              <a id="contact-phone">
                <button id="btn4" title="Mobile">
                  <img src={mobile} />
                  Mob
                </button>
              </a>
            </div>

            <form id="formdiv" onSubmit={handleSubmit}>
              <label>
                Get In <span>Touch</span>
              </label>
              <div>
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
              </div>

              <div>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
              </div>

              <div>
                <input type="number" name="phone" placeholder="Phone" onChange={handleChange} />
              </div>
              <div>
                <textarea placeholder="Your Message" name="message" onChange={handleChange} />
              </div>

              <div>
                <button id="submit">Submit</button>
                <button id="clear">Clear</button>
              </div>
            </form>


          </div>
        </div>

        <div id="div3">
          <p>Design and build by Saurabh Bhatt, 2023</p>
        </div>
      </DIV>
    </div>
  );
};

export default ContactSection;





const DIV = styled.div`
  width: 80%;

  #contactheading {
    padding-top: 40px;
    padding-bottom: 40px;
    margin-left: 290px;
    font-size: 20px;
  }

  #sp1 {
    color: #04aa6d;
  }

  #sp2 {
    color: white;
  }

  #div2 {
    width: 122%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }

  #div2-1 {
    width: 50%;
  }

  #div2-1 img {
    width: 90%;
  }

  #div2-2 {
    width: 50%;
  }

  #btndiv {
    width: 85%;
    display: flex;
    padding-bottom: 40px;
    margin: auto;
  }

  #btndiv a {
    text-decoration: none;
  }

  #btndiv img {
    width: 25%;
  }

  #btn1 img {
    width: 20%;
  }

  #btn1,
  #btn2,
  #btn3,
  #btn4 {
    font-size: 22px;
    padding: 5px 45px 5px 45px;
    color: white;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 48%;
  }

  #btn1:hover,
  #btn2:hover,
  #btn3:hover,
  #btn4:hover {
    background-color: white;
    color: black;
    scale: 1.1;
    transition: 500ms;
  }

  #btn1 {
    background-color: #0a66c2;
  }

  #btn2 {
    background-color: #424242;
    margin-left: 2%;
  }

  #btn3 {
    background-color: #f44336;
  }

  #btn4 {
    background-color: #04aa6d;
    margin-left: 2%;
  }

  #formdiv span {
    color: #04aa6d;
  }

  #formdiv label {
    color: white;
    margin-left: -510px;
    font-size: 22px;
  }

  #formdiv input,
  textarea {
    width: 80%;
    height: 30px;
    margin-bottom: 20px;
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 20px;
    color: white;
    border-radius: 10px;
    box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 5px;
    background-color: rgb(15, 22, 36);
  }

  textarea {
    height: 80px;
  }

  #submit,
  #clear {
    width: 48%;
    margin: 20px 20px 20px 20px;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    color: white;
  }

  #submit {
    background-color: #04aa6d;
  }

  #clear {
    background-color: rgb(15, 22, 36);
    margin-left: 2%;
  }

  /* Add styles for medium screens */
  @media only screen and (max-width: 768px) and (min-width: 500px) {
    #div2 {
      flex-direction: column;
    }

    #div2-1 {
      width: 100%;
    }

    #div2-2 {
      width: 100%;
      margin-top: 20px;
    }

    #btndiv {
      flex-wrap: wrap;
      justify-content: center;
    }

    #btndiv a {
      margin: 5px;
    }
  }

  /* Add styles for small screens */
  @media only screen and (max-width: 500px) {
    #contactheading {
      font-size: 18px;
    }

    #div2 {
      flex-direction: column;
    }

    #div2-1 {
      width: 100%;
    }

    #div2-2 {
      width: 100%;
      margin-top: 20px;
    }

    #btndiv {
      flex-wrap: wrap;
      justify-content: center;
    }

    #btndiv a {
      margin: 5px;
    }

    #formdiv label {
      font-size: 18px;
    }

    #formdiv input,
    textarea {
      font-size: 18px;
    }

    #submit,
    #clear {
      font-size: 18px;
    }
  }
`;

















// const DIV = styled.div`
//   width: 80%;
//   #contactheading {
//     padding-top: 40px;
//     padding-bottom: 40px;
//     margin-left: 290px;
//     font-size: 20px;
//   }

//   #sp1 {
//     color: #04aa6d;
//   }

//   #sp2 {
//     color: white;
//   }

//   #div2 {
//     ${"" /* border: 2px solid red; */}
//     width: 122%;
//     display: flex;
//     margin: auto;
//     justify-content: space-between;
//     align-items: center;
//   }
//   #div2-1 {
//     width: 50%;
//     ${"" /* border: 1px solid blue; */}
//   }
//   #div2-1 img {
//     width: 100%;
//   }
//   #div2-2 {
//     width: 50%;
//     ${"" /* border: 1px solid green;  */}
//     ${"" /* height : 300px; */}
//   }

//   #btndiv {
//     ${"" /* border: 1px solid red;  */}
//     width: 85%;
//     display: flex;
//     padding-bottom: 40px;
//     margin: auto;
//   }
//   #btndiv a {
//     text-decoration: none;
//   }
//   #btndiv img {
//     width: 25%;
//   }
//   #btn1 img {
//     width: 20%;
//   }

//   #btn1 {
//     font-size: 22px;
//     padding: 5px 5px 5px 5px;
//     background-color: #0a66c2;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//   }
//   #btn1:hover {
//     background-color: white;
//     color: black;
//     scale: 1.1;
//     transition: 500ms;
//   }
//   #btn2 {
//     font-size: 22px;
//     padding: 5px 5px 5px 5px;
//     background-color: #424242;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     margin-left: 30px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//   }
//   #btn2:hover {
//     background-color: white;
//     color: black;
//     scale: 1.1;
//     transition: 500ms;
//   }
//   #btn3 {
//     font-size: 22px;
//     padding: 5px 5px 5px 5px;
//     background-color: #f44336;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     margin-left: 30px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//   }
//   #btn3:hover {
//     background-color: white;
//     color: black;
//     scale: 1.1;
//     transition: 500ms;
//   }
//   #btn4 {
//     font-size: 22px;
//     padding: 5px 5px 5px 5px;
//     background-color: #04aa6d;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     margin-left: 30px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//   }
//   #btn4:hover {
//     background-color: white;
//     color: black;
//     scale: 1.1;
//     transition: 500ms;
//   }

//   #formdiv span {
//     color: #04aa6d;
//   }
//   #formdiv label {
//     color: white;
//     margin-left: -510px;
//     font-size: 22px;
//   }
//   #formdiv input,
//   textarea {
//     width: 80%;
//     height: 30px;
//     margin-bottom: 20px;
//     margin-top: 10px;
//     padding: 10px 20px;
//     font-size: 20px;
//     color: white;
//     border-radius: 10px;
//     box-shadow: rgba(150, 150, 150, 0.45) 0px 5px 5px;
//     background-color: rgb(15, 22, 36);
//   }
//   textarea {
//     height: 80px;
//   }
//   #submit {
//     width: 50%;
//     margin: 20px 20px 20px 20px;
//     padding: 10px 20px;
//     border-radius: 10px;
//     border: none;
//     font-size: 20px;
//     background-color: #04aa6d;
//     color: white;
//   }
//   #clear {
//     width: 30%;
//     margin: 20px 20px 20px 20px;
//     padding: 10px 20px;
//     border-radius: 10px;
//     border: none;
//     font-size: 20px;
//     background-color: rgb(15, 22, 36);
//     color: white;
//   }
// `;
