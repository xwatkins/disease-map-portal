import React, { Fragment, useState } from "react";
import { Card } from "franklin-sites";

const ProteinCard = ({ data, id = "" }) => {
  const [showWholeFunction, setShowWholeFunction] = useState(false);

  const diseaseNotes = data.diseases;

  return (
    <Card
      title={
        <Fragment>
          {data.gene} - {data.proteinName}{" "}
          <small>
            <a
              href={`//www.uniprot.org/uniprot/${data.accession}`}
              target="_blank"
            >
              {data.accession}
            </a>
          </small>
        </Fragment>
      }
      key={data.proteinId}
    >
      <h4>Function</h4>
      <p>
        {!showWholeFunction && data.description.length > 200 ? (
          <Fragment>
            <span>{data.description.substring(0, 197)}... </span>
            <a onClick={() => setShowWholeFunction(true)}>more</a>
          </Fragment>
        ) : (
          data.description
        )}
      </p>
      {data.geneCoordinates && (
        <div>
          <h4>Gene information</h4>
          {data.geneCoordinates.map(coordinate => (
            <p key={coordinate.start}>
              {coordinate.chromosome}:{coordinate.start}-{coordinate.end}{" "}
              <a
                href={`//www.ensembl.org/id/${coordinate.ensemblGeneId}`}
                target="_blank"
              >
                {coordinate.ensemblGeneId}
              </a>{" "}
              <a
                href={`//www.ensembl.org/id/${coordinate.ensemblTranscriptId}`}
                target="_blank"
              >
                {coordinate.ensemblTranscriptId}
              </a>{" "}
              <a
                href={`//www.ensembl.org/id/${coordinate.ensemblTranslationId}`}
                target="_blank"
              >
                {coordinate.ensemblTranslationId}
              </a>
            </p>
          ))}
        </div>
      )}
      {diseaseNotes && (
        <Fragment>
          {diseaseNotes.length > 0 && <h4>Disease notes</h4>}
          {diseaseNotes.map(note => (
            <Fragment key={note.diseaseName}>
              <h5>{note.diseaseName}</h5>
              <p>{note.note}</p>
            </Fragment>
          ))}
        </Fragment>
      )}
    </Card>
  );
};

export default ProteinCard;
