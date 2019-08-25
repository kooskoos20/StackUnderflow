import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import Tag from './Tag';
import {Link} from 'react-router-dom'

const style = () => ({
    contentWrapper:{
        borderBottom:'1px solid #ddd',
        color:'#444'
    },
    answer_count:{
        border:'1px solid #65ba7d',
        textAlign:'center',
        paddingTop:'10%',
        borderRadius:'4px',
    },
    answer_count_background :{
        backgroundColor:'#65ba7d',
        color:'#fff'
    },
    link:{
        textDecoration:'none'
    }
})

class QuestionCard extends Component {
    state = {  };
    render() {
        const {classes} = this.props
        const backgroundColor = this.props.is_answered ? classes.answer_count_background : ""
        let badge;
        let i=0;
        if(this.props.tags.length>0)
            badge = this.props.tags.map(tag => <Tag tag={tag} key={i++} />)
        return (
            <Link to={`/question/${this.props.question_id}`} className={classes.link}>
                <div className={classes.contentWrapper}>
                    <Grid container
                        direction="row"
                        alignItems="center">
                        <Grid item xs={1}>
                            <div style={{textAlign:'center'}}>
                                {this.props.score}
                                <p style={{fontSize:'10px'}}>votes</p>                            
                            </div>
                            <div className={[classes.answer_count,backgroundColor].join(' ')}>
                                {this.props.answer_count}
                                <p style={{fontSize:'10px'}}>answers</p>
                            </div>
                        </Grid>
                        <Grid item xs={10}>
                            <div style={{padding:'1em',color:'#1c7dd6'}}>
                                <p>{`Q:${this.props.title}`}</p>
                                <div>
                                    {badge}
                                    <div style={{textAlign:'right',width:'100%',color:'#555'}}>asked by <span style={{color:'#1c7dd699'}}>{this.props.owner}</span></div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Link>
        );
    }
}

export default withStyles(style)(QuestionCard);