"use client";

import { useState } from "react";
import { ShowPassword } from "@/app/components/common/ShowPassword";

export default function SettingsBlock() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  return (
    <div className="col">
      <div className="bg-white rounded-3 shadow p-3 p-sm-4 p-md-5 mb-3">
        <h1 className="fs-3 mb-3 mb-sm-4">Сменить пароль</h1>
        <div className="row">
          <div className="col-md-7 col-xl-6 col-xxl-5">
            <form method="POST">
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
