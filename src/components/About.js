import React, { Fragment } from "react";
import ProfilePic from "../../public/images/Profile-Pic-Two-Croped.jpg";
import "./About.css";

function About() {
  return (
    <Fragment>
      <main id="about">
        <h1 className="lg-heading">
          <span className="text-secondary">About</span> Me
        </h1>
        <h2 className="sm-heading">Let me mention just a few...</h2>
        <div className="about-info">
          <div className="image-bio">
            <img src={ProfilePic} alt="" className="bio-image" />
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p className="show">
                My life has been a roller coaster ride, its has had its ups and
                downs, some glorious moments here and there, not forgetting the
                sad and painful moments that taught me a lesson.But I'm not here
                to bore you with the details. <br />
                Boiled down, my life comes down to three major things: <br />
                <span className="text-secondary-paragraph">
                  <strong>What motivates me: </strong>
                </span>{" "}
                The hope that one day atleast one of my ideas will bring great
                joy or relief, depending on the situation, to as many people as
                possible. Making the world a little bit more tolerable. Also the
                thought of a peaceful and wonderful life where I can live how I
                want to, you know the no rules kinda life. <br />
                <span className="text-secondary-paragraph">
                  <strong>How I will achieve this dream: </strong>
                </span>{" "}
                My first goal was to learn web development as it peaked my
                interests, and could prove a valuable skill when it comes to
                looking for a job and making a living. All while trying to
                achieve my ultimate goal which is to learn AI and create
                something with it that could benefit as many people as possible.
                That's my plan, clean and simple. <br />
                <span className="text-secondary-paragraph">
                  <strong>What demotivates me: </strong>
                </span>{" "}
                The fact that no matter how much good you do there'll always be
                that special bunch of people who want to bring you down,
                sometimes coz your plan isn't beneficial to them and other times
                just because they can. I believe that too much money and power
                turns into a disease that you'll never shake off, that'll always
                have you looking over your shoulder thinking that someone is
                after your money. <br />
                <span className="text-secondary-paragraph">
                  <strong>What I'm doing right now: </strong>
                </span>{" "}
                I'm now in JKUAT university pursuing my degree in Innovation and
                technology management and also learning to be a web developer at
                my free time
              </p>
            </div>
          </div>
          <h2 className="sm-heading work">Work and Education</h2>
          <div className="work-education">
            <div className="job">
              <h3>Intern at Softsearch(2020-)</h3>
              <h4>Front-End Developer</h4>
              <p>
                As of January 23rd 2020, I started my internship at Softsearch
                Limited, a software development and consultancy start-up.At
                Softsearch I work with another front-end developer to develop
                and deliver well designed and optimized websites. We are
                currently working on product to ease transportation of bulky
                goods to and fro a place.
              </p>
            </div>

            <div className="job">
              <h3>JKUAT(2017-2021)</h3>
              <h4>Degree</h4>
              <p>
                I'm also still studying at Jomo Kenyatta University of
                Agriculture and Technology, taking Bachelor of Science
                Innovation and Technology Management. I graduate in 2021.
              </p>
            </div>

            <div className="job">
              <h3>Upperhill Secondary School(2013-2016)</h3>
              <h6>Kcse Certificate</h6>
              <p>I did my highschool studies at Upperhill school</p>
            </div>
          </div>

          <div className="headings">
            <h2 className="sm-heading work">Events and Achievements</h2>
          </div>

          <div className="work-education">
            <div className="job">
              <h3>SDG Challenge(2020)</h3>
              <h4>Facebook</h4>
              <p>
                On April 2020, I applied to a challenge by Facebook and got
                in.The first challenge given to us, was to make a function that
                receives data about the corona virus e.g. no. of people
                infected,hospital beds available in the region and give out an
                estimate how many more people will be infected given the current
                rate of infections and whether or not the hospital beds will be
                enough.
              </p>
            </div>
            <div className="job">
              <h3>Andela Learning Community</h3>
              <h4>Finalists</h4>
              <p>
                Between the months of September and December in 2019, I enrolled
                in another programmed called ALC. It's sponsored by google and
                is aimed at equiping young talented Africans with skills in
                Mobile-Web, Android and Cloud Technologies. I went with the
                Mobile-Web track and learnt how to make websites that are not
                only pleasing but also optimized and have high performance.
                Another important skill I acquired is making a website
                accessible and user friendly to anyone
              </p>
            </div>
            <div className="job">
              <h3>Huawei Training at Huawei Technologies Kenya(2019)</h3>
              <h4>Huawei Certificate</h4>
              <p>
                In June 2019, I went for a two week bootcamp at Huawei's main
                offices, the training was about a new platform the planned to
                avail, namely OWS. It's a cloud platform that they hope will
                large and small businesses to grow with technology more, they
                are also using it themselves in their day to day activities. The
                program ended and we did our official exams in July and gor our
                certificates in August
              </p>
            </div>
            <div className="job">
              <h3>Rotaract Club of JKUAT(2019-)</h3>
              <h4>Clubs and Societies</h4>
              <p>
                I'm also an active member of Rotaract club, our main agenda is
                to mostly make the society and environment around us a better
                place. We go for activities like taking clothes to children's
                home, cleaning up the environment, painting primary schools that
                are near us.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer id="main-footer">Copyright &copy; 2020</footer>
    </Fragment>
  );
}

export default About;
