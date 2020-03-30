import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Loading.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import Portal from "@material-ui/core/Portal";

//use Portal to avoid issue with z-index with content

const Loading = ({ visible, fullScreen, style }) => {
  return visible ? (
    <Portal>
      <div
        className={classNames("sp-loading", {
          "sp-loading__full": fullScreen
        })}
        style={style}
      >
        <CircularProgress />
      </div>
    </Portal>
  ) : null;
};

Loading.propTypes = {
  visible: PropTypes.bool,
  style: PropTypes.object,
  fullScreen: PropTypes.bool
};

Loading.defaultProps = {
  fullScreen: false
};

export default Loading;
