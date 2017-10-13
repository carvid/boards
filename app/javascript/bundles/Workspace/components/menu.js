import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null,
    };
  }

  navigateTo(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.setState({ redirectTo: ev.target.href });
  }

  render() {
    if (this.redirectTo) return this.redirect();

    return (
      <ul className="nav nav-tabs nav-justified menu p-3">
        <li><a href="/app/my-boards">Boards</a></li>
      </ul>
    );
  }
}
