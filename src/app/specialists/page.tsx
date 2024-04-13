import SpecialistsWrapper from "@/app/specialists/components/SpecialistsWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Специалисты - Поликлиника УЗИ 4Д",
};

export default async function Specialists() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container pt-4 pt-lg-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Главная</a>
            </li>
            <li className="breadcrumb-item active">Cпециалисты</li>
          </ol>

          <h1 className="mb-4">Cпециалисты</h1>

          <SpecialistsWrapper />
        </div>
      </div>
    </main>
  );
}
