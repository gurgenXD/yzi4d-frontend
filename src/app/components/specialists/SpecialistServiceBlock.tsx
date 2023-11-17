'use client'

import { useGetSpecialistServices } from "@/requests/client"
import { Placeholder, PlaceholderError } from "@/app/components/common/Placeholder"
import Pagination from "@/app/components/common/Pagination"
import ServiceBlock from "@/app/components/common/ServiceBlock"
import { useState } from "react"


export default function SpecialistServiceBlock({ specialist_id }: { specialist_id: string }) {
    const [pageIndex, setPageIndex] = useState(1);
    const { services, isLoading, isError } = useGetSpecialistServices(specialist_id, pageIndex)

    if (isLoading) return <div className="container"><Placeholder height={400} /></div>
    if (isError) return <div className="container"><PlaceholderError height={400} /></div>

    return (
        <div className="container">
            <div className="bg-white rounded-3 shadow p-3 p-md-4 p-lg-5">
                <h2 className="fs-3 mb-4">Услуги врача</h2>

                <div>
                    {services.data.map((service: any) => (
                        <ServiceBlock key={service.id} service={service} catalog_type="services" />
                    ))}
                </div>

                {/* <div className="text-center pt-5">
                    <a href="#" className="btn btn-outline-secondary">Показать ещё</a>
                    </div>
                */}

            </div>
            <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} paging={services.paging} />
        </div>
    )
}
