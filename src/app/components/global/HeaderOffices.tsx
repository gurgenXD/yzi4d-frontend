"use client";

import { useGetOffices } from "@/requests/client";
import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";

export default function HeaderOffices() {
  const { offices, isLoading, isError } = useGetOffices();

  if (isLoading) return <PlaceholderLoading height={100} />;
  if (isError) return <PlaceholderError height={100} />;

  return (
    <>
      {offices.map((office: string) => (
        <li key={office}>
          <a className="dropdown-item fs-8" href="#">
            {office}
          </a>
        </li>
      ))}
    </>
  );
}
