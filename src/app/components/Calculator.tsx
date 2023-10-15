export default function Calculator() {
  return (
    <div className="d-none">
      <a href="#" title="Открыть калькулятор" className="calc-btn text-center position-fixed">
        <div className="calc-btn__container position-relative rounded-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.52 16" height="26px">
            <path
              d="M12.73,0H.8C.32,0,0,.32,0,.8V15.2c0,.48,.32,.8,.8,.8H12.73c.48,0,.8-.32,.8-.8V.8c0-.48-.32-.8-.8-.8ZM3.98,14.4H1.59v-1.6H3.98v1.6Zm0-3.2H1.59v-1.6H3.98v1.6Zm0-3.2H1.59v-1.6H3.98v1.6Zm3.98,6.4h-2.38v-1.6h2.38v1.6Zm0-3.2h-2.38v-1.6h2.38v1.6Zm0-3.2h-2.38v-1.6h2.38v1.6Zm3.98,6.4h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2H1.59V1.6H11.93v3.2Z" />
          </svg>

          <span className="calc-btn__badge">7</span>
        </div>
      </a>

      <div className="calc bg-white rounded-3 overflow-hidden shadow-lg">
        <div className="calc__dialog">
          <div className="d-flex justify-content-between align-items-center bg-light-blue">
            <h3 className="fs-6 lh-1 py-3 ps-3 mb-0">Калькулятор стоимости</h3>

            <a href="#" title="Закрыть калькулятор" className="calc__close p-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="14px">
                <path
                  d="M301.25,256L502.62,54.64c12.5-12.5,12.5-32.77,0-45.27-12.5-12.5-32.77-12.5-45.27,0h0L256,210.75,54.64,9.38C42.14-3.13,21.87-3.13,9.38,9.38s-12.5,32.77,0,45.27L210.75,256,9.38,457.36c-12.5,12.5-12.5,32.77,0,45.27s32.77,12.5,45.27,0l201.36-201.38,201.36,201.38c12.5,12.5,32.77,12.5,45.27,0,12.5-12.5,12.5-32.77,0-45.27l-201.38-201.36Z" />
              </svg>
            </a>
          </div>

          <div className="calc__body px-3 pt-3">
            {/* СООБЩЕНИЕ, КОГДА КАЛЬКУЛЯТОР ПУСТОЙ

            <div className="fs-8 mb-3">
              Добавляйте услуги и анализы в калькулятор с помощью кнопки:
              <span>
                <?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24.65 16" height="13px" style="margin-top: -2px">
                  <path
                    d="M23.85,0H11.92c-.48,0-.8,.32-.8,.8V15.2c0,.48,.32,.8,.8,.8h11.93c.48,0,.8-.32,.8-.8V.8c0-.48-.32-.8-.8-.8ZM15.1,14.4h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm3.98,6.4h-2.38v-1.6h2.38v1.6Zm0-3.2h-2.38v-1.6h2.38v1.6Zm0-3.2h-2.38v-1.6h2.38v1.6Zm3.98,6.4h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2h-2.39v-1.6h2.39v1.6Zm0-3.2H12.72V1.6h10.34v3.2Z" />
                  <path className="cls-1"
                    d="M3.23,4.8h1.05c.23,0,.43,.19,.43,.42v2.41h2.39c.23,0,.42,.2,.42,.43v1.05c0,.24-.19,.43-.42,.43h-2.39v2.4c0,.24-.19,.43-.43,.43h-1.05c-.23,0-.42-.19-.42-.43v-2.4H.42C.19,9.54,0,9.34,0,9.11v-1.05C0,7.83,.2,7.63,.42,7.63H2.81v-2.41c0-.23,.19-.42,.42-.42h0Z" />
                </svg>
              </span>
            </div> */}

            <table className="table calc-table">
              <tbody>
                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Профилактика заболеваний сердца и сосудов и их осложнений</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">3215</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Липидный профиль: расширенный</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">2925</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Не-ЛПВП холестерин натощак, мини-профиль (Non-HDL Cholesterol Profile, fasting)</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">410</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">ПУльтразвуковая диагностика беременности</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">2290</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Скрининговое УЗИ 1-го триместра беременности и расчет риска в программе Астрайя (11 - 13 недель 6 дней)</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">2290</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Профилактика заболеваний сердца и сосудов и их осложнений</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">3500</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Скрининговое УЗИ 1-го триместра беременности (11-13 недель 6 дней)</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">2290</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Профилактика заболеваний сердца и сосудов и их осложнений</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">3215</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Липидный профиль: расширенный</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">2925</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Не-ЛПВП холестерин натощак, мини-профиль (Non-HDL Cholesterol Profile, fasting)</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">410</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">ПУльтразвуковая диагностика беременности</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">2290</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Скрининговое УЗИ 1-го триместра беременности и расчет риска в программе Астрайя (11 - 13 недель 6 дней)</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">2290</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Профилактика заболеваний сердца и сосудов и их осложнений</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">3500</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>

                <tr className="calc-item">
                  <td className="calc-item__name fs-10">
                    <a href="analyse.html">Скрининговое УЗИ 1-го триместра беременности (11-13 недель 6 дней)</a>
                  </td>

                  <td className="calc-item__price fs-8 text-nowrap fw-extrabold">
                    <span className="me-1">2290</span>
                    ₽
                  </td>

                  <td className="calc-item__remove">
                    <a href="#" title="Удалить">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 512" height="14px" style={{ marginTop: "-1px" }}>
                        <path
                          d="M405.33,85.33h-66.13C328.99,35.7,285.34,.06,234.67,0h-42.67c-50.67,.06-94.33,35.7-104.53,85.33H21.33c-11.78,0-21.33,9.55-21.33,21.33s9.55,21.33,21.33,21.33h21.33V405.33c.07,58.88,47.79,106.6,106.67,106.67h128c58.88-.07,106.6-47.79,106.67-106.67V128h21.33c11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33ZM192,42.67h42.67c27.11,.03,51.28,17.12,60.35,42.67H131.65c9.07-25.55,33.24-42.63,60.35-42.67Zm149.33,362.67c0,35.35-28.65,64-64,64H149.33c-35.35,0-64-28.65-64-64V128H341.33V405.33Z" />
                        <path
                          d="M170.67,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                        <path
                          d="M256,384c11.78,0,21.33-9.55,21.33-21.33V234.67c0-11.78-9.55-21.33-21.33-21.33s-21.33,9.55-21.33,21.33v128c0,11.78,9.55,21.33,21.33,21.33Z" />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-light px-3 py-2">
            <div className="fs-5 text-secondary text-end fw-black mt-auto text-nowrap">
              <span className="me-1">Итого:</span>
              <span className="me-1">16500</span>
              ₽
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
