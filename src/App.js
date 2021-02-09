import React, { Component } from 'react'
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: null
    }
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ person: data.results[0], loading: false})
  }
  
  render() {
    if (this.state.loading) {
      return <progress class="progress is-medium is-info container mt-5" max="100"></progress>;
      }

    return (
      <div className="App">
        <div className="kotak">
        <p className="profile mb-4 has-text-weight-bold "> Profile Page</p>
          <img className="mt-4 is-rounder" src={this.state.person.picture.large} alt="" />
          <p className="mt-5">Name: {this.state.person.name.first} {this.state.person.name.last}</p>
          <p className="mt-4">Email : {this.state.person.email}</p>
          <p className="mt-5">Phone :  {this.state.person.phone}</p>
          <p className="mt-5">Username : {this.state.person.login.username}</p>
          <button className="button is-info mt-5" onClick={() => window.location.reload(false)}>Refresh data</button>
      </div>
    </div>
    )
  }
}
