export function BuildsIndex(props) {
  return (
    <div>
      <h1>All Builds</h1>
      {props.builds.map((build) => (
        <div key={build.id}>
          <h2>{build.build_name}</h2>
        </div>
      ))}
    </div>
  );
}
