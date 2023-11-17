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


export function useGetCategories(catalog_type: string) {
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


export function useGetServices(category_id: string, catalog_type: string, page: number) {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalog_type}/categories/${category_id}?page=${page}`,
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
