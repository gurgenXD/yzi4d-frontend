"use client";

import { useEffect, useState } from "react";

export default function Cookies() {
  let hideCookiesAlert = true;
  const [showCookiesAlert, setShowCookiesAlert] = useState(!hideCookiesAlert);

  useEffect(() => {
    var hideCookiesAlert = Boolean(localStorage.getItem("hideCookiesAlert"));
    setShowCookiesAlert(!hideCookiesAlert);
  }, []);

  return showCookiesAlert ? (
    <div
      className="cookie-alert alert alert-light alert-dismissible shadow-lg rounded-3 p-3 p-sm-4 fade show"
      role="alert"
    >
      <div className="row gy-3 gx-4 align-items-center">
        <div className="col-sm">
          <div className="fs-8">
            Этот веб-сайт использует cookies, чтобы улучшить ваш пользовательский опыт. Посмотрите
            нашу
            <a href="/documents"> политику конфиденциальности</a>, чтобы узнать больше.
          </div>
        </div>

        <div className="col-auto">
          <button
            type="button"
            onClick={() => localStorage.setItem("hideCookiesAlert", String(true))}
            className="btn btn-danger py-2 px-3"
            data-bs-dismiss="alert"
            aria-label="Close"
          >
            Хорошо
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
