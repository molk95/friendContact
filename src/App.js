import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { setSearchField, requestKittens } from './actions/actions';

const mapStateToProps = (state) => {
  return {
    search: state.searchKittens.search,
    kittens: state.requestKittens.kittens,
    isPending: state.requestKittens.isPending,
    error: state.requestKittens.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKittens: () => dispatch(requestKittens()),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      // kittens: [],
      // search: '',
    };
  }
  // onSearchChange = (event) => {
  //   this.setState({ search: event.target.value });
  // };
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.cypress.io/users')
  //     .then((response) => response.json())
  //     .then((user) =>
  //       this.setState({
  //         kittens: user,
  //       })
  //     );
  // }
  componentDidMount(){
    this.props.onRequestKittens()
  }
  render() {
    // const { kittens } = this.state;
    const { search, onSearchChange,kittens, isPending } = this.props;
    const filterKittens = kittens.filter((kitten) => {
      return kitten.name.toLowerCase().includes(search.toLowerCase());
    });
    if (isPending === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1 title">CatsCon</h1>
          <SearchBox searchChange={onSearchChange} />
          <CardList kittens={filterKittens} />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
