import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './HeaderAccordion.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [isActive, setIsActive] = React.useState(false);
  const onClick = () => setIsActive(!isActive);
  const dropdownRef = React.useRef(null);

  return (
    // <div className={classes.root}>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<MenuIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //     ></AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         <h4> Услуги</h4>
    //         <h4> О нас</h4>
    //         <h4> Контакты</h4>
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    // </div>

    <div style={{ position: 'relative' }} className="Maindiv">
      <div>
        <Button onClick={onClick}>
          <MenuIcon onClick={onClick} className={classes.menuIcon} />
        </Button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            <div>
              <li onClick={onClick} className={classes.bbutton}>
                Услуги
              </li>

              <li onClick={onClick}>О нас</li>
              <li> Контакты</li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
