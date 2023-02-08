import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ReactHtmlParser from "react-html-parser";
import classes from "./[id].module.css";
// import Image from "next/image";
import CommentForm from "../../components/CommentForm";
import Opinions from "../../components/Opinions";
import axios from "axios";

const FragranceDetails = ({
  opinions,
  fragrance: {
    productId,
    displayName,
    longDescription,
    rating,
    reviews,
    currentSku: { listPrice, skuImages, size },
    brand,
  },
}) => (
  <>
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
        <div>{ReactHtmlParser(longDescription)}</div>
      </div>
    </div>
    <CommentForm id={productId} />
    <Opinions
      opinions={opinions.filter((opinion) => opinion.id === productId)}
      id={productId}
    />
  </>
);

export async function getServerSideProps({ params: { id } }) {
  const allFragrances = await fetchApi(
    `${baseUrl}/products/list?categoryId=cat160006&pageSize=200`
  );

  // cat160006
  const currentFragrance = allFragrances.products.find(
    (el) => el.productId == id
  );

  const selectedFragrance = await fetchApi(
    `${baseUrl}/products/detail?productId=${id}&preferedSku=${currentFragrance.currentSku.skuId}`
  );

  const res = await axios.get(
    "https://react-training-fffc3-default-rtdb.europe-west1.firebasedatabase.app/opinions.json"
  );

  const opinions = [];

  for (const key in res.data) {
    opinions.push({
      id: res.data[key].id,
      name: res.data[key].name,
      text: res.data[key].opinion,
    });
  }
  // const currentProductOpinions = opinions.filter(
  //   (opinion) => opinion.id === id
  // );

  return {
    props: {
      fragrance: selectedFragrance,
      opinions: opinions,
    },
  };
}

export default FragranceDetails;
