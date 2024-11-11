import React, { useState } from "react";
import styled from "styled-components";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import mobile from "../images/mobile.png";
import emailme from "../images/emailme.svg";

const obj = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

const ContactSection = () => {
  const [input, setInput] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((p) => {
      return { ...p, [name]: value };
    });
  };

  const handleClear = ()=>{
    setInput(obj);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xbljydvl', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(input)
     }).then((response) => {
       if (response.ok) {
         alert('Message sent successfully!');
         setInput({ name: '', email: '', phone: '', message: '' });
       } else {
         alert('Failed to send message.');
       }
     }).catch((error) => {
       console.error('There was an error:', error);
     });
  };


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
            <img src={emailme} alt="Contact Illustration" />
          </div>

          <div id="div2-2">
            <div id="btndiv">
              <a
                href="https://www.linkedin.com/in/saurabh7412/"
                target="_blank"
                id="contact-linkedin"
                rel="noopener noreferrer"
              >
                <button id="btn1" title="LinkedIn Profile">
                  <img src={linkedin} alt="LinkedIn" />
                  Linkedin
                </button>
              </a>

              <a
                href="https://github.com/saurabh7412"
                target="_blank"
                id="contact-github"
                rel="noopener noreferrer"
              >
                <button id="btn2" title="Github">
                  <img src={github} alt="GitHub" />
                  Github
                </button>
              </a>

              <a
                href="mailto:saurabh7412@gmail.com"
                target="_blank"
                id="contact-email"
                rel="noopener noreferrer"
              >
                <button id="btn3" title="Email">
                  <img src={email} alt="Email" />
                  Email
                </button>
              </a>

              <a id="contact-phone">
                <button id="btn4" title="Mobile">
                  <img src={mobile} alt="Mobile" />
                  Mob
                </button>
              </a>
            </div>

            <form id="formdiv" onSubmit={handleSubmit}>
              <label>
                Get In <span>Touch</span>
              </label>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  value={input?.name}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={input?.email}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  value={input?.phone}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  onChange={handleChange}
                  value={input?.message}
                />
              </div>
              <div>
                <button type="submit" id="submit">
                  Submit
                </button>
                <button type="button" id="clear" onClick={handleClear}>
                  Clear
                </button>
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
  max-width: 1200px; /* Restrict max width to avoid overflow */
  margin: auto;
  overflow: hidden; /* Ensure no overflow beyond container */

  #contactheading {
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 20px;
    text-align: center;
  }

  #sp1 {
    color: #04aa6d;
  }

  #sp2 {
    color: white;
  }

  #div2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
    margin: auto;
  }

  #div2-1,
  #div2-2 {
    flex: 1 1 45%; /* Flexibility in layout */
    min-width: 300px; /* Minimum width for individual sections */
    padding: 10px; /* Add padding for inner spacing */
    box-sizing: border-box; /* Include padding in total width */
  }

  #div2-1 img {
    width: 100%;
    height: auto;
  }

  #btndiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    max-width: 600px;
  }

  #btndiv a {
    text-decoration: none;
    flex: 1 1 45%;
    margin: 10px;
  }

  #btn1,
  #btn2,
  #btn3,
  #btn4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }

  #btn1 img,
  #btn2 img,
  #btn3 img,
  #btn4 img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  #btn1 {
    background-color: #0a66c2;
    color: white;
  }

  #btn2 {
    background-color: #424242;
    color: white;
  }

  #btn3 {
    background-color: #f44336;
    color: white;
  }

  #btn4 {
    background-color: #04aa6d;
    color: white;
  }

  #btn1:hover,
  #btn2:hover,
  #btn3:hover,
  #btn4:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
    transition: 300ms;
  }

  /* Keeping form styles as provided originally */

  #formdiv {
    padding-top: 50px;
  }

  #formdiv span {
    color: #04aa6d;
  }

  #formdiv label {
    color: white;
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
    margin: 20px;
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
  }

  /* Responsive Design for buttons */
  @media only screen and (max-width: 768px) {
    #btndiv {
      flex-direction: column;
      align-items: stretch;
    }

    #div2 {
      flex-direction: column;
    }

    #div2-1,
    #div2-2 {
      width: 100%;
    }
  }
`;

