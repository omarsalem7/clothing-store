import React, { useState } from "react";
import SHOP_DATA from "./Shop_Data";
import CollectionView from "../../componenets/CollectionView/CollectionView";
const ShopPage = () => {
  const [shopData] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {shopData.map(({ id, ...collectionProps }) => (
        <CollectionView key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
