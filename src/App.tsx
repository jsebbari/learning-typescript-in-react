import React from 'react';
import logo from './logo.svg';
import './App.css';
import Enfant from './Enfant';

function App() {

  const article= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores perferendis numquam voluptatem quos perspiciatis at a similique accusamus, delectus harum, quaerat quisquam repellendus odio minus reiciendis ad quas optio expedita dolorem minima vero? Minima voluptatem inventore rerum perspiciatis nostrum placeat pariatur facilis, enim nemo, illo nesciunt nihil tempora voluptate!"
  return (
    <div className="App">
      <Enfant title="Je suis le titre" content={article} date="Date: Aujourd'hui"/>
    </div>
  );
}

export default App;
