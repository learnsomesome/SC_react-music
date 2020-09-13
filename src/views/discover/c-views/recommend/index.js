import React, { memo } from "react";

import {
  RecommendWrapped,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import SCTopBanner from "./c-cpns/top-banner";
import SCHotRecommend from "./c-cpns/hot-recommend";
import SCNewAlbum from "./c-cpns/new-album";
import SCRecommendRanking from "./c-cpns/recommend-ranking";

function SCRecommend() {
  return (
    <RecommendWrapped>
      <SCTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <SCHotRecommend />
          <SCNewAlbum />
          <SCRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapped>
  );
}

export default memo(SCRecommend);
