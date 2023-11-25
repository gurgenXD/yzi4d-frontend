import { cookies } from "next/headers";
import CookiesAccept from "@/app/components/cookies/CookiesAccept";
import Link from "next/link";

export default function Cookies() {
  const cookieStore = cookies();
  const hideCookiesAlert = cookieStore.get("hideCookiesAlert");

  return !Boolean(hideCookiesAlert) ? (
    <div
      className="cookie-alert alert alert-light alert-dismissible shadow-lg rounded-3 p-3 p-sm-4 fade show"
      role="alert"
    >
      <div className="row gy-3 gx-4 align-items-center">
        <div className="col-sm">
          <div className="fs-8">
            Этот веб-сайт использует cookies, чтобы улучшить ваш пользовательский опыт. Посмотрите
            нашу
            <Link href="/documents"> политику конфиденциальности</Link>, чтобы узнать больше.
          </div>
        </div>

        <CookiesAccept />
      </div>
    </div>
  ) : null;
}
