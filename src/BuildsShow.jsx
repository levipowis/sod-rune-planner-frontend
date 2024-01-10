import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import HTMLReactParser from "html-react-parser";

export function BuildsShow(props) {
  // State variable for storing font color based on the character class of the build
  const [classFontColor, setClassFontColor] = useState();

  // State variables for storing html content from the rune descriptions
  const [glovesRuneDescription, setGlovesRuneDescription] = useState("");
  const [chestRuneDescription, setChestRuneDescription] = useState("");
  const [legsRuneDescription, setLegsRuneDescription] = useState("");

  // Variable to store the current build's character class
  const characterClass = props.build.character_class;

  // Handler function to set the classFontColor state variable based on Blizzard's official class colors
  const handleClassFontColor = () => {
    if (characterClass === "Druid") {
      setClassFontColor("#FF7C0A");
    } else if (characterClass === "Hunter") {
      setClassFontColor("#AAD372");
    } else if (characterClass === "Mage") {
      setClassFontColor("#3FC7EB");
    } else if (characterClass === "Paladin") {
      setClassFontColor("#F48CBA");
    } else if (characterClass === "Priest") {
      setClassFontColor("#FFFFFF");
    } else if (characterClass === "Rogue") {
      setClassFontColor("#FFF468");
    } else if (characterClass === "Shaman") {
      setClassFontColor("#0070DD");
    } else if (characterClass === "Warlock") {
      setClassFontColor("#8788EE");
    } else if (characterClass === "Warrior") {
      setClassFontColor("#C69B6D");
    }
  };

  // Runs handleClassFontColor when page renders
  useEffect(handleClassFontColor, [characterClass]);

  // Sanitizes and sets rune description state variables
  useEffect(() => {
    const sanitizedGlovesRuneDescription = DOMPurify.sanitize(props.build.gloves_rune.description);
    const sanitizedChestRuneDescription = DOMPurify.sanitize(props.build.chest_rune.description);
    const sanitizedLegsRuneDescription = DOMPurify.sanitize(props.build.legs_rune.description);
    setGlovesRuneDescription(sanitizedGlovesRuneDescription);
    setChestRuneDescription(sanitizedChestRuneDescription);
    setLegsRuneDescription(sanitizedLegsRuneDescription);
  }, [props.build.gloves_rune.description, props.build.chest_rune.description, props.build.legs_rune.description]);

  return (
    <div className="container">
      <div className="row text-center m-4">
        {/* Sets the color of the character name based on the character class */}
        <h1 style={{ color: classFontColor }}>{props.build.character_name}</h1>
        <h2>{props.build.build_name}</h2>
      </div>
      {/* A three column grid that shows which rune is in which slot */}
      <div className="row">
        {/* Gloves Rune grid column */}
        <div className="col">
          <div>
            <h4 className="p-2 text-warning text-center">Gloves Rune</h4>
          </div>
          <div className="container p-2 me-4">
            <div className="border border-secondary rounded bg-black mt-3 p-2">
              <span className="me-2">
                <img height="32" width="32" src={props.build.gloves_rune.image_url}></img>
              </span>
              <span className="m-2 fs-5">{props.build.gloves_rune.name}</span>
              {/* Renders the rune description as HTML from the database */}
              <div className="m-1 text-warning">{HTMLReactParser(glovesRuneDescription)}</div>
            </div>
          </div>
        </div>
        {/* Chest Rune grid column */}
        <div className="col">
          <div>
            <h4 className="p-2 text-warning text-center">Chest Rune</h4>
          </div>
          <div className="container p-2 me-4">
            <div className="border border-secondary rounded bg-black mt-3 p-2">
              <span className="me-2">
                <img height="32" width="32" src={props.build.chest_rune.image_url}></img>
              </span>
              <span className="m-2 fs-5">{props.build.chest_rune.name}</span>
              {/* Renders the rune description as HTML from the database */}
              <div className="m-1 text-warning">{HTMLReactParser(chestRuneDescription)}</div>
            </div>
          </div>
        </div>
        {/* Legs Rune grid column */}
        <div className="col">
          <div>
            <h4 className="p-2 text-warning text-center">Legs Rune</h4>
          </div>
          <div className="container p-2 me-4">
            <div className="border border-secondary rounded bg-black mt-3 p-2">
              <span className="me-2">
                <img height="32" width="32" src={props.build.legs_rune.image_url}></img>
              </span>
              <span className="m-2 fs-5">{props.build.legs_rune.name}</span>
              {/* Renders the rune description as HTML from the database */}
              <div className="m-1 text-warning">{HTMLReactParser(legsRuneDescription)}</div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="btn-group col-5 mx-auto mb-3">
            <button type="button" className="btn btn-dark btn-lg" onClick={() => props.onShowUpdateBuild(props.build)}>
              Update Build
            </button>
            <button className="btn btn-lg btn-danger" onClick={() => props.onShowBuildsDestroy(props.build)}>
              Delete Build
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
