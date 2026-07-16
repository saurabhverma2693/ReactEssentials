import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Headers/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButtons from './components/TabButtons.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  console.log("app components execute.....");

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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h1>Core Concepts</h1>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem} />))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;


