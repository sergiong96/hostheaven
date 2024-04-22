import './_ConceptView.scss';


interface Concept {
    id_concept: number;
    concept_name: string;
    description: string;
}

function ConceptView({ concept }: { concept: Concept | null }) {

    return concept && Object.keys(concept).length > 0 ? (
        <div className="concept-description">
            <h4>{concept.concept_name}</h4>
            <p>{concept.description}</p>
        </div>

    ) : (<div><p>Selecciona un concepto de la lista</p></div>)

}

export default ConceptView;