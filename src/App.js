import React, { useState, useEffect } from "react";
import "./App.css";
import MinervaMap from "./MinervaMap";
import UniProtList from "./UniProtList";

function App() {
  const [accession, setAccession] = useState();

  useEffect(() => {
    window.addEventListener("map-click", e => {
      const reference = e.detail[0].references.find(
        ref => ref.type === "UNIPROT"
      );
      if (!reference) {
        return;
      }
      setAccession(reference.resource);
    });
  }, []);

  return (
    <div className="App">
      {accession && <UniProtList accession={accession} />}
      <MinervaMap />
    </div>
  );
}

export default App;
