import DocumentsWrapper from "@/app/documents/components/DocumentsWrapper";

export const metadata = {
  title: "Документы - Поликлиника УЗИ 4Д",
};

export default async function Documents() {
  return (
    <main role="main" className="flex-shrink-0">
      <div className="overflow-hidden">
        <div className="container pt-4 pt-lg-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Главная</a>
            </li>
            <li className="breadcrumb-item active">Документы и лицензии</li>
          </ol>

          <div className="row g-4">
            <h1 className="mb-4">Документы и лицензии</h1>

            <DocumentsWrapper />
          </div>
        </div>
      </div>
    </main>
  );
}
