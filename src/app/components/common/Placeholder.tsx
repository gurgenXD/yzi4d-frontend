export function Placeholder({ height }: { height: number }) {
    return (
        <p className="placeholder-glow shadow rounded-3">
            <span
                className="col-12 placeholder rounded-3"
                style={{ height: height, backgroundColor: "#e1f4fc" }}>
            </span>
        </p>
    )
}

export function PlaceholderError({ height }: { height: number }) {
    return (
        <p className="placeholder-glow shadow rounded-3">
            <span
                className="col-9 placeholder rounded-3"
                style={{ height: height, backgroundColor: "#e1f4fc", textAlign: "center", paddingTop: height / 2 }}>
                Ошибка при загрузке данных
            </span>
        </p>
    )
}
