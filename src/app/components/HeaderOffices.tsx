'use client'

import { useGetOffices } from '@/requests/client'
import { Placeholder } from "@/app/components/common/Placeholder"


export default function HeaderOffices() {
    const { offices, isLoading, isError } = useGetOffices()

    if (isLoading || isError) return <Placeholder columns={[{ col: 12, count: 1, height: 100 }]} isError={isError} />

    return (
        <>
            {offices.map((office: string) => (
                <li key={office}><a className="dropdown-item fs-8" href="#">{office}</a></li>
            ))}
        </>
    )
}
