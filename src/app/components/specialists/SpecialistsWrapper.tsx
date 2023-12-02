"use client";

import { useState } from "react";
import SpecialistSpecializations from "@/app/components/specialists/SpecialistsSpecializations";
import SpecialistsList from "@/app/components/specialists/SpecialistsList";

export default function SpecialistsWrapper() {
  const [canOnline, setCanOnline] = useState(false);
  const [canAdult, setCanAdult] = useState(false);
  const [canChild, setCanChild] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [specializationId, setSpecializationId] = useState("");

  const onSubmitHander = (event: any) => {
    event.preventDefault();
    setCanOnline(event.target.can_online.checked);
    setCanAdult(event.target.can_adult.checked);
    setCanChild(event.target.can_child.checked);
    setSearchQuery(event.target.search_query.value);
    setSpecializationId(event.target.specialization_id.value);
  };

  return (
    <>
      <div className="bg-white rounded-3 shadow p-3 mb-md-5 mb-4">
        <form onSubmit={onSubmitHander}>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="can_online"
              id="HasOnline"
              defaultChecked={canOnline}
            />
            <label className="form-check-label fs-8" htmlFor="HasOnline">
              Онлайн-консультация
            </label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="can_adult"
              id="HasAdult"
              defaultChecked={canAdult}
            />
            <label className="form-check-label fs-8" htmlFor="HasAdult">
              Принимает взрослых
            </label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="can_child"
              id="HasChild"
              defaultChecked={canChild}
            />
            <label className="form-check-label fs-8" htmlFor="HasChild">
              Принимает детей
            </label>
          </div>

          <div className="row align-items-end g-3">
            <div className="col-lg col-md-6">
              <input
                type="search"
                className="form-control form-control-sm"
                id="SearchQuery"
                name="search_query"
                placeholder="Фамилия или имя врача"
              />
            </div>

            <div className="col-lg col-md-6">
              <select
                className="form-select form-select-sm"
                id="SpecializationId"
                name="specialization_id"
                defaultValue={specializationId}
              >
                <option value={0}>Все специальности</option>
                <SpecialistSpecializations />
              </select>
            </div>

            {/* <div className="col-lg col-md-6">
              <select className="form-select form-select-sm" id="" defaultValue="all">
                <option value={"all"}>Все города</option>
                <option>Пятигорск</option>
                <option>Ессентуки</option>
                <option>Минеральные Воды</option>
              </select>
            </div> */}

            <div className="col-lg-auto col-md-6">
              <button className="btn btn-danger btn-sm w-100 text-nowrap" type="submit">
                Поиск
              </button>
            </div>
          </div>
        </form>
      </div>

      <SpecialistsList
        canOnline={canOnline}
        canAdult={canAdult}
        canChild={canChild}
        searchQuery={searchQuery}
        specializationId={specializationId}
      />
    </>
  );
}
