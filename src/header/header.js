import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="portfolio-header">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default Header;
