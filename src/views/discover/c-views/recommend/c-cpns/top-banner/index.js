import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannersAction } from "../../store/actionCreators";

import { BannerWrapped, BannerLeft, BannerRight, BannerControl } from "./style";
import { Carousel } from "antd";

export default memo(function SCTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const carouselRef = useRef();

  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  const bgImage = topBanners[currentIndex]?.imageUrl;

  return (
    <BannerWrapped bgImage={`${bgImage}?imageView&blur=40x20`}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel ref={carouselRef} effect="fade" beforeChange={bannerChange}>
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => carouselRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => carouselRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapped>
  );
});
