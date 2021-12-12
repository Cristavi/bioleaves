import { Component } from "react";
import "../style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import {Link} from 'react-router-dom'


export default class Logout extends Component{
    componentDidMount(){
        localStorage.removeItem('token')
        localStorage.removeItem('isUser')
        localStorage.removeItem('isAdmin')

        window.location.href = '/'
    }
    
    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}