import React, { useState } from "react";
import Avataaar from "./avatar";

import { GithuFork } from "./style";

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
       <GithuFork
        href="https://bluetrends.in/"
        title="Bluetrends"
        data-ribbon="Check Bluetrends"
        target="_blank"
      >
         Check Bluetrends
      </GithuFork>
      <GithuFork
        href="https://github.com/nhemnt/react-bitmoji"
        title="Fork me on GitHub"
        data-ribbon="Fork me on GitHub"
      >
        Fork me on GitHub
      </GithuFork>
      <Avataaar value={Attributes} onChange={setAttributes} />
     
    </div>
  );
};

export default App;
