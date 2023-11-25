"use client";

import { useCookies } from "react-cookie";

export default function CookiesAccept() {
  const [_, setCookie] = useCookies(["hideCookiesAlert"]);

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
