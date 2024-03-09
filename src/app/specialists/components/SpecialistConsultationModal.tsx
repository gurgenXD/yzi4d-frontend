"use client";

import { useState } from "react";
import { IMaskInput } from "react-imask";
import FormSuccessImg from "@/assets/form-success-icon.svg";
import FormErrorImg from "@/assets/form-error-icon.svg";
import Image from "next/image";
import { createConsultation } from "@/services/consultations";

export default function SpecialistConsultationModal({ specialist }: { specialist: string }) {
  const [formSent, setFormSent] = useState(0);

  const onSubmitHander = async (event: any) => {
    event.preventDefault();

    const response = await createConsultation(
      event.target.name.value,
      event.target.phone.value,
      specialist
    );

    if (response.status == 200) {
      setFormSent(1);
    } else {
      setFormSent(2);
    }
  };

  return (
    <div
      className="modal fade"
      id="ConsultModal"
      tabIndex={-1}
      aria-labelledby="ConsultModalLabel"
      aria-hidden={true}
    >
      <div className="modal-dialog modal-sm">
        <div className="modal-content overflow-hidden">
          <div className="modal-header border-0 pt-3 pt-sm-4 px-3 px-sm-4 pb-0">
            <h5 className="modal-title" id="ConsultModalLabel">
              Записаться на онлайн консультацию
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body px-3 px-sm-4 pb-3 pb-sm-4">
            <form onSubmit={onSubmitHander}>
              <div className="form-floating mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="ConsultName"
                  placeholder="Имя Фамилия"
                  name="name"
                  required
                />
                <label htmlFor="ConsultName">Имя Фамилия</label>
              </div>

              <div className="form-floating mb-4">
                <IMaskInput
                  mask="+{7} (000) 000-00-00"
                  className="form-control input-phone"
                  id="ConsultPhone"
                  placeholder="Ваш телефон"
                  name="phone"
                  required
                />
                <label htmlFor="ConsultPhone">Ваш телефон</label>
              </div>

              <button className="btn btn-danger btn-form w-100" type="submit">
                Записаться
              </button>

              <div className="fs-10 pt-4 text-secondary">
                Нажимая на кнопку «Записаться», вы даёте своё согласие на{" "}
                <a href="/documents" title="" target="_blank">
                  обработку персональных данных
                </a>
                .
              </div>
            </form>

            {formSent == 1 ? (
              <div className="form-success p-4">
                <div className="d-flex align-items-center mb-3">
                  <Image src={FormSuccessImg} alt="Успешно" className="me-3" />
                  <h3 className="fs-5 fw-bold text-secondary mb-0">
                    Заявка
                    <br />
                    отправлена
                  </h3>
                </div>
                <p className="fs-8 mb-2">
                  Менеджер обработает Вашу заявку в ближайшее время и перезвонит.
                </p>
                <a href="#" className="btn btn-primary w-100" data-bs-dismiss="modal">
                  Хорошо
                </a>
              </div>
            ) : null}

            {formSent == 2 ? (
              <div className="form-success p-4">
                <div className="d-flex align-items-center mb-3">
                  <Image src={FormErrorImg} alt="Ошибка" className="me-3" />
                  <h3 className="fs-5 fw-bold text-secondary mb-0">Ошибка!</h3>
                </div>
                <p className="fs-8 mb-2">
                  При создании заявки возникла ошибка. Попробуйте перезагрузить страницу.
                </p>
                <a href="#" className="btn btn-danger w-100" data-bs-dismiss="modal">
                  Хорошо
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
