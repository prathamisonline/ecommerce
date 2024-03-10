import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./search.module.scss";
import { AiOutlineClose } from "react-icons/ai";

type SearchType = {
  showClose?: string;
  classStyle?: string;
};

const Search: React.FC<SearchType> = ({ showClose, classStyle }) => {
    const [search,setSearch]=useState("")

  return (
    <div className={classStyle ? styles[classStyle] : styles["search"]}>
      <div className={styles["search-wrap"]}>
        <BiSearch size={22} />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={()=>{}}
        />
        {showClose === "true" && (
          <>
            {search.length > 0 && (
              <AiOutlineClose
                onClick={() => setSearch("")}
                size={22}
                cursor="pointer"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
