"use client";

import { setCookie } from "cookies-next";

export default function CookiesAccept() {
  return (
    <div className="col-auto">
      <button
        type="button"
        onClick={() => setCookie("hideCookiesAlert", true)}
        className="btn btn-danger py-2 px-3"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        Хорошо
      </button>
    </div>
  );
}
