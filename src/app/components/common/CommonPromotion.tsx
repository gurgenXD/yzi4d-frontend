import Link from "next/link";
import Image from "next/image";

export default function CommonPromotion({ promotion }: { promotion: any }) {
  return (
    <div className="sale-banner bg-white position-relative">
      <div className="row flex-column flex-md-row gx-0">
        <div className="col-12 col-md-auto">
          <div className="sale-banner-img bg-img">
            <Image
              className="sale-banner-img bg-img"
              src={promotion.photo}
              alt={promotion.name}
              width={300}
              height={480}
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <div className="col-12 col-md">
          <div className="sale-banner-text h-100 d-flex align-items-center px-3 px-sm-4 px-lg-5">
            <div>
              <div className="d-flex flex-wrap mb-2 mb-md-3 mb-xxl-4">
                <div className="sale-banner-badge bg-danger text-white fw-semibold px-2 px-lg-3 py-1 mb-1">
                  {promotion.sale}
                </div>
                <div className="sale-banner-date bg-light-blue fw-semibold px-2 px-lg-3 py-1 mb-1">
                  {promotion.sale_period}
                </div>
              </div>

              <Link
                href="#"
                className="sale-banner-title stretched-link d-block link-secondary fw-black mb-0"
              >
                {promotion.name}
              </Link>

              <div
                className="product-des"
                dangerouslySetInnerHTML={{ __html: promotion.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
