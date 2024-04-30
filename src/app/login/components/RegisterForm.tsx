"use client";

import { generatePassword } from "@/services/auth";
import { IMaskInput } from "react-imask";
import { useState } from "react";

export default function RegisterForm() {
  const [formSent, setFormSent] = useState(-1);

  const onSubmitHander = async (event: any) => {
    event.preventDefault();

    const { data, status } = await generatePassword(
      event.target.username.value.replaceAll(" ", "")
    );

    if (status != 200) {
      setFormSent(0);
      return;
    }

    setFormSent(1);
    event.target.reset();
  };

  return (
    <form className="mb-4" onSubmit={onSubmitHander}>
      <div className="form-floating mb-3 mb-sm-4">
        <IMaskInput
          mask="+{7} (000) 000-00-00"
          className="form-control form-control__gra input-phone"
          id="registerLoginPhone"
          placeholder="Ваш телефон"
          name="username"
          pattern=".{16}"
          required
        />
        <label htmlFor="registerLoginPhone">Ваш телефон</label>
      </div>

      {formSent == 0 ? (
        <div className="alert alert-danger fs-8 alert-dismissible fade show" role="alert">
          <strong>Ошибка! </strong>
          Попробуйте позже.
          <br />
          <br /> В случае повторения ошибки, обратитесь в колл-центр по номеру:
          <a href="tel:+79288284001" className="fw-semibold text-nowrap">
            <span> +7 (928) 828-40-01</span>
          </a>
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

      {formSent == 1 ? (
        <div className="alert alert-success fs-8 alert-dismissible fade show" role="alert">
          <strong>Получилось! </strong>
          Пароль был выслан Вам по SMS
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
        Получить
      </button>
    </form>
  );
}
