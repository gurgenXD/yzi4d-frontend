import useSWR from 'swr'


export async function getSpecialists(searchParams: URLSearchParams) {
    const specialists = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/specialists?${searchParams.toString()}`, { cache: 'no-store' },
    ).then((res) => res.json())

    return specialists
}


export function getShuffledSpecialists() {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/specialists/shuffled`,
        fetcher
    )

    return {
        specialists: data,
        isLoading,
        isError: error,
    }
}


export async function getSpecializations() {
    const specializations = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/specialists/specializations`, { cache: 'no-store' },
    ).then((res) => res.json())

    return specializations
}


export async function getSpecialist(id: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/specialists/${id}`, { cache: 'no-store' },
    )

    const errorCodeSpec = res.ok ? false : res.status
    return { errorCodeSpec, specialist: await res.json() }
}


export async function getSpecialistServices(id: string, searchParams: URLSearchParams) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/specialists/${id}/services?${searchParams.toString()}`, { cache: 'no-store' },
    )

    const errorCodeServ = res.ok ? false : res.status
    return { errorCodeServ, services: await res.json() }
}


export async function getServices(categoryID: string, catalog_type: string, searchParams: URLSearchParams) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalog_type}/categories/${categoryID}?${searchParams.toString()}`, { cache: 'no-store' },
    )
    const errorCode = res.ok ? false : res.status
    return { errorCode, services: await res.json() }
}


export async function getService(id: string, category_id: string, catalog_type: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalog_type}/categories/${category_id}/items/${id}`, { cache: 'no-store' },
    )

    const errorCode = res.ok ? false : res.status
    return { errorCode, service: await res.json() }
}


export async function getCategories(catalogType: string) {
    const categories = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalogType}/categories`, { cache: 'no-store' },
    ).then((res) => res.json())

    return categories
}

export async function getOffices() {
    const offices = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/contacts/offices`, { cache: 'no-store' },
    ).then((res) => res.json())

    return offices
}
