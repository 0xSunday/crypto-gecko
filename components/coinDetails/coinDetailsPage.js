import classes from "./CoinDetailsPage.module.css";
import React from "react";

const CoinDetailsPage = (props) => {
  const {
    shotName,
    title,
    description,
    price,
    marketCap,
    circulatingSupply,
    totalSupply,
    website,
    creator,
    logo,
    image,
  } = props;

  return (
    <div className={classes.coinDetails}>
      <div className={classes.div1}>
        <h1>
          `$#{title} (${shotName})`
        </h1>
        <div className={classes.Content1}>
          <h2>${price}</h2>
          <div>other content</div>
        </div>
      </div>

      <div className={classes.div2}>
        <h1>what is {title}</h1>
        <p>{description}</p>
      </div>

      <div className="classes.div3">
        <h1>links</h1>
        <div> links</div>
      </div>
    </div>
  );
};

export default CoinDetailsPage;
