import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Switch from 'material-ui/Switch';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import withRoot from './components/withRoot';

class Children extends Component {

  componentWillMount(){
    injectTapEventPlugin();
  }

  render() {
    return (
      <div>
        <header className="mdc-toolbar mdc-toolbar--fixed">
          <div className="mdc-toolbar__row">
            <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
              <span className="mdc-toolbar__title">Koala savings</span>
              <Menu value={this.state.menuPosition} onChange={this.handleChange}>
                  <MenuItem className="mdc-toolbar__title" value={1} primaryText="Never">Never</MenuItem>
                  <MenuItem value={2} primaryText="Every Night" />
              </Menu>
            </section>
            <section
              className="mdc-toolbar__section mdc-toolbar__section--align-end"
              role="toolbar"
            >
              {this.state.signedIn === false &&
                <a
                  className="material-icons mdc-toolbar__icon"
                  aria-label="Sign in"
                  alt="Sign in"
                  onClick={e => {
                    e.preventDefault();
                    window.gapi.auth2.getAuthInstance().signIn();
                  }}
                >
                  perm_identity
                </a>}
              {this.state.signedIn &&
                <a
                  className="material-icons mdc-toolbar__icon"
                  aria-label="Sign out"
                  alt="Sign out"
                  onClick={e => {
                    e.preventDefault();
                    window.gapi.auth2.getAuthInstance().signOut();
                  }}
                >
                  exit_to_app
                </a>}
            </section>
          </div>
        </header>
        <div className="toolbar-adjusted-content">
          {this.state.signedIn === undefined && <LoadingBar />}
          {this.state.signedIn === false &&
            <div className="center">
              <button
                className="mdc-button sign-in"
                aria-label="Sign in"
                onClick={() => {
                  window.gapi.auth2.getAuthInstance().signIn();
                }}
              >
                Sign In
              </button>
            </div>}
          {this.state.signedIn && this.renderBody()}
        </div>
        <div
          ref={el => {
            if (el) {
              this.snackbar = new MDCSnackbar(el);
            }
          }}
          className="mdc-snackbar"
          aria-live="assertive"
          aria-atomic="true"
          aria-hidden="true"
        >
          <div className="mdc-snackbar__text" />
          <div className="mdc-snackbar__action-wrapper">
            <button
              type="button"
              className="mdc-button mdc-snackbar__action-button"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    );
  }


}

export default Children;
