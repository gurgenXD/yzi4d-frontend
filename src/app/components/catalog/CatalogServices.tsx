'use client'

import { useGetServices } from "@/requests/client"
import { Placeholder } from "@/app/components/common/Placeholder"
import Pagination from "@/app/components/common/Pagination"
import CommonService from "@/app/components/common/CommonService"
import { useState } from "react"


export default function CatalogServices({ catalog_type, category_id }: { catalog_type: string, category_id: string }) {
    const [pageIndex, setPageIndex] = useState(1);
    const { services, isLoading, isError } = useGetServices(category_id, catalog_type, pageIndex)

    if (isLoading || isError) return <><Placeholder columns={[{ col: 12, count: 10, height: 90 }]} isError={isError} /><div className="pt-5"></div></>

    return (
        <>
            <div>
                {services.data.map((service: any) => (
                    <CommonService key={service.id} service={service} catalog_type={catalog_type} />
                ))}
            </div>
            <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} paging={services.paging} />
        </>
    )
}
