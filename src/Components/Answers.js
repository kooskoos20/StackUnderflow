import React, { Component } from 'react';
import SideBar from './SideBar';
import AnswerContent from './AnswerContent'
import {withStyles} from '@material-ui/core/styles'
import RightSidePanel from './RightSidePanel';
import Content from './Content';


const styles = () => ({
    Answers:{
        display:'flex',
        width:'1200px',
        display:'flex',
        justifyContent:'center',
       
    },
    wrapper:{
        display:'flex',
        justifyContent:'center',
        minWidth:'100%',
    },
  })

class Answers extends Component {
    state = {  };
    render() {
    const {classes} = this.props
        return (
            <div className={classes.wrapper}>
            <div className={classes.Answers}>            
                <SideBar/>
                <AnswerContent id={this.props.id}/>
                <RightSidePanel/>
            </div>
            </div>
        );
    }
}

export default withStyles(styles)(Answers);