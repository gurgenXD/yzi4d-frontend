"use client";

import { getVacancyCategories } from "@/services/vacancies";

import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";

import useSWR from "swr";

export default function VacanciesWrapper() {
  const {
    data: categories,
    isLoading,
    error,
  } = useSWR("vacancy_categories", async (_) => {
    return await getVacancyCategories();
  });

  if (isLoading)
    return (
      <div className="col">
        <PlaceholderLoading height={200} />
      </div>
    );

  if (error)
    return (
      <div className="col">
        <PlaceholderError height={200} />
      </div>
    );

  return (
    <div className="row">
      <article className="article mb-lg-5">
        {categories.map((category: any) => (
          <>
            <h3>{category.name}</h3>
            <ul>
              {category.vacancies.map((vacancy: any) => (
                <li key={vacancy.name}>
                  <a>{vacancy.name}</a>
                </li>
              ))}
            </ul>
          </>
        ))}
      </article>
    </div>
  );
}
