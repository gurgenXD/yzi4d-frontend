"use client";

import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";



export default function InfoBlock({ patient, isLoading, error }: { patient: any, isLoading: boolean, error: boolean }) {
    if (isLoading) return <div className="col"><PlaceholderLoading height={200} /></div >;
    if (error) return <div className="col"><PlaceholderError height={200} /></div>;

    const discount = patient.discount[2]

    return (
        <div className="col">
            <div className="row g-3 mb-4 mb-sm-5">
                <div className="col-xl-5">
                    <div className="bg-white rounded-3 shadow h-100 p-3 p-sm-4">
                        <div className="fs-8 mb-2 pb-1">
                            <span className="f-2 fs-2 lh-1 fw-black text-nowrap text-secondary">
                                <span className="number">{(discount.next_spent - discount.current_spent).toLocaleString("ru")}</span>
                                ₽
                            </span>
                            до новой скидки
                        </div>

                        <div className="progress rounded-pill mb-2">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated rounded-pill"
                                role="progressbar"
                                style={{ width: `${discount.current_spent / discount.next_spent * 100}%` }}
                                aria-valuenow={discount.current_spent / discount.next_spent * 100}
                                aria-valuemin={0}
                                aria-valuemax={100}></div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="f-2 fs-8 lh-1">
                                <span className="number">{discount.current_spent.toLocaleString("ru")}</span>
                                /
                                <span className="number">{discount.next_spent.toLocaleString("ru")}</span>
                            </div>

                            <div className="f-2 fs-6 fw-black text-danger lh-1">{discount.next}%</div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3">
                    <div className="bg-white rounded-3 shadow h-100 p-3 p-sm-4">
                        <div className="f-2 fs-2 lh-1 fw-black text-danger mb-2">{discount.current}%</div>
                        <div className="fs-7 text-muted">Ваша текущая скидка</div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-4">
                    <div className="bg-white rounded-3 shadow h-100 p-3 p-sm-4">
                        <div className="f-2 fs-2 lh-1 fw-black text-nowrap mb-2">
                            <span className="number">{discount.current_spent.toLocaleString("ru")}</span>
                            ₽
                        </div>
                        <div className="fs-7 text-muted">Оплачено услуг за всё время</div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3 shadow p-3 p-sm-4 p-md-5 mb-3">
                <h2 className="fs-3 mb-3 mb-sm-4">Профиль</h2>

                <div className="row gy-2 gy-md-3 gy-xl-4 gx-xl-7">
                    <div className="col-xl-auto">
                        <div>
                            <div className="fs-9 text-muted">ФИО</div>
                            <div>{patient.surname} {patient.name} {patient.patronymic ? patient.patronymic : null}</div>
                        </div>
                    </div>

                    <div className="col-xl-auto">
                        <div>
                            <div className="fs-9 text-muted">Дата рождения</div>
                            <div>{patient.birth_date}</div>
                        </div>
                    </div>

                    <div className="col-xl-auto">
                        <div>
                            <div className="fs-9 text-muted">Возраст</div>
                            <div>{patient.age}</div>
                        </div>
                    </div>

                    <div className="col-xl-auto">
                        <div>
                            <div className="fs-9 text-muted">Пол</div>
                            <div>{patient.gender}</div>
                        </div>
                    </div>

                    <div className="col-xl-auto">
                        <div>
                            <div className="fs-9 text-muted">Телефон</div>
                            <div>{patient.phone}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
