import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButtons from './TabButtons.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h1>{EXAMPLES[selectedTopic].title}</h1>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }


    return (
        <section id="examples">
            <h1>Examples</h1>
            <menu>
                <TabButtons isSelected={selectedTopic === 'components'}
                    onSelect={() => handleSelect('components')}>Components</TabButtons>
                <TabButtons isSelected={selectedTopic === 'jsx'}
                    onSelect={() => handleSelect('jsx')}>Jsx</TabButtons>
                <TabButtons isSelected={selectedTopic === 'props'}
                    onSelect={() => handleSelect('props')}>Props</TabButtons>
                <TabButtons isSelected={selectedTopic === 'state'}
                    onSelect={() => handleSelect('state')}>State</TabButtons>
            </menu>
            {tabContent}
        </section>
    );
}