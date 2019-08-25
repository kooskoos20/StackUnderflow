import React, { Fragment } from 'react';
import HeaderNav from '../Components/HeaderNav'
import {withStyles} from '@material-ui/core'
import Answers from '../Components/Answers'
import Footer from '../Components/Footer';

const styles = () => ({

})

function QuestionDetail(props) {
  return (
    <Fragment>
        <HeaderNav/>
        <Answers id={props.match.params.id}/>
      <Footer />
    </Fragment>  
  );
}

export default withStyles(styles)(QuestionDetail);
