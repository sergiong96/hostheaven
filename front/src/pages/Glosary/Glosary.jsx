import './_Glosary.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ConceptView from './ConceptView/ConceptView';
import { getAllConcepts } from '../../services/GlosaryService';
import { useEffect, useState } from 'react';

function Glosary() {

    const [concepts, setConcepts] = useState([]);
    const [seeConcept, setSeeConcept] = useState({});

    useEffect(() => {
        getAllConcepts().then((res) => {
            return res.json();
        }).then((data) => {
            setConcepts(data);
        })
    }, []);



    const handleClick = (event) => {
        const selectedConcept = concepts.find(concept => parseInt(concept.id_concept) === parseInt(event.target.id))
        setSeeConcept(selectedConcept);
    }


    return (
        <>
            <Header />

            <main id="glosary-page">
                <h3>El hosting puede resultar complejo. Deja que te ayudemos</h3>
                <aside id="concept-names-container">
                    <ul>
                        {concepts.map((concept) => (
                            <li key={concept.id_concept} id={concept.id_concept} onClick={handleClick}>{concept.concept_name}</li>
                        ))
                        }
                    </ul>
                </aside>
                <section id="description-containers">
                    <ConceptView concept={seeConcept} />
                </section>
            </main>

            <Footer />

        </>

    );
};

export default Glosary;