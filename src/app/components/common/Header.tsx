import Image from 'next/image'
import BlindBlock from '@/app/components/BlindBlock'
import HeaderCategoriesBlock from '@/app/components/common/HeaderCategoriesBlock'
import HeaderOfficesBlock from './HeaderOfficesBlock'


export default async function Header() {
    return (
        <>
            <div className="d-none d-lg-block bg-light-blue">
                <div className="container">
                    <div className="d-flex">
                        <div className="dropdown">
                            <a className="dropdown-toggle link-secondary fs-7 py-2" href="/contacts" role="button" aria-expanded="false">
                                <span className="icon me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 11">
                                        <path
                                            d="M5,2.75c-1.1,0-1.99,.82-1.99,1.83s.89,1.83,1.99,1.83,1.99-.82,1.99-1.83-.89-1.83-1.99-1.83Zm0,2.75c-.55,0-1-.41-1-.92s.45-.92,1-.92,1,.41,1,.92-.44,.92-1,.92Z" />
                                        <path
                                            d="M5,11c-.85,0-1.65-.37-2.14-1.01C.96,7.58,0,5.77,0,4.61,0,2.06,2.24,0,5,0s5,2.06,5,4.61c0,1.16-.96,2.98-2.86,5.38-.5,.64-1.29,1.01-2.14,1.01ZM5,1c-2.16,0-3.91,1.62-3.92,3.61,0,.92,.94,2.62,2.65,4.8,.51,.65,1.48,.78,2.18,.32,.13-.09,.25-.2,.35-.32,1.71-2.17,2.65-3.88,2.65-4.8,0-1.99-1.76-3.61-3.92-3.61h.01Z" />
                                    </svg>
                                </span>

                                Адреса клиник

                                <span className="caret ms-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
                                        <path
                                            d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
                                    </svg>
                                </span>
                            </a>

                            <ul className="dropdown-menu">
                                <HeaderOfficesBlock />
                            </ul>
                        </div>

                        <BlindBlock />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm">
                <div className="container">
                    <div className="d-flex align-items-center py-2 pt-lg-4 pb-lg-3">
                        <div className="d-flex align-items-end">
                            <a href="/" title="" className="d-flex me-3 me-lg-5"><img className="logo-header" src="/img/logo.svg" alt="" /></a>

                            <div>
                                <a href="tel:+79288284001" title="" className="phone-header link-secondary fw-extrabold d-flex mb-1">+7 (928) 828-40-01</a>
                                <div className="schedule d-flex">
                                    <span className="text-white bg-danger px-1 me-1">без выходных</span>
                                    с 7:00 до 20:00
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center d-none d-lg-flex ms-auto">
                            <div className="col-auto">
                                <a className="profile-link link-secondary text-nowrap spaced-link fs-7" href="https://lk.yzi4d.ru" target="_blank">
                                    <span className="icon me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14">
                                            <path
                                                d="M5.5,7c2.02,0,3.67-1.57,3.67-3.5S7.52,0,5.5,0,1.83,1.57,1.83,3.5s1.64,3.5,3.67,3.5Zm0-5.83c1.35,0,2.44,1.04,2.44,2.33s-1.1,2.33-2.44,2.33-2.44-1.04-2.44-2.33,1.1-2.33,2.44-2.33Zm0,7c-3.04,0-5.5,2.35-5.5,5.25,0,.32,.27,.58,.61,.58s.61-.26,.61-.58c0-2.26,1.92-4.08,4.28-4.08s4.28,1.83,4.28,4.08c0,.32,.28,.58,.61,.58s.61-.26,.61-.58c0-2.9-2.46-5.25-5.5-5.25Z" />
                                        </svg>
                                    </span>

                                    Личный кабинет
                                </a>
                            </div>

                            {/* <div className="col-auto">
                                <div className="dropdown">
                                    <a className="dropdown-toggle profile-link link-secondary fs-7 py-2" href="profile.html" role="button" aria-expanded="false">
                                        <span className="icon me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14">
                                                <path
                                                    d="M5.5,7c2.02,0,3.67-1.57,3.67-3.5S7.52,0,5.5,0,1.83,1.57,1.83,3.5s1.64,3.5,3.67,3.5Zm0-5.83c1.35,0,2.44,1.04,2.44,2.33s-1.1,2.33-2.44,2.33-2.44-1.04-2.44-2.33,1.1-2.33,2.44-2.33Zm0,7c-3.04,0-5.5,2.35-5.5,5.25,0,.32,.27,.58,.61,.58s.61-.26,.61-.58c0-2.26,1.92-4.08,4.28-4.08s4.28,1.83,4.28,4.08c0,.32,.28,.58,.61,.58s.61-.26,.61-.58c0-2.9-2.46-5.25-5.5-5.25Z" />
                                            </svg>
                                        </span>

                                        <span className="text-truncate">Александр Сергеевич Ю.</span>

                                        <span className="caret ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
                                                <path
                                                    d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
                                            </svg>
                                        </span>
                                    </a>

                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a className="dropdown-item" href="profile-visits.html">
                                                <span className="icon me-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path
                                                            d="M512,192c.15-35.35-28.39-64.12-63.73-64.26s-64.12,28.39-64.26,63.73c-.11,27.22,17,51.53,42.67,60.6v89.26c0,70.69-57.31,128-128,128s-128-57.31-128-128v-1.71c73.38-10.65,127.86-73.48,128-147.63V106.67C298.6,47.79,250.88,.07,192,0c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33c35.35,0,64,28.65,64,64v85.33c0,58.91-47.76,106.67-106.67,106.67s-106.67-47.76-106.67-106.67V106.67c0-35.35,28.65-64,64-64,11.78,0,21.33-9.55,21.33-21.33S118.45,0,106.67,0C47.79,.07,.07,47.79,0,106.67v85.33c.14,74.15,54.62,136.98,128,147.63v1.71c0,94.26,76.41,170.67,170.67,170.67s170.67-76.41,170.67-170.67v-89.26c25.48-9.01,42.55-33.05,42.67-60.07Z" />
                                                    </svg>
                                                </span>

                                                Посещения
                                            </a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="profile-analyses.html">
                                                <span className="icon me-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298.67 512">
                                                        <path
                                                            d="M277.33,0H21.33C9.55,0,0,9.55,0,21.33s9.55,21.33,21.33,21.33h21.33V405.33c0,58.91,47.76,106.67,106.67,106.67s106.67-47.76,106.67-106.67V42.67h21.33c11.78,0,21.33-9.55,21.33-21.33S289.12,0,277.33,0ZM149.33,469.33c-35.35,0-64-28.65-64-64V192H213.33v213.33c0,35.35-28.65,64-64,64ZM213.33,149.33H85.33V42.67H213.33v106.67Z" />
                                                    </svg>
                                                </span>

                                                Анализы
                                            </a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="profile-settings.html">
                                                <span className="icon me-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.79 512">
                                                        <path
                                                            d="M159.9,512C71.53,511.94-.06,440.26,0,351.9c.05-71.56,47.6-134.39,116.46-153.86,27.01-7.73,55.6-8.09,82.79-1.02L367.96,28.35C386.05,10.14,410.68-.07,436.36,0h0c41.65,.04,75.4,33.79,75.43,75.43,.07,25.67-10.13,50.31-28.33,68.42l-14.34,14.34c-8.02,7.97-18.86,12.45-30.17,12.48h-33.83v21.33c0,23.56-19.1,42.67-42.67,42.67h-21.33v33.83c.03,11.32-4.47,22.18-12.5,30.17l-13.87,13.87c7.1,27.18,6.76,55.77-1,82.77-17.86,62.93-72.1,108.74-137.13,115.82-5.56,.58-11.14,.87-16.73,.87Zm0-277.33c-64.8-.06-117.38,52.42-117.45,117.22-.06,64.8,52.42,117.38,117.22,117.45,52.6,.05,98.81-34.91,113.06-85.55,6.66-23.11,5.91-47.73-2.13-70.4-2.68-7.72-.71-16.3,5.08-22.08l22.78-22.81v-33.83c0-23.56,19.1-42.67,42.67-42.67h21.33v-21.33c0-23.56,19.1-42.67,42.67-42.67h33.83l14.34-14.34c10.17-10.12,15.87-23.88,15.83-38.23-.01-18.08-14.66-32.74-32.75-32.77-14.36-.04-28.13,5.67-38.25,15.85L220.4,236.22c-5.79,5.78-14.37,7.75-22.1,5.06-12.37-4.36-25.39-6.59-38.51-6.61h.11Zm-53.44,149.33c0,11.78,9.55,21.33,21.33,21.33s21.33-9.55,21.33-21.33-9.55-21.33-21.33-21.33-21.33,9.55-21.33,21.33Z" />
                                                    </svg>
                                                </span>

                                                Сменить пароль
                                            </a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span className="icon me-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.92 512">
                                                        <path
                                                            d="M487.02,195.67l-82.75-82.75c-8.48-8.18-21.98-7.95-30.17,.53-7.98,8.27-7.98,21.37,0,29.64l82.75,82.75c2.46,2.51,4.61,5.3,6.4,8.32-.32,0-.58-.17-.9-.17h0l-334.59,.68c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h0l334.46-.68c.6,0,1.09-.3,1.66-.34-1.89,3.61-4.29,6.93-7.12,9.86l-82.75,82.75c-8.48,8.18-8.71,21.69-.52,30.17s21.69,8.71,30.17,.52c.18-.17,.35-.35,.52-.52l82.75-82.75c33.31-33.32,33.31-87.34,0-120.66h.09Z" />
                                                        <path
                                                            d="M149.33,469.33h-42.67c-35.35,0-64-28.65-64-64V106.67c0-35.35,28.65-64,64-64h42.67c11.78,0,21.33-9.55,21.33-21.33S161.12,0,149.33,0h-42.67C47.79,.07,.07,47.79,0,106.67V405.33c.07,58.88,47.79,106.6,106.67,106.67h42.67c11.78,0,21.33-9.55,21.33-21.33,0-11.78-9.55-21.33-21.33-21.33Z" />
                                                    </svg>
                                                </span>

                                                Выход
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                            {/* <div className="col-auto">
                                <a href="appointment.html" className="btn btn-danger">Записаться</a>
                            </div> */}
                        </div>

                        <button
                            className="navbar-toggler spaced-link d-lg-none ms-auto"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#Offcanvas"
                            aria-expanded="false"
                            aria-label="Меню">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg d-none d-lg-flex">
                    <div className="container py-2 pt-lg-0 pb-lg-2">
                        <div className="collapse navbar-collapse position-relative">
                            <ul className="navbar-nav ms-n3 me-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/specialists">Специалисты</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
                                        Услуги

                                        <span className="caret ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
                                                <path
                                                    d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu"><HeaderCategoriesBlock /></ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/catalog/analyzes/categories/-1">Анализы</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/promotions">Спецпредложения</a>
                                </li>

                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="about.html" role="button" aria-expanded="false">
                                        Отделения и центры

                                        <span className="caret ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
                                                <path
                                                    d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="department.html">Центр кардионефрологии</a></li>
                                    </ul>
                                </li> */}

                                <li className="nav-item">
                                    <a className="nav-link" href="/contacts">Контакты</a>
                                </li>
                            </ul>

                            <div className="search d-none">
                                <div className="search-form-wrap">
                                    <form className="search-form">
                                        <input type="text" className="form-control search-form-input" id="autoComplete" placeholder="Найти..." />
                                        <button type="submit" className="btn btn-primary search-form-btn">Найти</button>
                                    </form>
                                </div>

                                <button type="button" className="search-toggle">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className="search-hide-icon">
                                        <path
                                            d="M10.59,9L17.67,1.92c.44-.44,.44-1.15,0-1.59s-1.15-.44-1.59,0h0l-7.08,7.08L1.92,.33C1.48-.11,.77-.11,.33,.33-.11,.77-.11,1.48,.33,1.92l7.08,7.08L.33,16.08c-.44,.44-.44,1.15,0,1.59,.44,.44,1.15,.44,1.59,0l7.08-7.08,7.08,7.08c.44,.44,1.15,.44,1.59,0,.44-.44,.44-1.15,0-1.59l-7.08-7.08h0Z" />
                                    </svg>


                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className="search-show-icon">
                                        <path
                                            d="M17.67,16.08l-3.48-3.49c2.61-3.48,1.9-8.42-1.59-11.03S4.18-.33,1.57,3.16C-1.04,6.64-.33,11.58,3.16,14.19c2.8,2.09,6.64,2.09,9.44,0l3.49,3.49c.44,.44,1.15,.44,1.59,0,.44-.44,.44-1.15,0-1.59h0Zm-9.76-2.57c-3.1,0-5.61-2.51-5.61-5.61S4.81,2.3,7.91,2.3s5.61,2.51,5.61,5.61c0,3.09-2.51,5.6-5.61,5.61h0Z" />
                                    </svg>
                                </button>
                            </div>

                            {/* <div className="search">
                                <div className="search-wrap">
                                    <div className="search-form-container">
                                        <form className="search-form">
                                            <input type="text" className="form-control search-form-input" placeholder="Найти..." />
                                            <button type="submit" className="btn btn-primary search-form-btn">Найти</button>
                                        </form>
                                    </div>

                                    <div className="search-toggle">
                                        <button type="button" className="search-toggle-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="18px" className="search__close">
                                                <path
                                                    d="M301.25,256L502.62,54.64c12.5-12.5,12.5-32.77,0-45.27-12.5-12.5-32.77-12.5-45.27,0h0L256,210.75,54.64,9.38C42.14-3.13,21.87-3.13,9.38,9.38s-12.5,32.77,0,45.27L210.75,256,9.38,457.36c-12.5,12.5-12.5,32.77,0,45.27s32.77,12.5,45.27,0l201.36-201.38,201.36,201.38c12.5,12.5,32.77,12.5,45.27,0,12.5-12.5,12.5-32.77,0-45.27l-201.38-201.36Z" />
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.96 512" height="18px" className="search__open">
                                                <path
                                                    d="M502.61,457.5l-99.1-99.14c74.15-99.09,53.93-239.53-45.16-313.67S118.83-9.25,44.69,89.84C-29.46,188.93-9.25,329.37,89.84,403.52c79.6,59.56,188.92,59.56,268.52,0l99.14,99.14c12.46,12.46,32.66,12.46,45.11,0,12.46-12.46,12.46-32.66,0-45.11v-.04Zm-277.69-73.12c-88.07,0-159.46-71.39-159.46-159.46S136.86,65.47,224.93,65.47s159.46,71.39,159.46,159.46c-.09,88.03-71.43,159.36-159.46,159.46Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </nav >
            </div>
        </>
    )
}
