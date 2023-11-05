export function Placeholder() {
    return (
        <p className="placeholder-glow">
            <span
                className="col-12 placeholder rounded-3"
                style={{ height: 200, backgroundColor: "#e1f4fc" }}>
            </span>
        </p>
    )
}

export function PlaceholderError() {
    return (
        <p className="placeholder-glow">
            <span
                className="col-9 placeholder rounded-3"
                style={{ height: 200, backgroundColor: "#e1f4fc", textAlign: "center", paddingTop: 90 }}>
                Ошибка при загрузке данных
            </span>
        </p>
    )
}
