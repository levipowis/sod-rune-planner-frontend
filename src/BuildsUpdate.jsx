import { useState, useEffect } from "react";
import Select from "react-select";

export function BuildsUpdate(props) {
  const [classGloveRunes, setClassGloveRunes] = useState([]);
  const [classChestRunes, setClassChestRunes] = useState([]);
  const [classLegRunes, setClassLegRunes] = useState([]);

  const defaultClass = { value: props.build.character_class, label: props.build.character_class };
  const defaultGlovesRune = { value: props.build.gloves_rune.id, label: props.build.gloves_rune.name };
  const defaultChestRune = { value: props.build.chest_rune.id, label: props.build.chest_rune.name };
  const defaultLegsRune = { value: props.build.legs_rune.id, label: props.build.legs_rune.name };

  const handleFilterGloveRunesByClass = () => {
    setClassGloveRunes(
      props.runes
        .filter((rune) => rune.character_class.includes(defaultClass.value) && rune.rune_slot.includes("Gloves"))
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
        .filter((rune) => rune.character_class.includes(defaultClass.value) && rune.rune_slot.includes("Chest"))
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
        .filter((rune) => rune.character_class.includes(defaultClass.value) && rune.rune_slot.includes("Legs"))
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

  const colorStyles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "black",
      };
    },
  };

  useEffect(handleFilterGloveRunesByClass, [props.runes, defaultClass.value]);
  useEffect(handleFilterChestRunesByClass, [props.runes, defaultClass.value]);
  useEffect(handleFilterLegRunesByClass, [props.runes, defaultClass.value]);

  useEffect(() => {
    console.log("Class glove runes:", classGloveRunes);
    console.log("Class chest runes:", classChestRunes);
    console.log("Class leg runes:", classLegRunes);
    console.log("Default class:", defaultClass.value);
  });

  return (
    <div>
      <form className="updateBuildForm" onSubmit={handleSubmit}>
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
            defaultValue={defaultClass}
            placeholder={defaultClass}
            className="text-dark"
            styles={colorStyles}
            name="character_class"
          />
        </div>
        <div className="mb-3">
          GLOVE RUNE:
          <Select
            placeholder={defaultGlovesRune}
            defaultValue={defaultGlovesRune}
            className="text-dark"
            styles={colorStyles}
            name="gloves_rune_id"
            options={classGloveRunes}
          />
        </div>
        <div className="mb-3">
          CHEST RUNE:
          <Select
            placeholder={defaultChestRune}
            defaultValue={defaultChestRune}
            className="text-dark"
            styles={colorStyles}
            name="chest_rune_id"
            options={classChestRunes}
          />
        </div>
        <div className="mb-3">
          LEG RUNE:
          <Select
            placeholder={defaultLegsRune}
            defaultValue={defaultLegsRune}
            className="text-dark"
            styles={colorStyles}
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
