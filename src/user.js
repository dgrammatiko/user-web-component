import { UserState } from './userstate.js';

if (!customElements.get('user-state')) {
  customElements.define('user-state', UserState);
}
