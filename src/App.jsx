import { CORE_CONCEPTS } from './data.js'
import Header from './components/Headers/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButtons from './components/TabButtons.jsx';



function App() {
  function handleSelect(selectedButton) {
   // selectedButton => 'Components','Jsx','Props','State'
    console.log(selectedButton);
  }
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
            <TabButtons onSelect={()=> handleSelect('Components')}>Components</TabButtons>
            <TabButtons onSelect={()=> handleSelect('Jsx')}>Jsx</TabButtons>
            <TabButtons onSelect={()=> handleSelect('Props')}>Props</TabButtons>
            <TabButtons onSelect={()=> handleSelect('State')}>State</TabButtons>
          </menu>
          Dynamic Contents 
        </section>
      </main>
    </div>
  );
}

export default App;
