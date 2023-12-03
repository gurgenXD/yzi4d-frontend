"use client";

import { getPromotions } from "@/services/promotions";
import useSWR from "swr";
import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";
import CommonPromotion from "@/app/components/common/CommonPromotion";

export default function PromotionsWrapper() {
  const {
    data: promotions,
    isLoading,
    error,
  } = useSWR("promotions", async (_) => {
    return await getPromotions();
  });

  if (isLoading) return <PlaceholderLoading height={300} />;
  if (error) return <PlaceholderError height={300} />;

  return (
    <>
      {promotions.map((promotion: any) => (
        <CommonPromotion key={promotion.id} promotion={promotion} />
      ))}
    </>
  );
}
