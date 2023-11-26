"use client";

import Image from "next/image";
import Link from "next/link";
import ErrorImg from "@/assets/error-img.png";

export default function Error() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container h-100 pt-4 pt-md-5 pt-lg-6">
          <div className="h-100 row align-items-end">
            <div className="col-md-6">
              <div className="mb-4 mb-sm-6">
                <div className="fs-4 text-secondary text-uppercase">Ошибка</div>
                <div className="error-code fw-black lh-1 text-danger mb-3">503</div>
                <p className="error-text mb-4 mb-sm-5">
                  Сервер временно не может обработать ваш запрос по техническим причинам. Попробуйте
                  обновить страницу или вернуться позже.
                </p>

                <Link href="javascript:history.go(0)" className="btn btn-primary">
                  Перезагрузить сраницу
                </Link>
              </div>
            </div>

            <div className="col">
              <div className="text-end">
                <Image src={ErrorImg} alt="Ошибка" className="error-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
