export function Placeholder({ isError, columns }: {
    isError: boolean, columns: { col: number, count: number, height: number }[]
}) {
    return (
        <div className="row">
            {columns.map(({ col, count, height }, index) => (
                <div key={index} className={`col-${col} placeholder-glow`}>
                    {Array.from(Array(count).keys()).map((x) => (
                        <div key={x} className={`col-12 placeholder rounded-3 ${count > 1 ? " mb-3" : ""}`}
                            style={{ height: height, backgroundColor: "#f7fbfe", textAlign: "center", paddingTop: height / 2 - 10 }}>
                            <div className="spinner-border text-primary" role="status"><span className="sr-only"></span></div>
                            {isError ? "Ошибка при загрузке данных" : null}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
