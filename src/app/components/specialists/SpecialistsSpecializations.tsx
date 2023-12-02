import useSWR from "swr";
import { getSpecializations } from "@/services/specialists";

export default function SpecialistSpecializations() {
  const {
    data: specializations,
    isLoading,
    error,
  } = useSWR("specializations", async (_) => {
    return await getSpecializations();
  });

  if (isLoading) return null;
  if (error) return null;

  return (
    <>
      {specializations.map((specialization: any) => (
        <option key={specialization.id} value={specialization.id}>
          {specialization.name}
        </option>
      ))}
    </>
  );
}
