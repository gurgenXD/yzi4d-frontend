"use client";

import { useGetOffices } from "@/requests/client";
import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";
import Link from "next/link";

export default function HeaderOffices() {
  const { offices, isLoading, isError } = useGetOffices();

  if (isLoading) return <PlaceholderLoading height={100} />;
  if (isError) return <PlaceholderError height={100} />;

  return (
    <>
      {offices.map((office: string) => (
        <li key={office}>
          <Link className="dropdown-item fs-8" href="#">
            {office}
          </Link>
        </li>
      ))}
    </>
  );
}
