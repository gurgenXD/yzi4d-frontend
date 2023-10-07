'use client'
import { useEffect } from "react";

export default function ImportCustomJS() {
    useEffect(() => {
        require("../../../public/js/bootstrap.js");
        require("../../../public/js/app.js");
    }, []);

    return <>
        {/* <script type="text/javascript" src="/blind/js/bvi.min.js"></script>
        <script> var Bvi = new isvek.Bvi();</script> */}
    </>;
}
