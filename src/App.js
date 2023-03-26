import { useState } from 'react';
import Card from './Card';
import data from './data';

function App() {
  const [people,setPeople]=useState(data);
  return (
    <main>
      <section className='container'>
        <h2>{people.length} birthdays today</h2>
        <Card people={people}/>
        <button onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
    
  );
}

export default App; 