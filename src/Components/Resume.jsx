import React from "react";
export default function Resume({ navbar: Navbar }) {
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
        <div
          className="content"
          style={{
            overflow: "auto",
            overflowX: "hidden",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          {/*Navbar*/}
          <Navbar />
          {/* container*/}
          <style>{`:root {
    scroll-behavior: smooth;
  }`}</style>
          <div className="containe" style={{ marginTop: "100px" }}>
            <div className="Title" style={{ paddingLeft: "8vw" }}>
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
                Resume
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
                Check my resume
              </h1>
            </div>
            <style>{`.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
}
.resume{
  padding-left: 8vw;
  padding-right: 8vw;
}
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
}

.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #20b2aa;
  margin-bottom: 10px;
}

.resume .resume-item h5 {
  font-size: 16px;
  background: rgba(255, 255, 255, 0.15);
  padding: 15px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume .resume-item ul {
  padding-left: 20px;
}
.col-lg-6{
  padding: 0px 40px 40px 0px;
}
.resume .resume-item ul li {
  padding-bottom: 10px;
}

.resume .resume-item:last-child {
  padding-bottom: 0;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #20b2aa;
  border: 2px solid #18d26e;
}
@media(min-width: 1032px){
  .para1{
    max-width: 50vw;
  }
}
`}</style>
            <div className="resume">
              <div class="row">
                <div class="col-lg-6" style={{ paddingRight: "10px" }}>
                  <h3 class="resume-title">Summary</h3>
                  <div class="resume-item pb-0">
                    <h4>Samreen</h4>
                    <p>
                      <p className="para1">
                        Innovative and deadline-driven Front-end developer with
                        experience in designing and developing web application
                        from HTML, CSS, JS, React JS, Bootstrap, etc.
                      </p>
                    </p>
                    <p>
                      <ul>
                        <li>Jabalpur , Madhya Pradesh</li>
                        <li>India</li>
                        <li>jahansamreen370@gmail.com</li>
                      </ul>
                    </p>
                  </div>

                  <h3 class="resume-title">Education</h3>
                  <div class="resume-item">
                    <h4>Bachelor of Technology - ECE</h4>
                    
                    <h5>2019 - 2023</h5>
                    <p>
                      <em>
                        Gyan Ganga Institute of Technology and Sciences,
                        Jabalpur, (M.P)
                      </em>

                    </p>
                    <p className="para1">Completed my Graduation with 8.9 CGPA</p>
                    {/* <p className="para1">
                      Qui deserunt veniam. Et sed aliquam labore tempore sed
                      quisquam iusto autem sit. Ea vero voluptatum qui ut
                      dignissimos deleniti nerada porti sand markend
                    </p> */}
                  </div>
                  <div class="resume-item">
                    <h4>Schooling</h4>
                    <h5>2019</h5>
                    <p>
                      <em>St. Joseph's Convent School, TFRI, Jabalpur, (M.P)</em>
                    </p>
                    <p className="para1">Completed my Schooling with 72%</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h3 class="resume-title">Experience</h3>
                  <div class="resume-item">
                    <h4>Teaching Assistant</h4>
                    <h5>February 2023 - May 2023</h5>
                    <p>
                      <em>Coding Ninjas</em>
                    </p>
                    <p>
                      <ul>
                        <li style={{ maxWidth: "50vw" }}>
                          Completed my 3-month internship as a Teaching
                          Assistant of Foundation and DSA course with C++
                          language at Coding Ninjas . Mentored more than 300
                          students and resolved more than 600 doubts with an
                          average rating of 4.7 out of 5
                        </li>
                      </ul>
                    </p>
                  </div>
                  {/* <div class="resume-item">
                    <h4>Web developer</h4>
                    <h5>Present</h5>
                    <p>
                      <em>GDSC CUIET</em>
                    </p>
                    <p>
                      <ul>
                        <li>
                          Currently working as the web developer in the Google
                          Developer Student Clubs.
                        </li>
                      </ul>
                    </p>
                  </div> */}
                  {/* <div class="resume-item">
                    <h4>Open Source Contributor</h4>
                    <h5>2022 - Present</h5>
                    <p>
                      <em>Github</em>
                    </p>
                    <p>
                      <ul>
                        <li>
                          I am actively comntributing to the projects available
                          on Github and participating in events like GSSoC'23
                          and SSoc'23.
                        </li>
                      </ul>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

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
}
