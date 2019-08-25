import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'

const style = () => ({
    wrapper:{
        borderBottom:'1px solid #eee',
        fontSize:'12px',
        padding:'0.8em 2em',
        margin:'0 2em',
        lineHeight:'1.4'
    }
})

class Comment extends Component {
    state = {  };
    render() {
        const {classes} = this.props;
        return (
            <div className={[classes.wrapper,"comments"].join(' ')} dangerouslySetInnerHTML={{__html:
                this.props.comment
            }}/>
        );
    }
}

export default withStyles(style)(Comment);