'use client'
import { useEffect } from "react";

export default function ImportCustomJS() {
    useEffect(() => {
        require("../../../public/js/bootstrap.js");
        require("../../../public/js/app.tsx");
    }, []);
    return null;
}
