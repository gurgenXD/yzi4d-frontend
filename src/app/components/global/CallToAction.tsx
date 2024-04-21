"use client";

import { useState } from "react";
import { IMaskInput } from "react-imask";
import { createCallback } from "@/services/callbacks";
import Image from "next/image";

import CtaImg from "@/assets/cta-img.png";

export default function CallToAction() {
  const [formSent, setFormSent] = useState(0);

  const onSubmitHander = async (event: any) => {
    event.preventDefault();

    const response = await createCallback(
      event.target.phone.value,
    );

    if (response.status == 200) {
      setFormSent(1);
    } else {
      setFormSent(2);
    }
  };
  return (
    <section className="py-lg-6 py-5 d-none">
      <div className="container">
        <div className="cta bg-light-blue rounded-3 p-3 p-sm-5 p-lg-0">
          <div className="row flex-column flex-md-row gy-4 gy-sm-5 gy-md-0 gx-xl-0">
            <div className="col-md-6 col-lg-7 col-xl-4 align-self-center">
              <div className="ps-lg-5 ps-xl-6 pe-xl-1 py-lg-5 py-xl-6">
                <h2 className="cta-title mb-2 mb-sm-3">У вас остались вопросы?</h2>
                <p className="cta-text mb-0">
                  Оставьте свой телефон. Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            </div>

            <div className="col-xl-4 d-none d-xl-block">
              <div className="cta-img position-relative">
                <div className="cta-img-wrap ps-lg-4 ps-xl-5 pe-lg-1 pe-xl-2">
                  <Image src={CtaImg} alt="Фон отзыва" />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 col-xl-4 align-self-center">
              <div className="pe-lg-5 pe-xl-6 py-lg-5 py-xl-6">
                <form onSubmit={onSubmitHander} className="mb-4">
                  <div className="form-floating mb-3">
                    <IMaskInput
                      mask="+{7} (000) 000-00-00"
                      className="form-control form-control__no-border input-phone"
                      id="ctaPhone"
                      placeholder="Ваш телефон"
                      name="phone"
                      required
                    />
                    <label htmlFor="ctaPhone">Ваш телефон</label>
                  </div>

                  <button className="btn btn-danger w-100" type="submit">
                    Отправить
                  </button>
                </form>

                <div className="fs-10 text-secondary">
                  Нажимая на кнопку «Отправить», вы даёте своё согласие на{" "}
                  <a href="/documents" title="" target="_blank">
                    обработку персональных данных
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
