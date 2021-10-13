import React from "react";
import "../edit/Edit.css";
import FeatherIcon from "feather-icons-react";

export default function Edit({ location }) {
  console.log(location);
  return (
    <div className="edit">
      <div className="img">
        <img src={location.state.item.photo_url} alt="" />
        <div className="icon-container">
          <FeatherIcon color="white" className="icon" icon={"upload"} />
          <FeatherIcon color="white" className="icon" icon={"trash-2"} />
        </div>
      </div>
      <div className="inputname">
        <input
          defaultValue={location.state.item.name}
          type="text"
          placeholder="Watch"
        />
        <textarea  defaultValue={location.state.item.description} name="Text1" cols="40" rows="5"></textarea>
        <div className="inbutton">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
