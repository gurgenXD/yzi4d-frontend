export function PlaceholderLoading({ height, isLoading }: { height: number, isLoading: boolean }) {
    return (
        <div className="row">
            <div className="col-12 placeholder-glow">
                <div className="placeholder rounded-3 d-flex justify-content-center"
                    style={{ height: height, backgroundColor: "rgba(1,1,1,0)", textAlign: "center", paddingTop: height / 2 - 10 }}>
                    {isLoading
                        ? <div className="spinner-border text-primary" role="status"><span className="sr-only"></span></div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export function PlaceholderError({ height, isError }: { height: number, isError: boolean }) {
    return (
        <div className="row">
            <div className="col-12 placeholder-glow">
                <div className="placeholder rounded-3 d-flex justify-content-center"
                    style={{ height: height, backgroundColor: "rgba(1,1,1,0)", textAlign: "center", paddingTop: height / 2 - 10 }}>
                    {isError
                        ? <div>Ошибка при загрузке данных</div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export function PlaceholderNotFound({ height }: { height: number }) {
    return (
        <div className="row">
            <div className="col-12">
                <div className="rounded-3 d-flex justify-content-center"
                    style={{ height: height, backgroundColor: "rgba(1,1,1,0)", textAlign: "center", paddingTop: height / 2 - 10 }}>
                    <div>По Вашему запросу ничего не найдено</div>
                </div>
            </div>
        </div>
    )
}
