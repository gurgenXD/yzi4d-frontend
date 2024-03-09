"use client";

import { getDocumentCategories } from "@/services/documents";
import DocumentBgImg from "@/assets/document-bg-icon.svg";

import { PlaceholderLoading, PlaceholderError } from "@/app/components/common/Placeholder";

import useSWR from "swr";

export default function DocumentsWrapper() {
  const {
    data: categories,
    isLoading,
    error,
  } = useSWR("document_categories", async (_) => {
    return await getDocumentCategories();
  });

  if (isLoading)
    return (
      <div className="col">
        <PlaceholderLoading height={200} />
      </div>
    );

  if (error)
    return (
      <div className="col">
        <PlaceholderError height={200} />
      </div>
    );

  return (
    <div className="row">
      {categories.length ? (
        <div className="row">
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
  );
}
