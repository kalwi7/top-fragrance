import Fragrance from "../components/Fragrance";
import classes from "../styles/Home.module.css";

import { baseUrl, fetchApi } from "../utils/fetchApi";

export default function Home({ topFragranceMen, topFragranceWomen }) {
  return (
    <>
      <div className={classes["wrapper"]}>
        <h2>Top Men Fragrance</h2>
        {topFragranceMen.map((fragrance, index) => (
          <Fragrance
            position={index + 1}
            fragrance={fragrance}
            key={fragrance.productId}
          />
        ))}
      </div>
      <div className={classes["wrapper"]}>
        <h2>Top Men Fragrance</h2>
        {topFragranceWomen.map((fragrance, index) => (
          <Fragrance
            position={index + 1}
            fragrance={fragrance}
            key={fragrance.productId}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const topFragranceMen = await fetchApi(
    `${baseUrl}/products/list?categoryId=cat1230040&pageSize=10&currentPage=1&sortBy=P_BEST_SELLING:1`
  );

  const topFragranceWomen = await fetchApi(
    `${baseUrl}/products/list?categoryId=cat1230039&pageSize=10&currentPage=1&sortBy=P_BEST_SELLING:1`
  );

  return {
    props: {
      topFragranceMen: topFragranceMen?.products,
      topFragranceWomen: topFragranceWomen?.products,
    },
  };
}
