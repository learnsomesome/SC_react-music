import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/constants";

import { HotRecommendWrapped } from "./style";
import { getHotRecommendAction } from "../../store/actionCreators";
import SCThemeHeaderRCM from "@c/theme-header-rcm";
import SCSongsCover from "@c/songs-cover";

export default memo(function SCHotRecommend() {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapped>
      <SCThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SCSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapped>
  );
});
