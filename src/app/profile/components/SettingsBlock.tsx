"use client";

import { useState } from "react";
import { changePassword } from "@/services/auth";
import { ShowPassword } from "@/app/components/common/ShowPassword";

export default function SettingsBlock({ patientID }: { patientID: string }) {
  const [formErrorMessage, setformErrorMessage] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const onSubmitHander = async (event: any) => {
    event.preventDefault();

    const current_password = event.target.current_password.value;
    const new_password = event.target.new_password.value;
    const confirm_new_password = event.target.confirm_new_password.value;

    if (current_password == new_password) {
      setformErrorMessage("Новый пароль не должен совпадать со старым.");
      return;
    }

    if (new_password != confirm_new_password) {
      setformErrorMessage("Пароли не совпадают.");
      return;
    }

    const { data, status } = await changePassword(patientID, current_password, new_password);

    if (status == 403) {
      setformErrorMessage("Текущий пароль введен неверно.");
      return;
    }

    if (status == 422) {
      setformErrorMessage("Введите надежный пароль. Пароль должен содержать не менее 6 символов, как минимум одну заглавную и одну строчную букву и одну цифру");
      return;
    }

    setFormSuccess(true);
    event.target.reset();
  };

  return (
    <div className="col">
      <div className="bg-white rounded-3 shadow p-3 p-sm-4 p-md-5 mb-3">
        <h1 className="fs-3 mb-3 mb-sm-4">Сменить пароль</h1>
        <div className="row">
          <div className="col-md-7 col-xl-6 col-xxl-5">
            <form onSubmit={onSubmitHander}>
              <div className="input-group mb-3 mb-sm-4">
                <div className="form-floating">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    name="current_password"
                    id="currentPassword"
                    className="form-control"
                    placeholder="Текущий пароль"
                    required
                  />
                  <label htmlFor="currentPassword">Текущий пароль</label>
                </div>
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={(_) => setShowCurrentPassword(!showCurrentPassword)}
                >
                  <ShowPassword show={showCurrentPassword} />
                </span>
              </div>

              <div className="input-group mb-3 mb-sm-4">
                <div className="form-floating">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    name="new_password"
                    className="form-control"
                    placeholder="Новый пароль"
                    required
                  />
                  <label htmlFor="newPassword">Новый пароль</label>
                </div>
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={(_) => setShowNewPassword(!showNewPassword)}
                >
                  <ShowPassword show={showNewPassword} />
                </span>
              </div>

              <div className="input-group mb-3 mb-sm-4">
                <div className="form-floating">
                  <input
                    type={showConfirmNewPassword ? "text" : "password"}
                    id="confirmNewPassword"
                    name="confirm_new_password"
                    className="form-control"
                    placeholder="Повторите новый пароль"
                    required
                  />
                  <label htmlFor="confirmNewPassword">Повторите новый пароль</label>
                </div>
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={(_) => setShowConfirmNewPassword(!showConfirmNewPassword)}
                >
                  <ShowPassword show={showConfirmNewPassword} />
                </span>
              </div>

              {formErrorMessage ? (
                <div className="alert alert-danger fs-8 alert-dismissible fade show" role="alert">
                  <strong>Ошибка! </strong>
                  {formErrorMessage}
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => {
                      setformErrorMessage("");
                    }}
                  ></button>
                </div>
              ) : null}

              {formSuccess ? (
                <div className="alert alert-success fs-8 alert-dismissible fade show" role="alert">
                  <strong>Получилось! </strong>
                  Пароль успешно изменен.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => {
                      setFormSuccess(false);
                    }}
                  ></button>
                </div>
              ) : null}

              <button className="btn btn-danger btn-form" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
