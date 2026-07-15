import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Headers/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButtons from './components/TabButtons.jsx';
import { EXAMPLES } from './data.js';




function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  // console.log("selectedTopic =", selectedTopic);
  // console.log("exampleData =", EXAMPLES[selectedTopic]);
  // let tabContents = 'Please click a button.....'
  function handleSelect(selectedButton) {

    // selectedButton => 'Components','Jsx','Props','State'
    // tabContents = selectedButton;
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
    // console.log(tabContents);
  }
  console.log("app components execute.....");
   console.log("selectedTopic =", selectedTopic);
  console.log("EXAMPLES[selectedTopic] =", EXAMPLES[selectedTopic]);
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h1>Core Concepts</h1>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h1>Examples</h1>
          <menu>
            <TabButtons onSelect={() => handleSelect('components')}>Components</TabButtons>
            <TabButtons onSelect={() => handleSelect('jsx')}>Jsx</TabButtons>
            <TabButtons onSelect={() => handleSelect('props')}>Props</TabButtons>
            <TabButtons onSelect={() => handleSelect('state')}>State</TabButtons>
          </menu>

          <div id="tab-content">
            <h1>{EXAMPLES[selectedTopic].title}</h1>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>

          {/* {tabContents} */}
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
