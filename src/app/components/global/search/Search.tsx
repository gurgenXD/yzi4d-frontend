"use client";

import { useGetServices, useGetSpecialists } from "@/requests/client";
import {
  PlaceholderLoading,
  PlaceholderError,
  PlaceholderNotFound,
} from "@/app/components/common/Placeholder";
import Link from "next/link";

export default function Search({ searchQuery }: { searchQuery: string }) {
  const {
    services: services,
    isLoading: isServicesLoading,
    isError: isServicesError,
  } = useGetServices(null, "services", searchQuery, 1);
  const {
    services: analyzes,
    isLoading: isAnalyzesLoading,
    isError: isAnalyzesError,
  } = useGetServices(null, "analyzes", searchQuery, 1);
  const {
    specialists,
    isLoading: isSpecialistsLoading,
    isError: isSpecialistsError,
  } = useGetSpecialists(searchQuery, 1);

  if (!searchQuery) {
    return <ul></ul>;
  }

  if (isServicesLoading || isAnalyzesLoading || isSpecialistsLoading)
    return (
      <ul>
        <li>
          <PlaceholderLoading height={30} />
        </li>
      </ul>
    );

  if (isServicesError || isAnalyzesError || isSpecialistsError)
    return (
      <ul>
        <li>
          <PlaceholderError height={30} />
        </li>
      </ul>
    );

  if (!(services.data.length || analyzes.data.length || specialists.data.length)) {
    return (
      <ul>
        <li>
          <PlaceholderNotFound height={30} />
        </li>
      </ul>
    );
  }

  return (
    <ul>
      {services.data.length ? <h5 className="px-3 py-1 m-0">Услуги</h5> : null}
      {services.data.map((service: any) => (
        <li className="px-3" key={service.id}>
          <a className="d-block" href={`/catalog/services/categories/items/${service.id}`}>
            {service.name}
          </a>
        </li>
      ))}

      {analyzes.data.length ? <h5 className="px-3 py-1 m-0">Анализы</h5> : null}
      {analyzes.data.map((analyze: any) => (
        <li className="px-3" key={analyze.id}>
          <a className="d-block" href={`/catalog/analyzes/categories/items/${analyze.id}`}>
            {analyze.name}
          </a>
        </li>
      ))}

      {specialists.data.length ? <h5 className="px-3 py-1 m-0">Специалисты</h5> : null}
      {specialists.data.map((specialist: any) => (
        <li className="px-3" key={specialist.id}>
          <a className="d-block" href={`/specialists/${specialist.id}`}>
            {specialist.surname} {specialist.name} {specialist.patronymic}
          </a>
        </li>
      ))}
    </ul>
  );
}
