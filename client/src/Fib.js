import React, { Component } from "react";
import axios from "axios";

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: "",
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndex();
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  async fetchIndex() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  }

  renderSeenIndex() {
    return this.state.seenIndexes.map(({ itm }) => itm).join(", ");
  }
  renderValues() {
    const entries = [];

    for (let keys in this.state.values) {
      entries.push(
        <div key={keys}>
          For index {keys} I calculated {this.state.values[keys]}
        </div>
      );
    }
    return entries;
  }

   handelSubmit= async (event) => {
    // event.preventDefault()

    await axios.post('/api/values',{
        index:this.state.index
    });
    this.setState({index : ''})
  } 
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit()}>
          <label>Enter the index : </label>
          <input
            type="text"
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Indexes i have seen:</h3>
        {this.renderSeenIndex()}
        <h3>Calculated values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;