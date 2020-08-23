import React, { memo, Fragment } from "react";

import { footerLinks, footerImgLinks } from "@/common/local-data";

import { FooterWrapped, FooterLeft, FooterRight } from "./style";

export default memo(function SCAppFooter() {
  return (
    <FooterWrapped>
      <div className="content wrap-v2">
        <FooterLeft>
          <p className="link">
            {footerLinks.map((item, index) => {
              return (
                <Fragment key={item.title}>
                  <a
                    href={item.link}
                    target={index === footerLinks.length - 1 ? "" : "blank"}
                    className="link-item"
                  >
                    {item.title}
                  </a>
                  <span className="line">|</span>
                </Fragment>
              );
            })}
          </p>
          <p className="copy-right">
            <span>网易公司版权所有©1997-2020</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a
              href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
              target="blank"
            >
              浙网文[2018]3506-263号
            </a>
          </p>
          <p className="copy-right">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <p className="copy-right">
            <span>粤B2-20090191-18</span>
            <a
              href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
              target="blank"
            >
              工业和信息化部备案管理系统网站
            </a>
            <a
              className="police-link"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
              target="blank"
            >
              <span className="police-logo"></span>
              <span>浙公网安备 33010902002564号</span>
            </a>
          </p>
        </FooterLeft>
        <FooterRight>
          {footerImgLinks.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a
                  className="link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="blank"
                >
                  {" "}
                </a>
                <span className="title"></span>
              </li>
            );
          })}
        </FooterRight>
      </div>
    </FooterWrapped>
  );
});
