import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Enfant from './Enfant';
import dayjs from 'dayjs'
import 'dayjs/locale/fr'




function App() {
  dayjs.locale('fr')
  let date = dayjs().format('D MMMM YYYY')


  const article= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui asperiores perferendis numquam voluptatem quos perspiciatis at a similique accusamus, delectus harum, quaerat quisquam repellendus odio minus reiciendis ad quas optio expedita dolorem minima vero? Minima voluptatem inventore rerum perspiciatis nostrum placeat pariatur facilis, enim nemo, illo nesciunt nihil tempora voluptate!"
  return (
    <div className="App">
      <Enfant title="Je suis le titre" content={article} date={date}/>
      
    </div>
  );
}

export default App;
