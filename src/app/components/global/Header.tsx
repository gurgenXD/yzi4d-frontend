import HeaderOffices from "@/app/components/global/HeaderOffices";
import Link from "next/link";

export default async function Header() {
  return (
    <div className="d-none d-lg-block bg-light-blue">
      <div className="container">
        <div className="d-flex">
          <div className="dropdown">
            <Link
              className="dropdown-toggle link-secondary fs-7 py-2"
              href="/contacts"
              role="button"
              aria-expanded="false"
            >
              <span className="icon me-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 11">
                  <path d="M5,2.75c-1.1,0-1.99,.82-1.99,1.83s.89,1.83,1.99,1.83,1.99-.82,1.99-1.83-.89-1.83-1.99-1.83Zm0,2.75c-.55,0-1-.41-1-.92s.45-.92,1-.92,1,.41,1,.92-.44,.92-1,.92Z" />
                  <path d="M5,11c-.85,0-1.65-.37-2.14-1.01C.96,7.58,0,5.77,0,4.61,0,2.06,2.24,0,5,0s5,2.06,5,4.61c0,1.16-.96,2.98-2.86,5.38-.5,.64-1.29,1.01-2.14,1.01ZM5,1c-2.16,0-3.91,1.62-3.92,3.61,0,.92,.94,2.62,2.65,4.8,.51,.65,1.48,.78,2.18,.32,.13-.09,.25-.2,.35-.32,1.71-2.17,2.65-3.88,2.65-4.8,0-1.99-1.76-3.61-3.92-3.61h.01Z" />
                </svg>
              </span>
              Адреса клиник
              <span className="caret ms-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.07 52.25">
                  <path d="M49.75,49.82c-3.29,3.25-8.58,3.24-11.85-.03L2.46,14.34C-.82,11.06-.82,5.74,2.46,2.46,5.74-.82,11.06-.82,14.34,2.46l29.7,29.7L73.73,2.46c3.28-3.28,8.6-3.28,11.88,0,3.28,3.28,3.28,8.6,0,11.88,0,0-24.32,24.07-35.86,35.48h0Z" />
                </svg>
              </span>
            </Link>

            <ul className="dropdown-menu">
              <HeaderOffices />
            </ul>
          </div>

          <Link
            href=""
            title=""
            id="specialButton"
            className="bvi-open bvi-hide btn btn-secondary d-flex align-items-center btn-sm rounded-0 ms-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 11.98"
              height="14px"
              className="me-2"
            >
              <path d="M14.54,4.34c-.97-1.62-3.17-4.34-7.04-4.34S1.43,2.72,.46,4.34C-.15,5.35-.15,6.63,.46,7.65c.97,1.62,3.18,4.34,7.04,4.34s6.07-2.72,7.04-4.34c.61-1.02,.61-2.29,0-3.31Zm-1.06,2.64c-.83,1.39-2.72,3.73-5.98,3.73S2.36,8.37,1.53,6.98c-.36-.61-.36-1.36,0-1.97,.83-1.39,2.72-3.73,5.98-3.73s5.15,2.34,5.98,3.73c.36,.61,.36,1.36,0,1.97Z" />
              <path d="M7.5,2.78c-1.73,0-3.12,1.44-3.12,3.21s1.4,3.21,3.12,3.21,3.12-1.44,3.12-3.21c0-1.77-1.4-3.2-3.12-3.21Zm0,5.13c-1.03,0-1.88-.86-1.88-1.93s.84-1.92,1.88-1.92,1.88,.86,1.88,1.92-.84,1.93-1.88,1.93Z" />
            </svg>
            Версия для слабовидящих
          </Link>
        </div>
      </div>
    </div>
  );
}
