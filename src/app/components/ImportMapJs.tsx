'use client'
import { useEffect } from "react";

export default function ImportMapJS() {
    useEffect(() => {
        require("../../../public/js/maps.js");
    }, []);
    return null;
}
