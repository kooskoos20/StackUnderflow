import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Label from '@material-ui/icons/LabelImportant'
import {connect} from 'react-redux'
import * as actions from '../actions/SearchActions'

const style = () => ({
    wrapper:{
        width:'26%',
        paddingTop:'3em',
        fontSize:'12px',
        '@media(max-width:805px)':{
            display:'none'
        },
    },
    question:{
        padding:'1em 3em 1em 3em',
        color:'#1c7dd6',
        display:'flex',
        borderBottom:'1px solid #ddd',
        '&:hover':{
            cursor:'pointer'
        }
    },
    header:{
        textAlign:'center',
        width:'100%',
        padding:'0.5em 0',
        backgroundColor:'orange',
        fontSize:'20px'
    },
    border:{
        border:'2px solid orange'
    }
})

class RightSidePanel extends Component {
    componentDidMount(){
        this.props.getTopTenNewest();
    }

    render() {
        const {classes} = this.props;
        let questions
        if(this.props.newestQuestions)
            questions = this.props.newestQuestions.map(item => <div onClick={() => {window.location =`/question/${item.question_id}`}} className={classes.question} key={item.creation_date}>
            <Label style={{marginRight:'6px'}}/>            
            {item.title}</div>)
        return (
            <div className={classes.wrapper}>
                <div className={classes.border}>
                    <div className={classes.header}>Newest Questions</div>
                    {questions}
                </div>
            </div>  
        );
    }
}


const mapStateToProps = state => ({
    newestQuestions : state.search.questions    
})

const mapDispatchToProps = dispatch => ({
    getTopTenNewest : () => dispatch(actions.getNewestQuestions())
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(style)(RightSidePanel));