export function BuildsShow(props) {
  return (
    <div>
      <h1>Build information</h1>
      <p>Build Name: {props.build.build_name}</p>
      <p>Character Name: {props.build.character_name}</p>
      <p>Gloves Rune: {props.build.gloves_rune.name}</p>
      <p>Chest Rune: {props.build.chest_rune.name}</p>
      <p>Legs Rune: {props.build.legs_rune.name}</p>
    </div>
  );
}
