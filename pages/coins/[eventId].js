import React from "react";
import coinDetailsPage from "../../components/coinDetails/coinDetailsPage";
import { getcoinById } from "../../dummyData";
import { useRouter } from "next/router";

const coinDetails = () => {
  const router = useRouter();

  const coinId = router.query.eventId;
  const coin = getcoinById(coinId);
  // console.log(coin);
  return (
    <coinDetailsPage
      // shotName={coin.shotName}
      title={coin.title}
      // description={coin.description}
      // price={coin.price}
      // marketCap={coin.marketCap}
      // circulatingSupply={coin.circulatingSupply}
      // totalSupply={coin.totalSupply}
      // website={coin.website}
      // creator={coin.creator}
      // logo={coin.logo}
      // image={coin.image}
    />
  );
};

export default coinDetails;
