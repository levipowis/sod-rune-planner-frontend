export function BuildsShow(props) {
  return (
    <div className="container">
      <div className="row text-center m-4">
        <h1>{props.build.build_name}</h1>
        <h3>{props.build.character_name}</h3>
      </div>
      <div className="row">
        <div className="col">
          <div>
            <h4 className="p-2 text-warning text-center">Gloves Rune</h4>
          </div>
          <div className="container p-2 me-4">
            <div className="border border-secondary rounded bg-black mt-3 p-2">
              <span className="me-2">
                <img height="32" width="32" src={props.build.gloves_rune.image_url}></img>
              </span>
              <span className="m-2 fs-5">{props.build.gloves_rune.name}</span>
              <div
                className="m-1 text-warning"
                dangerouslySetInnerHTML={{ __html: props.build.gloves_rune.description }}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <h4 className="p-2 text-warning text-center">Chest Rune</h4>
          </div>
          <div className="container p-2 me-4">
            <div className="border border-secondary rounded bg-black mt-3 p-2">
              <span className="me-2">
                <img height="32" width="32" src={props.build.chest_rune.image_url}></img>
              </span>
              <span className="m-2 fs-5">{props.build.chest_rune.name}</span>
              <div
                className="m-1 text-warning"
                dangerouslySetInnerHTML={{ __html: props.build.chest_rune.description }}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <h4 className="p-2 text-warning text-center">Legs Rune</h4>
          </div>
          <div className="container p-2 me-4">
            <div className="border border-secondary rounded bg-black mt-3 p-2">
              <span className="me-2">
                <img height="32" width="32" src={props.build.legs_rune.image_url}></img>
              </span>
              <span className="m-2 fs-5">{props.build.legs_rune.name}</span>
              <div
                className="m-1 text-warning"
                dangerouslySetInnerHTML={{ __html: props.build.legs_rune.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
