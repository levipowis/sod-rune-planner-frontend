export function BuildsShow(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <h4 className="p-2 text-warning">Gloves Rune</h4>
          </div>
          <div className="container p-2 me-4">
            <div className="border border-secondary rounded bg-black mt-3 p-2">
              <span className="me-2">
                <img height="32" width="32" src={props.build.gloves_rune.image_url}></img>
              </span>
              <span className="m-2 fs-5">{props.build.gloves_rune.name}</span>
              <div className="mt-1 text-warning">{props.build.gloves_rune.description}</div>
            </div>
          </div>
        </div>
        <div className="col">Column</div>
        <div className="col">Column</div>
      </div>
    </div>
  );
}
