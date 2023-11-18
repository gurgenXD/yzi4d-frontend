'use client'

import { useGetCategories } from '@/requests/client'
import { Placeholder } from "@/app/components/common/Placeholder"


export default function HeaderCategories() {
    const { categories, isLoading, isError } = useGetCategories("services")

    if (isLoading || isError) return <Placeholder columns={[{ col: 12, count: 1, height: 300 }]} isError={isError} />

    return (
        <>
            {categories.map((category: any) => (
                <li key={category.id}><a className="dropdown-item" href={"/catalog/services/categories/" + category.id}>{category.name}</a></li>
            ))}
        </>
    )
}
