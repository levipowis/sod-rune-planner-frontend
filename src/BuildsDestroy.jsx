export function BuildsDestroy(props) {
  const handleClick = () => {
    props.onDestroyBuild(props.build);
  };

  return (
    <div className="buildsDestroy">
      <div className="d-grid col-9 mx-auto p-4">
        <h2>
          Are you sure you want to delete this build: <span className="text-warning">{props.build.build_name}</span>?
        </h2>
      </div>
      <div className="d-grid col-2 mx-auto p-2">
        <button className="btn btn-danger" onClick={handleClick}>
          Delete Build
        </button>
      </div>
    </div>
  );
}
