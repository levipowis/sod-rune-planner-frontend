import { useState, useEffect } from "react";
import Select from "react-select";

export function BuildsNew(props) {
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
  const [classRunes, setClassRunes] = useState([]);

  const handleClassSelection = (selectedClassOption) => {
    setSelectedClass(selectedClassOption.value);
  };

  const handleFilterGloveRunesByClass = () => {
    setClassRunes(props.runes.filter((rune) => rune.character_class.includes(selectedClass)));
  };

  useEffect(handleFilterGloveRunesByClass, [props.runes, selectedClass]);

  useEffect(() => {
    console.log("Selected class:", selectedClass);
    console.log("Class runes:", classRunes);
  });

  return (
    <div>
      <form id="newBuildForm">
        <h1 style={{ color: "white" }}>New Build</h1>
        <div>
          {" "}
          <label htmlFor="build_name">BUILD NAME:</label>
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" name="build_name" />
        </div>
        <div>
          {" "}
          <label htmlFor="build_name">CHARACTER NAME:</label>
        </div>
        <div className="mb-3">
          <input className="form-control" type="text" name="character_name" />
        </div>
        <div className="mb-3">
          CLASS:
          <Select className="text-dark" options={classOptions} onChange={handleClassSelection} autoFocus={true} />
        </div>
      </form>
    </div>
  );
}
