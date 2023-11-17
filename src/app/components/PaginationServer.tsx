function getPagingUrl(page: string, searchParams: URLSearchParams) {
    searchParams.set("page", page)
    return searchParams.toString()
}


export default function Pagination({ url, paging, urlSearchParams }: any) {
    return (
        <div className="pt-5">
            {(paging.total_pages > 1) ?
                <ul className="pagination justify-content-center justify-content-sm-end">
                    {(paging.has_prev) ?
                        <li className="page-item" key="prev-page">
                            <a className="page-link" href={
                                url + "?" + getPagingUrl((paging.current_page - 1).toString(), urlSearchParams)
                            }>
                                <span className="icon">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                                        <path
                                            d="M67.08,167.55c-4.17-4.16-4.18-10.91-.02-15.08,0,0,.01-.01,.02-.02L164.91,54.64c12.5-12.49,12.51-32.76,.01-45.26-12.49-12.5-32.76-12.51-45.26-.01L21.83,107.2c-29.1,29.18-29.1,76.42,0,105.6l97.83,97.83c12.5,12.49,32.76,12.49,45.26-.01,12.49-12.5,12.49-32.76-.01-45.26l-97.83-97.81Z" />
                                    </svg>
                                </span>
                            </a>
                        </li>
                        : null
                    }
                    {Array.from({ length: paging.total_pages }, (_, i) => i + 1).map((page, _) =>
                        <>
                            {(new Set([paging.current_page - 1, paging.current_page, paging.current_page + 1, 1, paging.total_pages]).has(page)) ?
                                <>
                                    {(page == paging.current_page - 1 && page - 2 >= 1) ?
                                        <li className="page-item disabled" key="dis-pre"><a className="page-link" href="#">...</a></li>
                                        : null
                                    }

                                    <li className={"page-item" + ((page == paging.current_page) ? " active" : "")
                                    } key={page}><a className="page-link" href={
                                        url + "?" + getPagingUrl(page.toString(), urlSearchParams)
                                    }>{page}</a></li>

                                    {(page == paging.current_page + 1 && page + 2 <= paging.total_pages) ?
                                        <li className="page-item disabled" key="dis-post"><a className="page-link" href="#">...</a></li>
                                        : null
                                    }
                                </>
                                : null
                            }
                        </>)
                    }

                    {(paging.has_next) ?
                        <li className="page-item" key="next-page">
                            <a className="page-link" href={
                                url + "?" + getPagingUrl((paging.current_page + 1).toString(), urlSearchParams)
                            }>
                                <span className="icon">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.29 320.01">
                                        <path
                                            d="M152.46,107.2L54.63,9.37c-12.5-12.49-32.76-12.49-45.26,.01-12.49,12.5-12.49,32.76,.01,45.26l97.83,97.81c4.17,4.16,4.18,10.91,.02,15.08,0,0-.01,.01-.02,.02L9.38,265.37c-12.5,12.49-12.51,32.76-.01,45.26s32.76,12.51,45.26,.01l97.83-97.83c29.1-29.18,29.1-76.42,0-105.6Z" />
                                    </svg>
                                </span>
                            </a>
                        </li>
                        : null
                    }
                </ul>
                : null
            }
        </div>
    )
}
