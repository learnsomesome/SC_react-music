import React, { memo } from "react";

import { getCount, getSizeImage } from "@/utils/format-utils";

import { SongsCoverWrapped } from "./style";

export default memo(function SCSongsCover({ info }) {
  return (
    <SongsCoverWrapped>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="erji sprite_icon"></i>
              {getCount(info.playCount)}
              <i className="play sprite_icon"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="cover-bottom">{info.name}</div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapped>
  );
});
