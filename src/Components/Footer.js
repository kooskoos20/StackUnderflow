import React, { Component } from 'react';
import {withStyles} from '@material-ui/core'


const styles = () => ({
    footer:{
      backgroundColor:'#242729',
      height:'20vh',
      display:'flex',
      justifyContent:'space-around',
      color:'#ddd',
      padding:'2em'
    },
    li:{
      padding:'0.3em',
      listStyle:'none'
    },
    companyName:{
      marginBottom:'1em'
    }
  })

class Footer extends Component {
    render() {
  const {classes} = this.props;

        return (
            <footer>
          <div className={classes.footer}>
            <div>
            <p className={classes.companyName}>stack<b>Underflow</b></p>
            <li className={classes.li}>Questions</li>
            <li className={classes.li}>Jobs</li>
            <li className={classes.li}>Help</li>
            <li className={classes.li}>Developer</li>
            <li className={classes.li}>Talent</li>
            </div>

            <div className="">
            <p className={classes.companyName}><b>Products</b></p>
            <li className={classes.li}>Teams</li>
            <li className={classes.li}>Talent</li>
            <li className={classes.li}>Advertising  </li>
            <li className={classes.li}>Developer</li>
            <li className={classes.li}>Technology</li>
            
            </div>

            <div className="">
            <p className={classes.companyName}><b>Network</b></p>
            <li className={classes.li}>Technology</li>
            <li className={classes.li}>Life</li>
            <li className={classes.li}>Culture</li>
            <li className={classes.li}>Science</li>
            <li className={classes.li}>Other</li>
            
            </div>
            </div>
      </footer>
        );
    }
}

export default withStyles(styles)(Footer);