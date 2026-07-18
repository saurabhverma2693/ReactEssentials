import { CORE_CONCEPTS } from "../data";
import {CoreConcepts} from "./CoreConcepts"

export default function CoreConcept() {
    return (
        <section id="core-concepts">
            <h1>Core Concepts</h1>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem} />))}
            </ul>
        </section>
    );
}