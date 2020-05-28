import React, { useState } from "react";
import Avataaar from "./avatar";
import "./App.css";

const App = () => {
  const [Attributes, setAttributes] = useState({
    topType: "ShortHairDreads02",
    accessoriesType: "Prescription02",
    hairColor: "BrownDark",
    facialHairType: "Blank",
    clotheType: "Hoodie",
    clotheColor: "PastelBlue",
    eyeType: "Happy",
    eyebrowType: "Default",
    mouthType: "Smile",
    avatarStyle: "Circle",
    skinColor: "Light",
  });
  return (
    <div>
      <a
        class="github-fork"
        href="https://github.com/nhemnt/react-bitmoji"
        title="Fork me on GitHub"
        data-ribbon="Fork me on GitHub"
      >
        Fork me on GitHub
      </a>
      <Avataaar value={Attributes} onChange={setAttributes} />
    </div>
  );
};

export default App;
