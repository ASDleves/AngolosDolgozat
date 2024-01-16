import React, { useState } from "react";

function Mondatkiegeszit(props) {
  const [textinput, szoveg] = useState("");
  const [gombjelen, setgombjelen] = useState(false);
  const [ellenorzes, setellenorzes] = useState(null); 
  const [kovetkezoGomb, setkovetkezoGomb] = useState(false);
  const aktMondat = props.model.aktMondat;

  const handleChange = (event) => {
    szoveg(event.target.value);
    setgombjelen(true);
    setellenorzes(null);
    setkovetkezoGomb(false);
  };

  const handleCheck = () => {
    const isCorrect = textinput === aktMondat.helyes;
    setellenorzes(isCorrect);
    if (isCorrect) {
        props.onCorrectAnswer();
        setkovetkezoGomb(true);
    } else {
        setkovetkezoGomb(false);
    }
    setgombjelen(false);
  };

  const handleNext = () => {
    props.model.kovetkezoMondat();
    szoveg("");
    setkovetkezoGomb(false);
    setellenorzes(null);
    setgombjelen(false);
  };

  const mondatereszek = aktMondat.mondat.split("_");

  return (
    <div>
      <h3>Gépeld be a megfelelő alakot!</h3>
      <p>{aktMondat.magyar}</p>
      <p>
        {mondatereszek[0]}
        <input type="text" value={textinput} onChange={handleChange} />
        {mondatereszek[1]}
        {ellenorzes === false && <span style={{ color: "red" }}> ❌</span>}
      </p>
      {gombjelen && <button onClick={handleCheck}>Ellenörzés</button>}
      {kovetkezoGomb && <button onClick={handleNext}>Következő</button>}
      <p>({aktMondat.alap})</p>
    </div>
  );
}

export default Mondatkiegeszit;
