import React,{Component} from 'react'
import {withRouter} from "react-router-dom"
import './dashboard.less'
import AppBarComponent from '../AppBar/appBar'
import BodyContent from '../Content/content'
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div >
                <AppBarComponent/>
                <BodyContent />
            </div>
        )
    }
}
export default withRouter(Dashboard)