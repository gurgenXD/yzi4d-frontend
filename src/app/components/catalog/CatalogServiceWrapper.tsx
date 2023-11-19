'use client'

import CatalogServices from "@/app/components/catalog/CatalogServices"
import { useState } from "react"


export default function CatalogServicesWrapper({ catalogType }: { catalogType: string }) {
    const [searchQuery, setSearchQuery] = useState("");

    const onSubmitHander = (event: any) => {
        event.preventDefault()
        setSearchQuery(event.target.search_query.value)
    }

    return (
        <>
            <div className="bg-white rounded-3 shadow p-3 mb-md-5 mb-4">
                <form onSubmit={onSubmitHander}>
                    <div className="row align-items-end g-3">
                        <div className="col-lg col-md-6">
                            <input type="text" className="form-control form-control-sm"
                                id="" name="search_query" placeholder="Введите запрос" />
                        </div>

                        <div className="col-lg-auto col-md-6">
                            <button className="btn btn-danger btn-sm w-100 text-nowrap">Поиск</button>
                        </div>
                    </div>
                </form>
            </div>
            <CatalogServices catalogType={catalogType} searchQuery={searchQuery} />
        </>
    )
}