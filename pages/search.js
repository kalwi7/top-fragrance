import { useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
import SearchFilters from "../components/SearchFilters";
import classes from "./search.module.css";
import Fragrance from "../components/Fragrance";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import { FaAngleDoubleDown } from "react-icons/fa";

const Search = ({ fragrancies }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  // const router = useRouter();

  return (
    <div className={classes.searchBar}>
      <div
        className={classes.searchText}
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        Search Fragrance <FaAngleDoubleDown />
      </div>
      {searchFilters && <SearchFilters />}
      <h2>Resoults</h2>
      <div className={classes.fragrances}>
        {fragrancies.map((fragrance) => (
          <Fragrance fragrance={fragrance} id={fragrance.productId} />
        ))}
      </div>
      {fragrancies.length === 0 && "No resuls"}
    </div>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const category = query.categoryId || "cat1230040";
  const minPrice = query.pl || "0";
  const maxPrice = query.ph || "2000";
  const sort = query.sortBy || "P_BEST_SELLING:1";

  const data = await fetchApi(
    `${baseUrl}/products/list?categoryId=${category}&sortBy=${sort}&ph=${maxPrice}&pl=${minPrice}`
  );

  return {
    props: {
      fragrancies: data?.products,
    },
  };
}
