"use client";

import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";
import Pagination from "@/app/components/common/Pagination";
import CommonService from "@/app/components/common/CommonService";
import { useState } from "react";
import useSWR from "swr";
import { getSpecialistServices } from "@/services/specialists";

export default function SpecialistServices({ specialist_id }: { specialist_id: string }) {
  const [pageIndex, setPageIndex] = useState(1);

  const {
    data: services,
    isLoading,
    error,
  } = useSWR(["specialist_services", pageIndex], async ([_, pageIndex]) => {
    return await getSpecialistServices(specialist_id, pageIndex);
  });

  if (isLoading)
    return (
      <div className="container">
        <PlaceholderLoading height={510} />
      </div>
    );

  if (error)
    return (
      <div className="container">
        <PlaceholderError height={510} />
      </div>
    );

  return (
    <div className="container">
      <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} paging={services.paging} />

      <div className="bg-white rounded-3 shadow p-3 p-md-4 p-lg-5">
        <h2 className="fs-3 mb-4">Услуги врача</h2>

        <div>
          {services.data.map((service: any) => (
            <CommonService key={service.id} service={service} catalogType="services" />
          ))}
        </div>

        {/* <div className="text-center pt-5">
          <Link href="#" className="btn btn-outline-secondary">
            Показать ещё
          </Link>
        </div> */}
      </div>
    </div>
  );
}
