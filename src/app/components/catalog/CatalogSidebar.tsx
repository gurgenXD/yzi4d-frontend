export default function CatalogSidebar({ categories, categoryId, setCategoryId }: { categories: any, categoryId: string, setCategoryId: any }) {
    return (
        <div className="col-xxl-3 col-xl-4">
            <div className="offcanvas-xl offcanvas-start bg-white" tabIndex={-1} id="offcanvasFilters" aria-labelledby="offcanvasFiltersLabel">
                <div className="offcanvas-header pb-3">
                    <h5 className="offcanvas-title" id="offcanvasFiltersLabel">Услуги</h5>

                    <button
                        type="button"
                        className="btn-close ms-auto"
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#offcanvasFilters"
                        aria-label="Close"></button>
                </div>

                <div className="offcanvas-body pt-0">
                    <div className="bg-xl-white xl-shadow rounded-3 w-100 px-0 px-xl-4 py-0 py-xl-3">
                        <nav className="sidebar">
                            <ul className="nav">
                                {categories.map((category: any) => (
                                    <li key={category.id} className="nav-item has-submenu">
                                        <a className={`nav-link ${(category.id == categoryId) ? "active" : ""}`} onClick={() => setCategoryId(category.id)}>
                                            {category.name}

                                            {/* <span className="caret">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
                                                <path
                                                    d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
                                            </svg>
                                        </span> */}
                                        </a>

                                        {/* <ul className="submenu collapse">
                                        <li><a className="nav-link" href="services-category.html">УЗИ при беременности</a></li>
                                        <li><a className="nav-link" href="services-category.html">УЗИ предстательной железы</a></li>
                                        <li><a className="nav-link" href="services-category.html">УЗИ в педиатрии</a></li>
                                        <li><a className="nav-link" href="services-category.html">УЗИ сосудов</a></li>
                                        <li><a className="nav-link" href="services-category.html">УЗИ мочевыделительной системы</a></li>
                                        <li><a className="nav-link" href="services-category.html">УЗИ щитовидной железы</a></li>
                                    </ul> */}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
