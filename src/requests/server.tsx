export async function getSpecialists(searchParams: URLSearchParams) {
    const specialists = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/specialists?${searchParams.toString()}`, { cache: 'no-store' },
    ).then((res) => res.json())

    return specialists
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


export async function getService(id: string, catalog_type: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalog_type}/services/${id}`, { cache: 'no-store' },
    )

    const errorCode = res.ok ? false : res.status
    return { errorCode, service: await res.json() }
}


export async function getPromotions() {
    const promotions = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/promotions`, { cache: 'no-store' },
    ).then((res) => res.json())

    return promotions
}


export async function getDocumentsCategories() {
    const categories = await fetch(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/documents`, { cache: 'no-store' },
    ).then((res) => res.json())

    return categories
}
