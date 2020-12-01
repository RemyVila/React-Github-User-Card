import './App.css';
import axios from 'axios';
import React from 'react';

// const remyData = {}
axios.get('https://api.github.com/users/RemyVila')
  .then((res) => {
      console.log(res.data);
  })

class App extends React.Component {
  render(){
    return (
      <div>
        
          
          
      </div>
    )
  }
}

export default App;
