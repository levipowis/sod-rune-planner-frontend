import { useState, useEffect } from "react";
import Select from "react-select";

export function BuildsUpdate(props) {
  const classOptions = [
    { value: "Warrior", label: "Warrior" },
    { value: "Hunter", label: "Hunter" },
    { value: "Mage", label: "Mage" },
    { value: "Priest", label: "Priest" },
    { value: "Rogue", label: "Rogue" },
    { value: "Druid", label: "Druid" },
    { value: "Paladin", label: "Paladin" },
    { value: "Warlock", label: "Warlock" },
    { value: "Shaman", label: "Shaman" },
  ];

  const [selectedClass, setSelectedClass] = useState();
  const [classGloveRunes, setClassGloveRunes] = useState([]);
  const [classChestRunes, setClassChestRunes] = useState([]);
  const [classLegRunes, setClassLegRunes] = useState([]);

  const handleClassSelection = () => {
    setSelectedClass(props.build.character_class);
  };

  const handleFilterGloveRunesByClass = () => {
    setClassGloveRunes(
      props.runes
        .filter((rune) => rune.character_class.includes(selectedClass) && rune.rune_slot.includes("Gloves"))
        .map((rune) => {
          let newArray = {};
          newArray["value"] = rune.id;
          newArray["label"] = rune.name;
          return newArray;
        })
    );
  };

  const handleFilterChestRunesByClass = () => {
    setClassChestRunes(
      props.runes
        .filter((rune) => rune.character_class.includes(selectedClass) && rune.rune_slot.includes("Chest"))
        .map((rune) => {
          let newArray = {};
          newArray["value"] = rune.id;
          newArray["label"] = rune.name;
          return newArray;
        })
    );
  };

  const handleFilterLegRunesByClass = () => {
    setClassLegRunes(
      props.runes
        .filter((rune) => rune.character_class.includes(selectedClass) && rune.rune_slot.includes("Legs"))
        .map((rune) => {
          let newArray = {};
          newArray["value"] = rune.id;
          newArray["label"] = rune.name;
          return newArray;
        })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateBuild(props.build.id, params, () => event.target.reset());
  };

  useEffect(handleClassSelection, [props.build.character_class, selectedClass]);
  useEffect(handleFilterGloveRunesByClass, [props.runes, selectedClass]);
  useEffect(handleFilterChestRunesByClass, [props.runes, selectedClass]);
  useEffect(handleFilterLegRunesByClass, [props.runes, selectedClass]);

  useEffect(() => {
    console.log("Selected class:", selectedClass);
    console.log("Class glove runes:", classGloveRunes);
    console.log("Class chest runes:", classChestRunes);
    console.log("Class leg runes:", classLegRunes);
  });

  return (
    <div>
      <form id="newBuildForm" onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}>Update Build</h1>
        <div>
          {" "}
          <label htmlFor="build_name">BUILD NAME:</label>
        </div>
        <div className="mb-3">
          <input defaultValue={props.build.build_name} className="form-control" type="text" name="build_name" />
        </div>
        <div>
          {" "}
          <label htmlFor="build_name">CHARACTER NAME:</label>
        </div>
        <div className="mb-3">
          <input defaultValue={props.build.character_name} className="form-control" type="text" name="character_name" />
        </div>
        <div className="mb-3">
          CLASS:
          <Select
            defaultInputValue={props.build.character_class}
            className="text-dark"
            name="character_class"
            options={classOptions}
            onChange={handleClassSelection}
            autoFocus={true}
          />
        </div>
        <div className="mb-3">
          GLOVE RUNE:
          <Select
            defaultInputValue={props.build.gloves_rune.name}
            className="text-dark"
            name="gloves_rune_id"
            options={classGloveRunes}
          />
        </div>
        <div className="mb-3">
          CHEST RUNE:
          <Select
            defaultInputValue={props.build.chest_rune.name}
            className="text-dark"
            name="chest_rune_id"
            options={classChestRunes}
          />
        </div>
        <div className="mb-3">
          LEG RUNE:
          <Select
            defaultInputValue={props.build.legs_rune.name}
            className="text-dark"
            name="legs_rune_id"
            options={classLegRunes}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-dark">
            Update Build
          </button>
        </div>
      </form>
    </div>
  );
}
