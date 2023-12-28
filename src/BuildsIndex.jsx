export function BuildsIndex(props) {
  return (
    <div id="buildsIndex">
      <h1 className="text-center">Builds</h1>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th className="fs-5" scope="col">
              Build Name
            </th>
            <th className="fs-5" scope="col">
              Character Name
            </th>
            <th className="fs-5" scope="col">
              Class
            </th>
          </tr>
        </thead>
        <tbody>
          {props.builds.map((build) => (
            <tr key={build.id}>
              <td className="text-warning" scope="row">
                {build.build_name}
              </td>
              <td>{build.character_name}</td>
              <td>{build.character_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
