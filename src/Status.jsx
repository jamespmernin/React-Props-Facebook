import React from "react";

function Status(props) {
  return (
    <div classname="status">
      <div className="user-info">
        <img src={props.pic} alt="General Assembly Logo" className="profile-pic" />
        <div className="user-text">
          <p><a href="">{props.user}</a></p>
          <p><small>{props.date}</small></p>
        </div>
      </div>
      <p className="status-text">
        {props.text}
      </p>
      <hr />
      <div className="reaction-bar">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}

export default Status;