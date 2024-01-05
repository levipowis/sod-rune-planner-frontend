import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Home } from "./Home";
import { BuildsIndex } from "./BuildsIndex";
import { BuildsNew } from "./BuildsNew";
import { BuildsShow } from "./BuildsShow";
import { BuildsUpdate } from "./BuildsUpdate";
import { BuildsDestroy } from "./BuildsDestroy";
import { Modal } from "./Modal";

export function Content() {
  const [builds, setBuilds] = useState([]);
  const [runes, setRunes] = useState([]);
  const [isBuildsShowVisible, setIsBuildsShowVisible] = useState(false);
  const [isBuildsUpdateVisible, setIsBuildsUpdateVisible] = useState(false);
  const [isBuildsNewVisible, setIsBuildsNewVisible] = useState(false);
  const [isBuildsDestroyVisible, setIsBuildsDestroyVisible] = useState(false);
  const [currentBuild, setCurrentBuild] = useState({});

  const handleIndexBuilds = () => {
    console.log("handleIndexBuilds");
    axios.get("http://localhost:3000/builds.json").then((response) => {
      console.log(response.data);
      setBuilds(response.data);
    });
  };

  const handleCreateBuild = (params, successCallback) => {
    console.log("handleCreateBuild", params);
    axios.post("http://localhost:3000/builds.json", params).then((response) => {
      setBuilds([...builds], response.data);
      successCallback();
      handleCloseBuildsNew();
    });
  };

  const handleUpdateBuild = (id, params, successCallback) => {
    console.log("handleUpdateBuild", params);
    axios.patch(`http://localhost:3000/builds/${id}.json`, params).then((response) => {
      setBuilds(
        builds.map((build) => {
          if (build.id === response.data.id) {
            return response.data;
          } else {
            return build;
          }
        })
      );
      successCallback();
      handleCloseBuildsUpdate();
    });
  };

  const handleDestroyBuild = (build) => {
    console.log("handleDestroyBuild", build);
    axios.delete(`http://localhost:3000/builds/${build.id}.json`).then(() => {
      setBuilds(builds.filter((b) => b.id !== build.id));
      handleCloseBuildsDestroy();
    });
  };

  const handleShowBuild = (build) => {
    console.log("handleShowBuild", build);
    setIsBuildsShowVisible(true);
    setCurrentBuild(build);
  };

  const handleShowBuildsUpdate = (build) => {
    console.log("handleShowBuildsUpdate", build);
    setIsBuildsUpdateVisible(true);
    setCurrentBuild(build);
  };

  const handleShowBuildsNew = () => {
    console.log("handleShowBuildsNew");
    setIsBuildsNewVisible(true);
  };

  const handleShowBuildsDestroy = (build) => {
    console.log("handleShowDestroyBuild", build);
    setIsBuildsDestroyVisible(true);
    setCurrentBuild(build);
  };

  const handleCloseBuildsShow = () => {
    console.log("handleCloseBuildsShow");
    setIsBuildsShowVisible(false);
  };

  const handleCloseBuildsUpdate = () => {
    console.log("handleClosedBuildsShow");
    setIsBuildsUpdateVisible(false);
  };

  const handleCloseBuildsNew = () => {
    console.log("handleClosedBuildsNew");
    setIsBuildsNewVisible(false);
  };

  const handleCloseBuildsDestroy = () => {
    console.log("handleCloseBuildsDestroy");
    setIsBuildsDestroyVisible(false);
  };

  const handleIndexRunes = () => {
    console.log("handleIndexRunes");
    axios.get("http://localhost:3000/runes.json").then((response) => {
      console.log(response.data);
      setRunes(response.data);
    });
  };

  useEffect(handleIndexBuilds, []);
  useEffect(handleIndexRunes, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            localStorage.jwt === undefined ? (
              <Home />
            ) : (
              <BuildsIndex
                builds={builds}
                onShowBuildsNew={handleShowBuildsNew}
                onShowBuild={handleShowBuild}
                onShowUpdateBuild={handleShowBuildsUpdate}
                onShowBuildsDestroy={handleShowBuildsDestroy}
              />
            )
          }
        />
        <Route path="/builds" element={<BuildsIndex builds={builds} />} />
        <Route path="/builds/new" element={<BuildsNew runes={runes} onCreateBuild={handleCreateBuild} />} />
      </Routes>
      <Modal show={isBuildsShowVisible} onClose={handleCloseBuildsShow}>
        <BuildsShow build={currentBuild} />
      </Modal>
      <Modal show={isBuildsUpdateVisible} onClose={handleCloseBuildsUpdate}>
        <BuildsUpdate build={currentBuild} runes={runes} onUpdateBuild={handleUpdateBuild} />
      </Modal>
      <Modal show={isBuildsNewVisible} onClose={handleCloseBuildsNew}>
        <BuildsNew runes={runes} onCreateBuild={handleCreateBuild} />
      </Modal>
      <Modal show={isBuildsDestroyVisible} onClose={handleCloseBuildsDestroy}>
        <BuildsDestroy build={currentBuild} runes={runes} onDestroyBuild={handleDestroyBuild} />
      </Modal>
    </div>
  );
}
