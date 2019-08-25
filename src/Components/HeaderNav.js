import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const style = () => ({
    ul:{
        display:'flex',
        listStyle:'none',
        margin:'0',
        alignItems:'center',
    },
    nav:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        color:'#000',
        padding:'1em',
        borderBottom:'1px solid #ddd',
        margin:'0',
        '@media(max-width:520px)':{
            justifyContent:'center',
            padding:'0.4em 0'
        },
    },
    li:{
        marginRight:'2rem',
        fontSize:'14px',
        '&:last-child':{
            marginRight:'0'
        }
    },
    companyName:{
        fontSize:'22px',
        '@media(max-width:800px)':{
            fontSize:'14px',
        },
    },
    login:{
        backgroundColor:'#42C69Aff',
        color:'#fff',
        borderRadius:'21px',
        marginRight:'0',
        padding:'0.6em 1.7em',
        lineHeight:'1.4',
        '@media(max-width:800px)':{
            padding:'5px',
            borderRadius:'5px'
        },
    },
    link:{
        textDecoration:'none',
        color:'#222'
    }
})

class HeaderNav extends Component{
    render(){
        const {classes} = this.props;
        return (
                <nav className={classes.nav}>
                    <Link to={"/"} className={classes.link}><span className={classes.companyName}>stack<b>underflow</b></span></Link>
                    <ul className={classes.ul}>
                        <li className={classes.li}>Products</li>
                        <li className={classes.li}>Customers</li>
                        <li className={classes.li}>Use Cases</li>
                        <li className={classes.li}><div className={classes.login}><b>Log in</b></div></li>
                    </ul>
                </nav>
        )
    }
}


export default withStyles(style)(HeaderNav);