import PromotionsWrapper from "@/app/components/promotions/PromotionsWrapper";

export const metadata = {
  title: "Спецпредложения - Поликлиника УЗИ 4Д",
};

export default async function Promotions() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container pt-4 pt-lg-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Главная</a>
            </li>
            <li className="breadcrumb-item active">Спецпредложения</li>
          </ol>

          <h1 className="mb-4">Спецпредложения</h1>

          <PromotionsWrapper />
        </div>
      </div>
    </main>
  );
}
