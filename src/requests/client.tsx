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


export function useGetMainCategories(catalogType: string) {
    const fetcher = async (url: any) => await fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_YZI4D_HOST}/catalog/${catalogType}/categories`,
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
