import React from "react";
import "./scrollBrand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports.js";

const ScrollBrand = () => {
  return (
    <div className="gpt3__scroll-container section__padding">
      <div className="gpt3__scroll-brand">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
      <div className="gpt3__scroll-brand">
        <img src={google} alt="google" />

        <img src={slack} alt="slack" />

        <img src={atlassian} alt="atlassian" />

        <img src={dropbox} alt="dropbox" />

        <img src={shopify} alt="shopify" />
      </div>
      <div className="gpt3__scroll-brand">
        <img src={google} alt="google" />

        <img src={slack} alt="slack" />

        <img src={atlassian} alt="atlassian" />

        <img src={dropbox} alt="dropbox" />

        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default ScrollBrand;
