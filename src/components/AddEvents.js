import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

import { addWork, changeEditStatus } from "../redux/action-creator";
import "./AddEvents.scss";

function AddEvents({ history, ...props }) {
  const { eventORWorkStatus, leftSideStatus } = useSelector(
    (state) => state.work
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [leftState, setLeftState] = useState("");
  const [contentState, setContentState] = useState("");
  const [protosState, setProtosState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      title,
      subtitle,
      content,
    };
    dispatch(addWork(data));
  }

  function addAnimation(event) {
    if (leftState !== "") {
      let move = event.clientX * 0.05 + 4;
      let move2 = event.clientX * 0.003;

      contentState.style.transform = `translateX(-${move2}%)`;
      protosState.forEach((item) => {
        item.style.transform = `translateX(${move}%)`;
      });
    }
  }

  // On component mount the following should be fetched and set to state
  useEffect(() => {
    let left = document.querySelector(".left");
    let contentLeft = document.querySelector(".content");
    let protos = document.querySelectorAll(".proto");
    setLeftState(left);
    setContentState(contentLeft);
    setProtosState(protos);

    if (eventORWorkStatus === true) {
      Swal.fire({
        title: "Congratulations!",
        text: "Work/Event Added Successfully",
        icon: "success",
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        onClose: () => {
          history.push("/about");
          dispatch(changeEditStatus());
        },
        showClass: {
          popup: "animated fadeInDown faster",
        },
        hideClass: {
          popup: "animated fadeOutUp faster",
        },
      });
    }

    if (leftSideStatus === true) {
      left.style.opacity = "0";
      protos.forEach((proto) => (proto.style.opacity = "0"));
    } else {
      left.style.opacity = "1";
      protos.forEach((proto) => (proto.style.opacity = "1"));
    }
  }, [eventORWorkStatus, leftSideStatus]);

  return (
    <>
      <div className="body">
        <div className="proto-container">
          <div className="proto"></div>
          <div className="proto"></div>
          <div className="proto"></div>
          <div className="proto"></div>
        </div>

        <div className="container">
          <div className="inner">
            <div className="left" onMouseMove={(e) => addAnimation(e)}>
              <div className="content">
                <h1>
                  Add <span>Education or Events Recently Occurred</span>
                </h1>

                <p>
                  Here's where I can add all the new education, experience and
                  events that I've attended recently. Once added their appear on
                  the about page.
                </p>
                <p className="light">
                  Feel free to leave a nice comment at the bottom
                </p>
              </div>
            </div>
            <div className="right">
              <p>Fill the following form!</p>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label className="label">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="enter the title..."
                />
                <label className="label">Subtitle:</label>
                <input
                  type="text"
                  name="subtitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  placeholder="enter the subtitle..."
                />
                <label className="label">Content:</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={7}
                  placeholder="enter some descriptive content..."
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

AddEvents.propTypes = {
  history: PropTypes.any,
};

export default AddEvents;
