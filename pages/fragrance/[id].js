import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ReactHtmlParser from "react-html-parser";
import classes from "./[id].module.css";
import Image from "next/image";

const FragranceDetails = ({
  fragrance: {
    displayName,
    longDescription,
    rating,
    reviews,
    currentSku: { listPrice, skuImages, size },
    brand,
  },
}) => (
  <div className={classes.wrapper}>
    <div className={classes.imgWrapper}>
      <img
        className={classes.image}
        src={skuImages.image450}
        alt={displayName}
      />
    </div>
    <div className={classes.description}>
      <span>{brand.displayName}</span>
      <h1>{displayName}</h1>
      <div className={classes.details}>
        <p>
          <span>Rating:</span> {rating} ({reviews} reviews)
        </p>
        <p>
          <span>Price:</span> {listPrice} for {size}
        </p>
      </div>
      <div className={classes.longDescription}>
        {ReactHtmlParser(longDescription)}
      </div>
      {/* {console.log(currentSku)} */}
    </div>
  </div>
);

export async function getServerSideProps({ params: { id } }) {
  // const topWoman = await fetchApi(
  //   `${baseUrl}/products/list?categoryId=cat1230039&pageSize=10`
  // );
  // const topMan = await fetchApi(
  //   `${baseUrl}/products/list?categoryId=cat1230040&pageSize=10`
  // );

  const allFragrances = await fetchApi(
    `${baseUrl}/products/list?categoryId=cat160006&pageSize=200`
  );

  // cat160006
  const currentFragrance = allFragrances.products.find(
    (el) => el.productId == id
  );

  // const sku =
  //   topMan.products.find((el) => el.productId == id) ||
  //   topWoman.products.find((el) => el.productId == id);

  const selectedFragrance = await fetchApi(
    `${baseUrl}/products/detail?productId=${id}&preferedSku=${currentFragrance.currentSku.skuId}`
  );

  return {
    props: {
      fragrance: selectedFragrance,
    },
  };
}

export default FragranceDetails;
