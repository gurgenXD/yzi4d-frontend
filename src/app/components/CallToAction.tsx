export default function CallToAction() {
    return (
        <section className="py-lg-6 py-5">
            <div className="container">
                <div className="cta bg-light-blue rounded-3 p-3 p-sm-5 p-lg-0">
                    <div className="row flex-column flex-md-row gy-4 gy-sm-5 gy-md-0 gx-xl-0">
                        <div className="col-md-6 col-lg-7 col-xl-4 align-self-center">
                            <div className="ps-lg-5 ps-xl-6 pe-xl-1 py-lg-5 py-xl-6">
                                <h2 className="cta-title mb-2 mb-sm-3">У вас остались вопросы?</h2>
                                <p className="cta-text mb-0">Оставьте свой телефон. Мы свяжемся с вами в ближайшее время.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 d-none d-xl-block">
                            <div className="cta-img position-relative">
                                <div className="cta-img-wrap ps-lg-4 ps-xl-5 pe-lg-1 pe-xl-2">
                                    <img src="/img/cta-img.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-5 col-xl-4 align-self-center">
                            <div className="pe-lg-5 pe-xl-6 py-lg-5 py-xl-6">
                                <form className="mb-4">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control form-control__no-border input-phone"
                                            id="ctaPhone"
                                            placeholder="Ваш телефон"
                                            pattern=".{16}"
                                            required />
                                        <label htmlFor="ctaPhone">Ваш телефон</label>
                                    </div>

                                    <button className="btn btn-danger w-100" type="submit">Отправить</button>
                                </form>

                                <div className="fs-10 text-secondary">
                                    Нажимая на кнопку «Отправить», вы даёте своё согласие на <a href="content.html" title="" target="_blank">обработку персональных данных</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
