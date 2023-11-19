'use client'
import useSWR from 'swr'


export function useGetMainSpecialists() {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/specialists/shuffled`,
        fetcher
    )

    return { specialists: data, isLoading, isError: error }
}


export function useGetMainCategories(catalog_type: string) {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalog_type}/categories`,
        fetcher
    )

    return { categories: data, isLoading, isError: error }
}

export function useGetMainPromotions() {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/promotions?for_main=true`,
        fetcher
    )

    return { promotions: data, isLoading, isError: error }
}


export function useGetServices(categoryId: string, catalog_type: string, search_query: string, page: number) {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        () => `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalog_type}/categories/${categoryId}/items?page=${page}&search_query=${search_query}`,
        fetcher
    )

    return { services: data, isLoading, isError: error }
}


export function useGetSpecialistServices(id: string, page: number) {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/specialists/${id}/services?page=${page}`,
        fetcher
    )

    return { services: data, isLoading, isError: error }
}


export function useGetOffices() {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/contacts/offices`,
        fetcher
    )

    return { offices: data, isLoading, isError: error }
}


export function useGetCategories(categoryId: string, setCategoryId: any, catalog_type: string, search_query: string) {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalog_type}/categories?search_query=${search_query}`,
        fetcher,
        {
            onSuccess: (data, _, __) => {
                const categoryIds = data ? data.map((obj: any) => obj.id) : []
                setCategoryId(categoryIds.includes(categoryId) ? categoryId : (categoryIds.length ? categoryIds[0] : "-1"))
            }
        }
    )

    return { categories: data, isLoading, isError: error }
}
