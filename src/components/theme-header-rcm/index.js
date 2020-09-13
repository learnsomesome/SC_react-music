import React, { memo } from "react";
import PropTypes from "prop-types";

import { HeaderWrapped } from "./style";

const SCThemeHeaderRCM = memo(function ({ title, keywords }) {
  return (
    <HeaderWrapped className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <a href="/#">{item}</a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="/#">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapped>
  );
});

SCThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};

SCThemeHeaderRCM.defaultProps = {
  keywords: [],
};

export default SCThemeHeaderRCM;
