export function Placeholder({
  height,
  content,
  flashing,
}: {
  height: number;
  content: JSX.Element;
  flashing: boolean;
}) {
  return (
    <div className="row">
      <div className={`col-12 ${"placeholder-glow" ? flashing : ""}`}>
        <div
          className={`${"placeholder" ? flashing : ""} rounded-3 d-flex justify-content-center`}
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
      flashing={true}
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
  return (
    <Placeholder flashing={true} height={height} content={<div>Ошибка при загрузке данных</div>} />
  );
}

export function PlaceholderNotFound({ height }: { height: number }) {
  return (
    <Placeholder
      flashing={false}
      height={height}
      content={<div>По Вашему запросу ничего не найдено</div>}
    />
  );
}
