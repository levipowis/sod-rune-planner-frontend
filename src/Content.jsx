import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Home } from "./Home";
import { BuildsIndex } from "./BuildsIndex";
import { BuildsNew } from "./BuildsNew";

export function Content() {
  const [builds, setBuilds] = useState([]);
  const [runes, setRunes] = useState([]);

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
    });
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
        <Route path="/" element={localStorage.jwt === undefined ? <Home /> : <BuildsIndex builds={builds} />} />
        <Route path="/builds" element={<BuildsIndex builds={builds} />} />
        <Route path="/builds/new" element={<BuildsNew runes={runes} onCreateBuild={handleCreateBuild} />} />
      </Routes>
    </div>
  );
}
