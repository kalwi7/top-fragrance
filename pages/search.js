import { useState } from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import SearchFilters from "../components/SearchFilters";

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter;

    return (
      <div>
        <div onClick={() => setSearchFilters(prevFilters => !prevFilters)}>
            <p>Search Fragrance</p>
        </div>
        {searchFilters && <SearchFilters />}
      </div>  
    )
}

export default Search;