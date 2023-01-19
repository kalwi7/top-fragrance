import Link from "next/link";
import Image from "next/image";
import classes from "./Fragrance.module.css";

const Fragrance = ({
  fragrance: {
    brandName,
    heroImage,
    image450,
    rating,
    displayName,
    currentSku,
    productId,
  },
  position,
}) => (
  <>
    <Link href={`/fragrance/${productId}/`} passHref>
      <div className={classes["wrapper"]}>
        <div className={classes["cardNumber"]}>{position}</div>
        <img src={heroImage} alt={displayName} />
        <div className={classes["description"]}>
          <h3>{displayName}</h3>
          <h3>{brandName}</h3>
          <span>Rating: {rating}</span>
          <span>Price: {currentSku.listPrice}</span>
        </div>
      </div>
    </Link>
  </>
);

export default Fragrance;
