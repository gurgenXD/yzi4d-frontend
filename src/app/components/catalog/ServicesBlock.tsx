'use client'

import { useGetServices } from "@/requests/client"
import { Placeholder, PlaceholderError } from "@/app/components/common/Placeholder"
import Pagination from "@/app/components/common/Pagination"
import ServiceBlock from "@/app/components/common/ServiceBlock"
import { useState } from "react"


export default function ServicesBlock({ catalog_type, category_id }: { catalog_type: string, category_id: string }) {
    const [pageIndex, setPageIndex] = useState(1);
    const { services, isLoading, isError } = useGetServices(category_id, catalog_type, pageIndex)

    if (isLoading) return <><Placeholder height={1000} /><div className="pt-5"></div></>
    if (isError) return <><PlaceholderError height={1000} /><div className="pt-5"></div></>

    return (
        <>
            <div>
                {services.data.map((service: any) => (
                    <ServiceBlock key={service.id} service={service} catalog_type={catalog_type} />
                ))}
            </div>
            <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} paging={services.paging} />
        </>
    )
}
