'use client'

import { useGetOffices } from '@/requests/client'
import { Placeholder, PlaceholderError } from "@/app/components/common/Placeholder"


export default function HeaderOfficesBlock() {
    const { offices, isLoading, isError } = useGetOffices()

    if (isLoading) return <Placeholder height={100} />
    if (isError) return <PlaceholderError height={100} />

    return (
        <>
            {offices.map((office: string) => (
                <li key={office}><a className="dropdown-item fs-8" href="#">{office}</a></li>
            ))}
        </>
    )
}
