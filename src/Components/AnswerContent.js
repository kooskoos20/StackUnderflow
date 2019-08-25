import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import * as actions from '../actions/SearchActions'
import Tag from './Tag'
import Comment from './Comment'

const style = () => ({
    contentWrapper:{
        width:'55.2%',
        '@media(max-width:1700px)':{
            padding:'1em',
        },
        '@media(max-width:955px)':{
            width:'40%',
        },
        
        borderLeft:'1px solid #ddd',
        minHeight:'92vh',
        padding:'2em',
        fontSize:'14px',
        fontFamily:'Arial',
        lineHeight:'1.4',
    },
    title:{
        fontSize:'30px',
        paddingBottom:'1em',
        borderBottom : '1px solid #ddd'
    },
    view_count:{
        fontSize:'10px',
        color:'#888'
    },
    owner:{
        backgroundColor:'#e1ecf4',
        marginLeft:'80%',
        padding:'1em',
        borderRadius:'5px',
        color:'#3b749e',
        textAlign:'center'
    },
    question:{
        borderBottom:'1px solid #ddd',
        width:'100%',
        paddingBottom:'2em',
    },
    answer_count:{
        color:'#888',
        padding:'2em',
        fontSize:'24px'
    },
    comments:{
        borderBottom:'1px solid #ddd'
    }
})

class AnswerContent extends Component {
    state = {  };
    componentDidMount(){
        this.props.getAnswerByQuestionId(this.props.id);
        this.props.getQuestionByQuestionId(this.props.id);
    }
    render() {
        const {classes} = this.props
        console.log(this.props.answer)
        console.log(this.props.question)
        if(this.props.answer && this.props.question){
            let answer = this.props.answer[0],i=0
            let question = this.props.question[0]
            return (
                <div className={classes.contentWrapper}>
                    <div className={classes.question}>
                        <div className={classes.title}>{
                            answer.title}
                            <p className={classes.view_count}>Viewed {question.view_count}</p>
                        </div>
                        <div dangerouslySetInnerHTML={{__html:answer.body}}/>
                        <div>
                            {question.tags.map(tag => <Tag tag={tag} key={i++} />)}
                        </div>
                        <div className={classes.owner}>
                            Asked by {question.owner.display_name}
                        </div>
                    </div>
                    <div className={classes.comments}>
                        {answer.comment_count>0 &&
                        answer.comments.map(comment => <Comment comment={comment.body} key={i++}/>)}
                        {answer.answers &&
                        <div className={classes.answer_count}>{answer.answers.length} Answer</div>}
                    </div>
                    {answer.answers &&
                    answer.answers.map(answer => <div style={{margin:'0 2em',borderBottom:'1px solid #ddd'}} key={i++}>
                        <div dangerouslySetInnerHTML={{__html:answer.body}} key={i++}/>
                    {answer.comment_count>0 && answer.comments.map(comment => <Comment comment={comment.body} key={i++}/>)}
                    </div>)}
                </div>
            );
        }
        else return (<div className={classes.contentWrapper}>Loading</div>)
    }
}


const mapStateToProps = state => ({
    answer:state.search.answer,
    question:state.search.question
})

const mapDispatchToProps = dispatch => ({
    getAnswerByQuestionId : (id) => dispatch(actions.getAnswerDetailsByQuestionId(id)),
    getQuestionByQuestionId:(id) => dispatch(actions.getQuestionDetailsByQuestionId(id))
})


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(style)(AnswerContent));