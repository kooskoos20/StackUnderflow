import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import QuestionCard from './QuestionCard'
import {connect} from 'react-redux'
import * as actions from '../actions/SearchActions'

const style = () => ({
    contentWrapper:{
        width:'60%',
        borderLeft:'1px solid #ddd',
        minHeight:'92vh',
        padding:'2em',
        '@media(max-width:805px)':{
            width:'100%',
        },
    },
    searchText:{
        fontSize:'26px'
    },
    form:{
        width:'50%',
        height:'1.8em',
        display:'flex',
        marginBottom:'2em'
    },
    search:{
        width:'100%',
        height:'100%'
    },
    searchButton:{
        backgroundColor:'#42C69Aff',
        color:'#fff',
        borderRadius:'2px',
        marginRight:'0',
        boxSizing:'border-box',
        height:'2.4em',
        marginLeft:'1em',
    }
})

class Content extends Component {
    state = {  
        query:""
    };
    componentDidMount(){
        this.props.queryRequest(this.state.query);
    }

    handleChange = (e) => {
        this.setState({query:e.target.value})
    }

    handleClick = e => {
        e.preventDefault();
        if(!this.props.checkCache(this.state.query)){
            this.props.queryRequest(this.state.query)
        }
    }

    render() {
        const {classes} = this.props
        const questionsArray = this.props.searchResults;
        let questions;
        if(questionsArray){
            questions = questionsArray.map(item => <QuestionCard  key = {item.creation_date} title={item.title} tags={item.tags}
            answer_count = {item.answer_count} is_answered={item.is_answered} score={item.score} creation_date={item.creation_date}
            owner={item.owner.display_name} question_id={item.question_id}/>)
        }
        return (
            <div className={classes.contentWrapper}>
                <p className={classes.searchText}>Search</p>
                <form className={classes.form} onSubmit={this.handleClick}>
                    <input className={classes.search} placeholder="search" onChange={this.handleChange}/>
                    <Button variant="contained" className={classes.searchButton} onClick={this.handleClick}>Search</Button>
                </form>
                {questions}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchResults : state.search.queryResults,
    cache: state.search.cache
})

const mapDispatchToProps = dispatch => ({
    queryRequest : query => dispatch(actions.searchByQuery(query)),
    checkCache: (query) => dispatch(actions.checkCache(query))
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(style)(Content));