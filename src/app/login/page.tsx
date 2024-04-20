import LoginForm from "@/app/login/components/LoginForm";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Войти в личный кабинет - Поликлиника УЗИ 4Д",
};

export default async function Login() {
  const userId = getCookie("userId", { cookies });
  const accessToken = getCookie("accessToken", { cookies });

  if (userId && accessToken) {
    redirect(`/profile/${userId}`);
  }

  return (
    <>
      <main role="main" className="flex-shrink-0">
        <div className="overflow-hidden">
          <div className="container py-4 py-lg-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Главная</a>
              </li>
              <li className="breadcrumb-item active">Войти в личный кабинет</li>
            </ol>

            <div className="row gy-5 gy-lg-0 gx-xl-5 gx-xxl-6">
              <div className="col-xl-4 col-lg-5">
                <div className="bg-white shadow rounded-3 p-3 p-sm-4 p-md-5">
                  <h1 className="fs-4 mb-3 mb-sm-4">Войти в личный кабинет</h1>

                  <LoginForm />

                  <a href="#restorePassModal" data-bs-toggle="modal" className="">
                    Забыли пароль?
                  </a>
                </div>
              </div>

              <div className="col my-lg-auto">
                <h2 className="fs-4 fw-extrabold mb-4">
                  Как зарегистрироваться и получить пароль от личного кабинета?
                </h2>

                <div className="row gy-3 gx-4">
                  <div className="col-xl-4">
                    <div className="bg-light-blue rounded-3 h-100 d-flex flex-column p-4">
                      <div className="card-title text-secondary fw-bold mb-2">
                        В регистратуре клиники
                      </div>
                      <p className="card-text">
                        Просто подойдите к стойке и попросите сотрудника зарегистрировать вам личный
                        кабинет
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="bg-light-blue rounded-3 h-100 d-flex flex-column p-4">
                      <div className="card-title text-secondary fw-bold mb-2">Через колл-центр</div>
                      <p className="card-text">
                        Сообщите оператору, что хотите получить доступ к личному кабинету.
                      </p>
                      <a
                        href="tel:+79288284001"
                        className="fw-bold link-danger spaced-link mt-auto"
                      >
                        +7 (928) 828-40-01
                      </a>
                    </div>
                  </div>

                  {/* <div className="col-xl-4">
                    <div className="bg-light-blue rounded-3 h-100 d-flex flex-column p-4">
                      <div className="card-title text-secondary fw-bold mb-2">
                        С помощью бота в Telegram
                      </div>
                      <p className="card-text">Напишите нашему боту и следуйте инструкциям.</p>
                      <a href="#" className="fw-bold link-danger spaced-link mt-auto">
                        @uzi4dbot
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div
        className="modal fade"
        id="restorePassModal"
        tabIndex={-1}
        aria-labelledby="restorePassModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0 pt-3 pt-sm-4 px-3 px-sm-4 pb-0">
              <h5 className="modal-title" id="restorePassModalLabel">
                Как восстановить пароль
              </h5>
              <button
                type="button"
                className="btn-close mt-1"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body px-3 px-sm-4 pb-3 pb-sm-4">
              <ul className="ps-4 m-0">
                <li>
                  <p>
                    Обратитесь в колл-центр по номеру:
                    <a href="tel:+79288284001" className="fw-semibold text-nowrap">
                      <span> +7 (928) 828-40-01</span>
                    </a>
                  </p>
                </li>

                {/* <li>
                  <p>
                    Или напишите нашему боту в Telegram:
                    <a href="#" className="fw-semibold text-nowrap">
                      @uzi4dbot
                    </a>
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
