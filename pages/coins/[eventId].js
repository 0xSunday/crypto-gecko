import React from "react";
import getEventById from "../../dummyData";
import { useRouter } from "next/router";
// import CoinDetailsPage from "../../components/coinDetails/CoinDetailsPage";
const coinDetails = () => {
  const router = useRouter();

  const coinId = router.query.eventId;
  const coin = getEventById(coinId);
  // console.log(coin.circulatingSupply);
  return (
    // <h1>hello</h1>
    <coinDetailsPage
      shotName={coin.shotName}
      title={coin.title}
      description={coin.description}
      price={coin.price}
      marketCap={coin.marketCap}
      circulatingSupply={coin.circulatingSupply}
      totalSupply={coin.totalSupply}
      website={coin.website}
      creator={coin.creator}
      logo={coin.logo}
      image={coin.image}
    />
  );
};

export default coinDetails;
