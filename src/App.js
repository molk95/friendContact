import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kittens: [],
      search: '',
    };
  }
  onSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.cypress.io/users')
      .then((response) => response.json())
      .then((user) =>
        this.setState({
          kittens: user,
        })
      );
  }
  render() {
    const filterKittens = this.state.kittens.filter((kitten) => {
      return kitten.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    if (this.state.kittens.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1 title">Friends Contact</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList kittens={filterKittens} />
        </div>
      );
    }
  }
}

export default App;
