import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannersAction } from "./store/actionCreators";

function SCRecommend() {
  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);

  return (
    <div>
      <h2>SCRecommend: {topBanners.length}</h2>
    </div>
  );
}

export default memo(SCRecommend);
