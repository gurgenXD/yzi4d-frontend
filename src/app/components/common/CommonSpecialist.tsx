export default function CommonSpecialist({ specialist }: { specialist: any }) {
    return (
        <div className="doctor-card d-flex h-100 position-relative">
            <div className="ratio ratio-5x6 overflow-hidden rounded-3 flex-shrink-0">
                {
                    (specialist.photo)
                        ? <div className="doctor-card-img" style={{ backgroundImage: `url('${specialist.photo}')` }}></div>
                        : <div className="doctor-card-img" style={{ backgroundImage: "url('/img/doctor-no-photo.jpg')" }}></div>
                }
            </div>

            <div>
                <a href={`/specialists/${specialist.id}`} className="doctor-card-title stretched-link d-block link-secondary fw-semibold">
                    {specialist.surname}
                    <br />
                    {specialist.name} {specialist.patronymic}
                </a>

                <div className="doctor-card-job text-muted mb-1">
                    {specialist.specializations.map(
                        (spec: any) => (spec.name)).join(" / ")}
                </div>
                <div className="doctor-card-exp text-muted mb-1">Стаж {specialist.experience}</div>

                <div className="d-flex flex-wrap pt-2">
                    {specialist.titles.map((title: any) => (
                        <div key={title.name} className="doctor-card-achieve bg-danger text-white px-1">{title.name}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
