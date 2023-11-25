"use client";

import { useState } from "react";
import Search from "@/app/components/global/search/Search";

export default function SearchWrapper() {
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmitHander = (event: any) => {
    event.preventDefault();
    setSearchQuery(event.target.search_query.value);
  };

  return (
    <div className="search-form-wrap">
      <form className="search-form" onSubmit={onSubmitHander}>
        <div
          className="autoComplete_wrapper"
          aria-owns="autoComplete_list_1"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <input
            type="text"
            name="search_query"
            className="form-control search-form-input"
            id="autoComplete"
            placeholder="Введите запрос"
          />
          <Search searchQuery={searchQuery} />
        </div>
        <button type="submit" className="btn btn-primary search-form-btn">
          Поиск
        </button>
      </form>
    </div>
  );
}
