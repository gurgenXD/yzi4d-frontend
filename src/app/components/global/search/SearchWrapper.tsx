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
      <div
        className="autoComplete_wrapper"
        aria-expanded="false"
        aria-owns="autoComplete_list_1"
        aria-haspopup="true"
      >
        <input
          type="text"
          name="search_query"
          className="form-control search-form-input"
          id="autoComplete"
          placeholder="Введите запрос"
          aria-controls="autoComplete_list_1"
          aria-autocomplete="both"
        />
        <Search searchQuery={searchQuery} />
      </div>
      <button type="submit" className="btn btn-primary search-form-btn">
        Поиск
      </button>
    </form>
  );
}
