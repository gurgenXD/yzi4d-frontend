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
    <form className="search-form" onSubmit={onSubmitHander}>
      <div className="autoComplete_wrapper">
        <input
          type="search"
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
  );
}
