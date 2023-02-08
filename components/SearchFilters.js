import { useState } from "react";
import { useRouter } from "next/router";
// import image from "next/image";
import classes from "./SearchFilters.module.css";

import { getFilterValues, filterData } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (values) => {
    const path = router.pathname;
    const { query } = router;

    const finalValues = getFilterValues(values);

    finalValues.forEach((item) => {
      if (item.value && values?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query: query });
  };

  return (
    <div className={classes.wrapper}>
      {filters?.map((filter) => (
        <div className={classes.item}>
          <label className={classes.label} for="filters">
            {filter.placeholder}
          </label>
          <select
            className={classes.select}
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            name="filters"
            id="filters"
          >
            {filter?.items?.map((item) => (
              <option
                className={classes.option}
                key={item.value}
                value={item.value}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default SearchFilters;
