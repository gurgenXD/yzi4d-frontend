import Image from "next/image";
import Link from "next/link";
import ErrorImg from "@/assets/error-img.png";

export default function NotFound() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container h-100 pt-4 pt-md-5 pt-lg-6">
          <div className="h-100 row align-items-end">
            <div className="col-md-6">
              <div className="mb-4 mb-sm-6">
                <div className="fs-4 text-secondary text-uppercase">Ошибка</div>
                <div className="error-code fw-black lh-1 text-danger mb-3">404</div>
                <p className="error-text mb-4 mb-sm-5">
                  Запрашиваемая страница не существует. Возможно, она была удалена или в запросе был
                  указан неверный адрес страницы.
                </p>

                <Link href="/" className="btn btn-primary">
                  Перейти на главную
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
