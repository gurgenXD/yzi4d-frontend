import Link from "next/link";
import Image from "next/image";
import DoctorNoImg from "@/assets/doctor-no-photo.jpg";

export default function CommonSpecialist({ specialist }: { specialist: any }) {
  return (
    <div className="doctor-card d-flex h-100 position-relative">
      <div className="ratio ratio-5x6 overflow-hidden rounded-3 flex-shrink-0">
        <Image
          className="doctor-card-img"
          src={specialist.photo ? specialist.photo : DoctorNoImg}
          alt={`${specialist.surname} ${specialist.name} ${specialist.patronymic}`}
          width={300}
          height={350}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div>
        <Link
          href={`/specialists/${specialist.id}`}
          className="doctor-card-title stretched-link d-block link-secondary fw-semibold"
        >
          {specialist.surname}
          <br />
          {specialist.name} {specialist.patronymic}
        </Link>

        <div className="doctor-card-job text-muted mb-1">
          {specialist.specializations.map((spec: any) => spec.name).join(" / ")}
        </div>
        <div className="doctor-card-exp text-muted mb-1">Стаж {specialist.experience}</div>

        <div className="d-flex flex-wrap pt-2">
          {specialist.titles.map((title: any) => (
            <div key={title.name} className="doctor-card-achieve bg-danger text-white px-1">
              {title.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
