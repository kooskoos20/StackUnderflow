import React from 'react';
import {withStyles} from '@material-ui/core'

const styles = () => ({
    ol:{
        listStyle:'none',
    },
    olOuter:{
        listStyle:'none',
        paddingLeft:'0'
    },
    wrapper:{
        width:'216px',
        '@media(max-width:1210px)':{
            display:'none'
        },
        display:'flex',
        flexDirection:'column',
        padding:'0em',
        marginTop:'2em',
        marginLeft:'0'
    },
})

function SideBar(props){
    const {classes} = props;
    return(
        <div className={classes.wrapper}>
            <ol className={classes.olOuter}>
                <li>Home</li>
                <li>Public
                    <ol className={classes.ol}>
                        <li><b>Stack Underflow</b></li>
                        <li>Tags</li>
                        <li>Users</li>
                        <li>Job Search</li>
                    </ol>
                </li>
                <li>Teams</li>
            </ol>
        </div>
    )
}

export default withStyles(styles)(SideBar)