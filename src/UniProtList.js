import React from "react";
import useDataApi from "./useData";
import ProteinCard from "./ProteinCard";

const baseUrl = "//wwwdev.ebi.ac.uk/uniprot/api/diseaseservice/proteins/";
const apiURL = `//wwwdev.ebi.ac.uk/uniprot/api/uniprotkb/accession/`;

const UniProtList = ({ accession }) => {
  const data = useDataApi(`${baseUrl}${accession}`);

  if (!data || Object.keys(data).length <= 0) {
    return null;
  }

  return (
    <div className="App-column">
      <ProteinCard data={data.result} />
    </div>
  );
};

export default UniProtList;
