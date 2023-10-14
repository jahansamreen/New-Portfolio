import React from "react";
import image from "../images/cap_photo.jpeg";
import { AiOutlineRight } from "react-icons/ai";
import "./About.css";
import Skills from "./skills";
const About = ({ navbar: Navbar }) => {
  return (
    <>
      <div
        className="background"
        style={{
          backgroundColor: "#040404",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          opacity: "0.94",
        }}
      >
        <Navbar />
        <div
          className="content"
          style={{
            overflow: "auto",
            overflowX: "hidden",
            height: "100%",
            width: "100%",
            position: "relative",
            zIndex: "0",
          }}
        >
          {/* contain heading  */}
          <div
            className="data1"
            style={{ marginTop: "100px", paddingLeft: "8vw" }}
          >
            <h2
              className="heading2"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                padding: "0",
                lineHeight: "1px",
                margin: "0px 0px 0px 0vw",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#aaaaaa",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              About
              <style>
                {`
      .heading2::after {
        content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #20b2aa;
    margin: 4px 10px;
      }
    `}
              </style>
            </h2>
            <h1
              style={{
                fontSize: "33px",
                fontWeight: "800",
                textTransform: "uppercase",
                fontFamily: " sans-serif",
                color: "#fff",
              }}
            >
              LEARN MORE ABOUT ME
            </h1>
          </div>
          {/* contain image and content flexbox */}
          <div
            className="d1"
            style={{
              padding: "2vh 7vw 2vh 7vw",
              display: "flex",
            }}
          >
            <style>{`@media (min-width: 426px){
            .d1{
              flex-direction: row;
            }
          }
          @media (max-width: 892px){
            .d1{
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .data2{
              margin-top: 20px;
              margin-left: 30px
            }
          }
          `}</style>
            <div>
              <img
                className="me"
                src={image}
                style={{
                  width: "300px",
                  margin: "5px 5px 5px 10px",
                  boxShadow: "20px 20px 20px 20px rgba(0, 0, 0, 0.25)",
                }}
                alt="img1"
              ></img>
            </div>
            <div
              className="data2"
              style={{
                marginLeft: "20px",
                alignContent: "center",
                width: "100%",
                color: "#fff",
              }}
            >
              <h3
                style={{
                  color: "#20b2aa",
                  margin: "0px 0px 0px 0px",
                  fontWeight: "700",
                  fontSize: "26px",
                  fontFamily: "Share Tech Mono",
                  // eslint-disable-next-line
                  fontFamily: "monospace",
                }}
              >
                Front-end Developer
              </h3>
              <p
                style={{ fontStyle: "italic!important", marginBottom: "15px" }}
              >
                Hello, it's me Samreen. I am a highly enthusiastic and
                inquisitive individual with exceptional strengths in handling
                critical problem-solving activities and technical
                troubleshooting. Skilled in Front-end development technologies
                C, C++, with a strong understanding of Data Structure and
                Algorithms. I possess a strong ability and desire to learn about
                more new technologies and work on real time projects to further
                develop my efficiency as a software developer
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
                className="c2"
              >
                <div
                  className="col-lg-6"
                  style={{ padding: "0px 10px 0px 0px" }}
                >
                  <ul
                    style={{
                      color: "#fff",
                      marginBottom: "-16px",
                      marginTop: "10px",
                    }}
                  >
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#20b2aa" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Birthday:
                      </strong>
                      <span>14 February 2001</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#20b2aa" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Age:
                      </strong>
                      <span>22</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#20b2aa" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Email:
                      </strong>
                      <span>jahansamreen370@gmail.com</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#20b2aa" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        City:
                      </strong>
                      <span>Jabalpur, Madhya Pradesh</span>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-6"
                  style={{ padding: "0px 0px 0px 0px" }}
                >
                  <ul style={{ color: "#fff", marginTop: "10px" }}>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#20b2aa" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Degree:
                      </strong>
                      <span>B.tech ECE</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#20b2aa" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Github:
                      </strong>
                      <span>
                        <a
                          href="https://github.com/jahansamreen"
                          style={{ color: "white" }}
                        >
                          <style>{`a:hover{color: "orange"}`}</style>
                          https://github.com/jahansamreen
                        </a>
                      </span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#20b2aa" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Hobby:
                      </strong>
                      <span>Reading Books and Travelling</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#20b2aa" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        LinkedIn:
                      </strong>
                      <a
                        href="https://www.linkedin.com/in/samreen-jahan-99697a213/"
                        
                      >
                        https://www.linkedin.com/samreen-jahan/
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block1">
                <p
                  style={{
                    display: "flex",
                    fontStyle: "italic",
                    marginBottom: "22px",
                  }}
                  className="p1"
                >
                  I spend my spare time building upon my development skills and
                  creating my own personal projects.
                </p>
              </div>
            </div>
          </div>
          {/* skills */}
          <div className="skills" style={{ width: "100vw" }}>
            <div style={{ padding: "5vh 0px 0px 8vw" }}>
              <h2
                className="heading3"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  padding: "0",
                  lineHeight: "1px",
                  margin: "0px 0px 0px 0vw",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#aaaaaa",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Skills
                <style>
                  {`
                      .heading3::after {
                        content: "";
                        width: 120px;
                        height: 1px;
                        display: inline-block;
                        background: #4ceb95;
                        margin: 4px 10px;
                      }
                  `}
                </style>
              </h2>
            </div>
            <Skills />
          </div>
        </div>
        {/* footer */}
        <footer
          style={{
            display: "flex",
            padding: "10px 20px 0px -1px",
            zIndex: "1",
            width: "100vw",
            bottom: "0",
            marginBottom: "0px",
            right: "0",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              background: "#040404",
              display: "flex",
              justifyContent: "center",
              height: "40px",
              alignItems: "center",
              marginRight: "18px",
            }}
          >
            Designed by&nbsp;{" "}
            <span style={{ color: "#20b2aa" }}>Samreen Jahan</span>
          </div>
        </footer>
      </div>
    </>
  );
};
export default About;
