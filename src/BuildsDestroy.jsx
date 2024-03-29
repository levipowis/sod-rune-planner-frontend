export function BuildsDestroy(props) {
  // Handler function to call the handleDestroyBuild function on Content.jsx via props
  const handleClick = () => {
    props.onDestroyBuild(props.build);
  };

  return (
    <div className="buildsDestroy">
      {/* Destroy confirmation message */}
      <div className="d-grid col-11 mx-auto p-4">
        <h2>
          Are you sure you want to delete this build: <span className="text-warning">{props.build.build_name}</span>?
        </h2>
      </div>
      {/* Delete Build button that calls the handleClick function on click */}
      <div className="d-grid col-3 mx-auto p-2">
        <button className="btn btn-danger btn-lg" onClick={handleClick}>
          Delete Build
        </button>
      </div>
    </div>
  );
}
