import { getDocumentsCategories } from "@/requests/server";

import DocumentBgImg from "@/assets/document-bg-icon.svg";

export const metadata = {
  title: "Документы - Поликлиника УЗИ 4Д",
};

export default async function Documents() {
  const categories = await getDocumentsCategories();

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

          {categories.length ? (
            <div className="row g-4">
              <h1 className="mb-4">{categories[0].name}</h1>

              {categories[0].documents.map((document: any) => (
                <div key={document.name} className="col-xxl-3 col-xl-4 col-md-6">
                  <div
                    className="card h-100 d-flex flex-column position-relative rounded-3 pt-3 pt-sm-4 pb-sm-2 px-3 px-sm-4"
                    style={{ backgroundImage: `url('${DocumentBgImg.src}')` }}
                  >
                    <a
                      href={document.link}
                      target="_blank"
                      className="card-title stretched-link d-block text-secondary fw-bold mb-2"
                    >
                      {document.name}
                    </a>
                    {/* <p className="card-text mb-3">№Л041-01126-23/00343065 от 21.08.2020г.</p> */}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <article className="article mb-lg-5">
            {categories.slice(1).map((category: any) => (
              <>
                <h3>{category.name}</h3>

                <ul>
                  {category.documents.map((document: any) => (
                    <li key={document.name}>
                      <a href={document.link} target="_blank">
                        {document.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
