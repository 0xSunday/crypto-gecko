import React from "react";

import CoinList from "../components/coins/CoinList";
import { getFeaturedCoins } from "../dummyData";
const Home = () => {
  const featuredCoins = getFeaturedCoins();

  return (
    <div>
      <CoinList items={featuredCoins} />
    </div>
  );
};

export default Home;
