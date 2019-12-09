import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
class Button extends Component {
    render() {
      return (
       <h1></h1>
      );
    }
  }
  
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  export default Button;