import React, { useEffect, useState } from "react";
import { requests } from "../../api/requests";
import FeatherIcon from "feather-icons-react";
import "./shop.css";

export default function Shop() {
  const [items, setItems] = useState([]);
  let effect = async () => {
    try {
      let res = await requests.products.getRestaurants();
      setItems(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    effect();
  }, []);
  return (
    <div className="item-container">
      {items.map((e, i) => {
        return (
          <div className="item" key={i}>
            <img src={e.photo_url} />
            <div className="foods">
              <p>{e.name}</p>
              {e.description}
            </div>
            <div className="icon">
              <FeatherIcon icon={"trash-2"} />
              <FeatherIcon icon={"edit"} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
