export function Placeholder({ isError, columns }: {
    isError: boolean, columns: { col: number, count: number, height: number }[]
}) {
    return (
        <div className="row">
            {columns.map(({ col, count, height }) => (
                <div className={`col-${col} placeholder-glow`}>
                    {Array.from(Array(count).keys()).map((_) => (
                        <div className={`col-12 placeholder rounded-3 ${count > 1 ? " mb-3" : ""}`}
                            style={{ height: height, backgroundColor: "#ddd", textAlign: "center", paddingTop: isError ? height / 2 : 0 }}>
                            {isError ? "Ошибка при загрузке данных" : null}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
