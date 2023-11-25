"use client";

import CatalogSidebar from "@/app/components/catalog/CatalogSidebar";
import { useGetServices, useGetCategories } from "@/requests/client";
import {
  PlaceholderLoading,
  PlaceholderError,
  PlaceholderNotFound,
} from "@/app/components/common/Placeholder";
import Pagination from "@/app/components/common/Pagination";
import CommonService from "@/app/components/common/CommonService";
import { useState } from "react";

export default function CatalogServices({
  catalogType,
  searchQuery,
}: {
  catalogType: string;
  searchQuery: string;
}) {
  const [categoryId, setCategoryId] = useState("-1");
  const [pageIndex, setPageIndex] = useState(1);

  const {
    categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useGetCategories(categoryId, setCategoryId, catalogType, searchQuery);
  const {
    services,
    isLoading: isServicesLoading,
    isError: isServicesError,
  } = useGetServices(categoryId, catalogType, searchQuery, pageIndex);

  if (isServicesLoading || isCategoriesLoading)
    return (
      <div className="container pt-4 pt-lg-5">
        <PlaceholderLoading height={500} />
      </div>
    );
  if (isServicesError || isCategoriesError)
    return (
      <div className="container pt-4 pt-lg-5">
        <PlaceholderError height={500} />
      </div>
    );

  if (!services.data.length) {
    return (
      <div className="container pt-4 pt-lg-5">
        <PlaceholderNotFound height={100} />
      </div>
    );
  }

  return (
    <div className="row">
      <CatalogSidebar
        categories={categories}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        setPageIndex={setPageIndex}
      />
      <div className="col-xxl-9 col-xl-8">
        <div>
          {services.data.map((service: any) => (
            <CommonService key={service.id} service={service} catalogType={catalogType} />
          ))}
        </div>
        <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} paging={services.paging} />
      </div>
    </div>
  );
}
