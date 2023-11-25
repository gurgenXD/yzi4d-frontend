import { getPromotions } from "@/requests/server";
import CommonPromotion from "@/app/components/common/CommonPromotion";
import Link from "next/link";

export const metadata = {
  title: "Спецпредложения - Поликлиника УЗИ 4Д",
};

export default async function Promotions() {
  const promotions = await getPromotions();

  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container pt-4 pt-lg-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Главная</Link>
            </li>
            <li className="breadcrumb-item active">Спецпредложения</li>
          </ol>

          <h1 className="mb-4">Спецпредложения</h1>

          {promotions.map((promotion: any) => (
            <CommonPromotion key={promotion.id} promotion={promotion} />
          ))}
        </div>
      </div>
    </main>
  );
}
