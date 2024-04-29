"use client";

import { login } from "@/services/auth";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShowPassword } from "@/app/components/common/ShowPassword";

export default function LoginForm() {
  const [formSent, setFormSent] = useState(-1);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHander = async (event: any) => {
    event.preventDefault();

    const { data, status } = await login(
      event.target.username.value.replaceAll(" ", ""),
      event.target.password.value
    );

    if (status != 200) {
      setFormSent(0);
      return;
    }

    router.push(`/profile/${data.user_id}`);
  };

  return (
    <form className="mb-4" onSubmit={onSubmitHander}>
      <div className="form-floating mb-3 mb-sm-4">
        <IMaskInput
          mask="+{7} (000) 000-00-00"
          className="form-control form-control__gra input-phone"
          id="loginPhone"
          placeholder="Ваш телефон"
          name="username"
          pattern=".{16}"
          required
        />
        <label htmlFor="loginPhone">Ваш телефон</label>
      </div>

      <div className="input-group mb-3 mb-sm-4">
        <div className="form-floating">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control form-control__gra"
            id="loginPassword"
            placeholder="Пароль"
            name="password"
            required
          />
          <label htmlFor="loginPhone">Пароль</label>
        </div>
        <span
          className="input-group-text"
          style={{ cursor: "pointer" }}
          onClick={(_) => setShowPassword(!showPassword)}
        >
          <ShowPassword show={showPassword} />
        </span>
      </div>

      {/* <div className="form-check mb-3 mb-sm-4">
        <input className="form-check-input" type="checkbox" value="" id="loginRemember" />
        <label className="form-check-label" htmlFor="loginRemember">
          Запомнить меня
        </label>
      </div> */}

      {formSent == 0 ? (
        <div className="alert alert-danger fs-8 alert-dismissible fade show" role="alert">
          <strong>Ошибка! </strong>
          Неверный логин или пароль
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setFormSent(-1);
            }}
          ></button>
        </div>
      ) : null}

      <button className="btn btn-danger btn-form w-100" type="submit">
        Войти
      </button>
    </form>
  );
}
