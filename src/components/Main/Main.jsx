import React from "react";
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './main.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      marginTop: '24px',
    },
    '& .MuiOutlinedInput-root': {
      width: 233,
      height: 44,
      borderRadius: '10px',
      [theme.breakpoints.down('md')]: {
        width: '163px',
        height: '40px',
      }
    },
    '& .MuiInputLabel-formControl': {
      transform: 'translate(14px, 14px)',
      color: 'black',
      fontSize: '12px',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid #276AFD',
    },
    '& .PrivateNotchedOutline-legendNotched-5': {
      maxWidth: '50%',
    }
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#276AFD',
    padding: '10px 28px',
    borderRadius: '10px',
    fontSize: '18px',
    width: '233px',
    marginTop: '24px',
    [theme.breakpoints.down('md')]: {
      height: '40px',
      width: '163px',
      fontSize: '14px',
      padding: '12px',
    },
    '&:hover': {
      backgroundColor: '#246AFD',
    },
  },
}))(Button);

export const Main = () => {
  const classes = useStyles();

  return (
    <main className="main">
      <div className="main__container">
        <h2 className="main__title">
          Simple as:
        </h2>

        <ul className="main__list">
          <li className="main__list-item">
            <span className="main__number">1</span>
            <div className={classes.root}>
              <label htmlFor="user-name" className="main__text">
                Enter your business name
              </label>
              <TextField
                label="Business name"
                variant="outlined"
                id="user-name"
              />
            </div>
          </li>
          <li className="main__list-item">
            <span className="main__number">2</span>
            <p className="main__text">
              Start rewarding your customers
            </p>
            <ColorButton>
              create  template
            </ColorButton>
          </li>
          <li className="main__list-item">
            <span className="main__number">3</span>
            <p className="main__text">
              Final step
            </p>
            <ColorButton>
              start now
            </ColorButton>
          </li>
        </ul>
      </div>
    </main>
  )
};
