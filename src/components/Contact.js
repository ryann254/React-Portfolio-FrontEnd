import React from "react";

function Contact() {
  return (
    <div>
      <main id="contact">
        <h1 className="lg-heading">
          <span className="text-secondary">Contact</span> Me
        </h1>
        <h2 className="sm-heading">How to reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span>{" "}
            keddelyronjoz@gmail.com
          </div>

          <div>
            <span className="text-secondary">Phone:</span> (+254) 796867328
          </div>

          <div>
            <span className="text-secondary">Address:</span>
            Roysambu, Nairobi
          </div>
        </div>
      </main>

      <footer id="main-footer">Copyright &copy; 2020</footer>
    </div>
  );
}

export default Contact;
