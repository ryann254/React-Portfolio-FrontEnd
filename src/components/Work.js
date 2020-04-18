import React from "react";

// Own Components
import Image1 from "../../public/images/projects/Estimatorapp.png";
import Image2 from "../../public/images/projects/Expenseapp.png";
import Image3 from "../../public/images/projects/Fancyform.png";
import Image4 from "../../public/images/projects/Netflix.png";
import Image5 from "../../public/images/projects/Homefurniture.png";

function Work() {
  return (
    <div>
      <main id="work">
        <h1 className="lg-heading">
          <span className="text-secondary">My</span> Work
        </h1>
        <h2 className="sm-heading">A few of my projects....</h2>
        <div className="projects">
          <div className="item">
            <a
              href="https://ryann254.github.io/Ryan-Covid19-Deploy/"
              target="_blank"
            >
              <img src={Image1} alt="Project" />
            </a>
            <a
              href="https://ryann254.github.io/Ryan-Covid19-Deploy/"
              target="_blank"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Project
            </a>

            <a
              href="https://github.com/ryann254/Ryan-Covid19-Challenge"
              target="_blank"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>

          <div className="item">
            <a
              href="https://expense-tracker-frontend-001.herokuapp.com/"
              target="_blank"
            >
              <img src={Image2} alt="Project" />
            </a>
            <a
              href="https://expense-tracker-frontend-001.herokuapp.com/"
              target="_blank"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Project
            </a>

            <a
              href="https://github.com/ryann254/Daily-Expenditure-App-Front-End"
              target="_blank"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>

          <div className="item">
            <a href="https://ryanfancyform.cf/" target="_blank">
              <img src={Image3} alt="Project" />
            </a>
            <a
              href="https://ryanfancyform.cf/"
              target="_blank"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Project
            </a>

            <a
              href="https://github.com/ryann254/FancyUI"
              target="_blank"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>

          <div className="item">
            <a href="https://tender-fermi-f8c720.netlify.app/" target="_blank">
              <img src={Image4} alt="Project" />
            </a>
            <a
              href="https://tender-fermi-f8c720.netlify.app/"
              target="_blank"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Project
            </a>

            <a
              href="https://github.com/ryann254/Netflix-Clone-App"
              target="_blank"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>

          <div className="item">
            <a href="https://ryanphotography.cf/" target="_blank">
              <img style={{ height: "191px" }} src={Image5} alt="Project" />
            </a>
            <a
              href="https://ryanphotography.cf/"
              target="_blank"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Project
            </a>

            <a
              href="https://github.com/ryann254/homefurniture"
              target="_blank"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </main>

      <footer id="main-footer">Copyright &copy; 2020</footer>
    </div>
  );
}

export default Work;
