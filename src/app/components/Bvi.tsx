'use client'

import { useEffect } from 'react'
import isvek from '../../../public/blind/js/bvi'


export default function Bvi() {

    useEffect(() => {
        new isvek.Bvi()
    }, []);

    return <></>
}
