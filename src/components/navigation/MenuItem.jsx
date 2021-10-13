import React from "react";
import "./MenuItem.css";
import FeatherIcon from "feather-icons-react";
import { useLocation, withRouter } from "react-router";

function MenuItem({
  icon = "",
  title = "",
  history,
  link,
  onPress: customPress,
}) {
  let location = useLocation();
  let onPress = () => {
    if (customPress !== undefined) {
      customPress();
      return;
    }
    history.push(link);
  };
  return (
    <div
      className={location.pathname.indexOf(link) !== -1 ? "menu-item active" : "menu-item"}
      onClick={onPress}
    >
      <FeatherIcon icon={icon} />
      <span>{title}</span>
    </div>
  );
}

export default withRouter(MenuItem);
