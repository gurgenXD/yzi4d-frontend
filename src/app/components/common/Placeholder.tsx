export function Placeholder({ height, content }: { height: number; content: JSX.Element }) {
  return (
    <div className="row">
      <div className="col-12 placeholder-glow">
        <div
          className="placeholder rounded-3 d-flex justify-content-center"
          style={{
            height: height,
            backgroundColor: "rgba(1,1,1,0)",
            textAlign: "center",
            paddingTop: height / 2 - 10,
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export function PlaceholderLoading({ height }: { height: number }) {
  return (
    <Placeholder
      height={height}
      content={
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      }
    />
  );
}

export function PlaceholderError({ height }: { height: number }) {
  return <Placeholder height={height} content={<div>Ошибка при загрузке данных</div>} />;
}

export function PlaceholderNotFound({ height }: { height: number }) {
  return <Placeholder height={height} content={<div>По Вашему запросу ничего не найдено</div>} />;
}
