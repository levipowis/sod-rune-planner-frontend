export function BuildsDestroy(props) {
  const handleClick = () => {
    props.onDestroyBuild(props.build);
  };

  return (
    <div className="buildsDestroy">
      <h2>Are you shure you want to delete this build: {props.build.build_name}?</h2>
      <button onClick={handleClick}>Delete Build</button>
    </div>
  );
}
