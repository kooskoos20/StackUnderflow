import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge'

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Badge style={{backgroundColor:'#e1ecf4',borderRadius:'5px',padding:'0.3em',fontSize:'12px',marginRight:'4px',color:'#3b749e'}}>
                {this.props.tag}
            </Badge>
        );
    }
}

export default Tag;