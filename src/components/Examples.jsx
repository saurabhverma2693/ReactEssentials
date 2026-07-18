import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButtons from './TabButtons.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

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
        <Section title="Examples" id="examples">
            <Tabs buttons={<>

                <TabButtons isSelected={selectedTopic === 'components'}
                    onClick={() => handleSelect('components')}>Components</TabButtons>
                <TabButtons isSelected={selectedTopic === 'jsx'}
                    onClick={() => handleSelect('jsx')}>Jsx</TabButtons>
                <TabButtons isSelected={selectedTopic === 'props'}
                    onClick={() => handleSelect('props')}>Props</TabButtons>
                <TabButtons isSelected={selectedTopic === 'state'}
                    onClick={() => handleSelect('state')}>State</TabButtons>
            </>}>{tabContent}</Tabs>
        </Section>
    );
}