"use client";

import { useState } from "react";
import useSWR from "swr";
import Pagination from "@/app/components/common/Pagination";
import CommonSpecialist from "@/app/components/common/CommonSpecialist";
import { getSpecialists } from "@/services/specialists";
import {
  PlaceholderLoading,
  PlaceholderError,
  PlaceholderNotFound,
} from "@/app/components/common/Placeholder";

export default function SpecialistsList({
  canOnline,
  canAdult,
  canChild,
  searchQuery,
  specializationId,
}: {
  canOnline: boolean;
  canAdult: boolean;
  canChild: boolean;
  searchQuery: string;
  specializationId: string;
}) {
  const [pageIndex, setPageIndex] = useState(1);

  const {
    data: specialists,
    isLoading,
    error,
  } = useSWR(
    ["specialists", pageIndex, canOnline, canAdult, canChild, searchQuery, specializationId],
    async ([_, ...params]) => {
      return await getSpecialists(...params);
    }
  );

  if (isLoading)
    return (
      <div className="container pt-4 pt-lg-5">
        <PlaceholderLoading height={100} />
      </div>
    );
  if (error)
    return (
      <div className="container pt-4 pt-lg-5">
        <PlaceholderError height={100} />
      </div>
    );

  if (!specialists.data.length) {
    return (
      <div className="container pt-4 pt-lg-5">
        <PlaceholderNotFound height={100} />
      </div>
    );
  }

  return (
    <>
      <div className="row gy-4 gy-md-5">
        {specialists.data.map((specialist: any) => (
          <div key={specialist.id} className="col-lg-3 col-md-4">
            <CommonSpecialist specialist={specialist} />
          </div>
        ))}
      </div>

      <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} paging={specialists.paging} />
    </>
  );
}
