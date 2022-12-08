import React from "react";
import classes from '../../styles/Home.module.css'
// import CoinList from "../components/coins/CoinList";
import CoinList from "../../components/coins/CoinList";
import { getAllCoin } from "../../dummyData";
const Coins = () => {
  const allCoins = getAllCoin();

  return (
    <div className={classes.homepage}>
      <CoinList items={allCoins} />
    </div>
  );
};

export default Coins;
