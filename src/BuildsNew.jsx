import { useState, useEffect } from "react";
import Select from "react-select";

export function BuildsNew(props) {
  // An array of options used by react-select to provide WoW character class choices
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

  // State variables to store values used by handlers for selecting character class and rune options
  const [selectedClass, setSelectedClass] = useState();
  const [classGloveRunes, setClassGloveRunes] = useState([]);
  const [classChestRunes, setClassChestRunes] = useState([]);
  const [classLegRunes, setClassLegRunes] = useState([]);

  // Sets selectedClass state variable from classOptions array
  const handleClassSelection = (selectedClassOption) => {
    setSelectedClass(selectedClassOption.value);
  };

  // Filters runes based on selectedClass and the rune_slot being "Gloves"
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

  // Filters runes based on selectedClass and the rune_slot being "Chest"
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

  // Filters runes based on selectedClass and the rune_slot being "Legs"
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

  // Handles the form submit to the backend and reloads BuildsIndex.jsx
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateBuild(params, () => window.location.reload());
  };

  // Runs the filter handlers after page renders
  useEffect(handleFilterGloveRunesByClass, [props.runes, selectedClass]);
  useEffect(handleFilterChestRunesByClass, [props.runes, selectedClass]);
  useEffect(handleFilterLegRunesByClass, [props.runes, selectedClass]);

  // Console.log statements used for testing that run after page renders
  useEffect(() => {
    console.log("Selected class:", selectedClass);
    console.log("Class glove runes:", classGloveRunes);
    console.log("Class chest runes:", classChestRunes);
    console.log("Class leg runes:", classLegRunes);
  });

  return (
    <div>
      {/* New build form */}
      <form className="newBuildForm" onSubmit={handleSubmit}>
        <h1>New Build</h1>
        <div>
          {" "}
          <label htmlFor="build_name">BUILD NAME:</label>
        </div>
        <div className="mb-1">
          <input className="form-control" type="text" name="build_name" />
        </div>
        <div>
          {" "}
          <label htmlFor="build_name">CHARACTER NAME:</label>
        </div>
        <div className="mb-1">
          <input className="form-control" type="text" name="character_name" />
        </div>

        {/* Select dropdowns using the react-select library */}
        <div className="mb-1">
          CLASS:
          <Select
            className="text-dark"
            name="character_class"
            options={classOptions}
            onChange={handleClassSelection}
            autoFocus={true}
          />
        </div>
        <div className="mb-1">
          GLOVE RUNE:
          <Select className="text-dark" name="gloves_rune_id" options={classGloveRunes} />
        </div>
        <div className="mb-1">
          CHEST RUNE:
          <Select className="text-dark" name="chest_rune_id" options={classChestRunes} />
        </div>
        <div className="mb-1">
          LEG RUNE:
          <Select className="text-dark" name="legs_rune_id" options={classLegRunes} />
        </div>
        {/* Button to submit new build form */}
        <div className="mb-1">
          <button type="submit" className="btn btn-dark">
            Create Build
          </button>
        </div>
      </form>
    </div>
  );
}
