import React from 'react';
import Card from "./Card";
import members from "../members"

function App () {

  return (
    <div className="memory-card">
      <Card
        name={members[0].name}
        img={members[0].img}
      />
      <Card
        name={members[1].name}
        img={members[1].img}
      />
      <Card
        name={members[2].name}
        img={members[2].img}
      />
      <Card
        name={members[3].name}
        img={members[3].img}
      />
      <Card
        name={members[4].name}
        img={members[4].img}
      />
      <Card
        name={members[5].name}
        img={members[5].img}
      />
    </div>
  );
}

export default App;
