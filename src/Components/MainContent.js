import React, { Component } from 'react';
import SideBar from './SideBar';
import Content from './Content'
import {withStyles} from '@material-ui/core/styles'
import RightSidePanel from './RightSidePanel';


const styles = () => ({
    mainContent:{
        display:'flex',
        width:'1200px',
        // '@media(min-width:1600px)':{
        //     width:'1100px',
        // },
    },
    wrapper:{
        display:'flex',
        justifyContent:'center',
        maxWidth:'100%',
    }
  })

class MainContent extends Component {
    state = {  };
    render() {
    const {classes} = this.props
        return (
            <div className={classes.wrapper}>
            <div className={classes.mainContent}>            
                <SideBar/>
                <Content />
                <RightSidePanel/>
            </div>
            </div>
        );
    }
}

export default withStyles(styles)(MainContent);