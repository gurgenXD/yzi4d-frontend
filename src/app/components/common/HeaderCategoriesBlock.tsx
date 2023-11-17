'use client'

import { useGetCategories } from '@/requests/client'
import { Placeholder, PlaceholderError } from "@/app/components/common/Placeholder"


export default function HeaderCategoriesBlock() {
    const { categories, isLoading, isError } = useGetCategories("services")

    if (isLoading) return <Placeholder height={300} />
    if (isError) return <PlaceholderError height={300} />

    return (
        <>
            {categories.map((category: any) => (
                <li key={category.id}><a className="dropdown-item" href={"/catalog/services/categories/" + category.id}>{category.name}</a></li>
            ))}
        </>
    )
}
