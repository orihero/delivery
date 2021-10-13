import React, { useRef, useState } from "react";
import "../edit/Edit.css";
import FeatherIcon from "feather-icons-react";
import { requests, url } from "../../api/requests";

export default function Edit({ history }) {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({});
  const ref = useRef(null);
  let onChange = async (e) => {
    if (e.target.files.length > 0) {
      var reader = new FileReader();
      var _ = reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = (e) => {
        setImage(reader.result);
      };
      let from = new FormData();
      from.append("files", e.target.files[0]);
      let res = await requests.file.upload(from);
      setData({ ...data, photo_url: res.data[0] });
    }
  };
  let onDelete = () => {
    setImage(null);
  };

  let onCancel = () => {
    history.push("/shop");
  };
  let onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  let onSave= async ()=> {
    try{

      let res = await requests.restaurants.createRestaurant(data);
      history.push('/shop');
    } catch(error) {}

  };

  return (
    <div className="edit">
      <div className="img">
        <img src={image} alt="" />
        <div className="icon-container">
          <div
            onClick={() => {
              console.log(ref.current.click());
            }}
          >
            <FeatherIcon color="white" className="icon" icon={"upload"} />
          </div>
          <input
            ref={(e) => (ref.current = e)}
            type="file"
            onChange={onChange}
            style={{ visibility: "hidden", width: 0, height: 0 }}
          />
          <div onClick={onDelete}>
            <FeatherIcon color="white" className="icon" icon={"trash-2"} />
          </div>
        </div>
      </div>
      <div className="inputname">
        <input
          defaultValue={""}
          onChange={onInputChange}
          name="name"
          type="text"
          placeholder="Name"
        />
        <textarea
          defaultValue={""}
          name="description"
          placeholder="Description"
          onChange={onInputChange}
          cols="40"
          rows="5"
        ></textarea>
        <div className="inbutton">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
