import { Link } from "react-router-dom";

export function BuildsIndex(props) {
  return (
    <div className="container-lg" id="buildsIndex">
      <h1 className="text-center">Builds</h1>
      <Link className="btn btn-dark mb-2 float-end" to="/builds/new">
        New Build
      </Link>
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
                <button type="button" onClick={() => props.onShowBuild(build)}>
                  <img src="/src/assets/icons/pencil-square.svg" alt="pencil-square-icon" />
                </button>
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
