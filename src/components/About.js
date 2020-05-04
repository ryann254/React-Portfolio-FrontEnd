import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Bounce, Zoom } from "react-reveal";

import ProfilePic from "../../public/images/Profile-Pic-Two-Croped-min.jpg";
import "./About.css";

function About() {
  const workEducationData = useSelector(
    (state) => state.about.workEducationData
  );
  const eventsAchievements = useSelector(
    (state) => state.about.eventsAchievements
  );
  return (
    <Fragment>
      <main id="about">
        <h1 className="lg-heading">
          <span className="text-secondary">About</span> Me
        </h1>
        <h2 className="sm-heading">Let me mention just a few...</h2>
        <div className="about-info">
          <div className="image-bio">
            <Bounce right>
              <img src={ProfilePic} alt="" className="bio-image" />
              <div className="bio">
                <h3 className="text-secondary">BIO</h3>
                <p className="show">
                  My life has been a roller coaster ride, its has had its ups
                  and downs, some glorious moments here and there, not
                  forgetting the sad and painful moments that taught me a
                  lesson.But I'm not here to bore you with the details. <br />
                  Boiled down, my life comes down to three major things: <br />
                  <span className="text-secondary-paragraph">
                    <strong>What motivates me: </strong>
                  </span>{" "}
                  The hope that one day atleast one of my ideas will bring great
                  joy or relief, depending on the situation, to as many people
                  as possible. Making the world a little bit more tolerable.
                  Also the thought of a peaceful and wonderful life where I can
                  live how I want to, you know the no rules kinda life. <br />
                  <span className="text-secondary-paragraph">
                    <strong>How I will achieve this dream: </strong>
                  </span>{" "}
                  My first goal was to learn web development as it peaked my
                  interests, and could prove a valuable skill when it comes to
                  looking for a job and making a living. All while trying to
                  achieve my ultimate goal which is to learn AI and create
                  something with it that could benefit as many people as
                  possible. That's my plan, clean and simple. <br />
                  <span className="text-secondary-paragraph">
                    <strong>What demotivates me: </strong>
                  </span>{" "}
                  The fact that no matter how much good you do there'll always
                  be that special bunch of people who want to bring you down,
                  sometimes coz your plan isn't beneficial to them and other
                  times just because they can. I believe that too much money and
                  power turns into a disease that you'll never shake off,
                  that'll always have you looking over your shoulder thinking
                  that someone is after your money. <br />
                  <span className="text-secondary-paragraph">
                    <strong>What I'm doing right now: </strong>
                  </span>{" "}
                  I'm now in JKUAT university pursuing my degree in Innovation
                  and technology management and also learning to be a web
                  developer at my free time
                </p>
              </div>
            </Bounce>
          </div>
          <h2 className="sm-heading work">Work and Education</h2>
          <Zoom>
            <div className="work-education">
              {workEducationData !== ""
                ? workEducationData.map((item, index) => (
                    <div className="job" key={index}>
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                      <p>{item.content}</p>
                    </div>
                  ))
                : console.log("Loading")}
            </div>
          </Zoom>
          <div className="headings">
            <h2 className="sm-heading work">Events and Achievements</h2>
          </div>
          <Zoom>
            <div className="work-education">
              {eventsAchievements !== ""
                ? eventsAchievements.map((item, index) => (
                    <div className="job" key={index}>
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                      <p>{item.content}</p>
                    </div>
                  ))
                : console.log("Loading")}
            </div>
          </Zoom>
        </div>
      </main>

      <footer id="main-footer">Copyright &copy; 2020</footer>
    </Fragment>
  );
}

export default About;
