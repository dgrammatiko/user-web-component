import { render, html } from 'uhtml/esm/index.js';

export class UserState extends HTMLElement {
  constructor() {
    super();

    this.isLoggedIn = false;
    this.state = {
      username: '',
      cookie: '',
      loggedInTime: 0
    }
  }

  checkState() {
    if (this.state.loggedInTime > 0) {
      this.isLoggedIn = true;
    }
  }

  connectedCallback() {
    if (this.isLoggedIn) {
      render(this, html`
      Logged In html`)
    } else {
      render(this, html`
      Login Form`)
    }
  }
};
