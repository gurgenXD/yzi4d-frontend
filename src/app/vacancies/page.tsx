import VacanciesWrapper from "@/app/vacancies/components/VacanciesWrapper";

export const metadata = {
  title: "Вакансии - Поликлиника УЗИ 4Д",
};

export default async function Vacancies() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container pt-4 pt-lg-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Главная</a>
            </li>
            <li className="breadcrumb-item active">Вакансии</li>
          </ol>

          <div className="row g-4">
            <h1 className="mb-4">Вакансии</h1>

            <VacanciesWrapper />
          </div>
        </div>
      </div>
    </main>
  );
}
