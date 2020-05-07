import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import { Icon, Typography, AppBar, MuiThemeProvider, createMuiTheme, IconButton, InputBase, Card } from '@material-ui/core'
import "./content.less"
import images from '../../assets/images.json'
import name from '../../assets/name.json'
import zIndex from '@material-ui/core/styles/zIndex';
// var imagesArray = ["../../../assets/1.png", "../../../assets/2.png", "../../../assets/3.png","../../../assets/4.png","../../../assets/5.png","../../../assets/6.png","../../../assets/7.png","../../../assets/8.png","../../../assets/9.png"]
class CardsInHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageOver: false
        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
    }
    handleMouseOver(event) {
        console.log("sdfdsagfdgg", event)
        this.setState({ imageOver: 12 })
        console.log("sdfdsagfdgg", this.state.imageOver)

    }
    render() {
        console.log("safdsf", images.image)
        let cards = images.image.map(item => {
            return (
                //    ! this.state.imageOver ? 
                <Card
                    className="cardsInProduct" style={{ margin: "2%", padding: "2%" }}>
                    <div style={{ display: "flex", justifyContent: "center", zIndex: 2000 }}>
                        <img style={{ borderRadius: "10px" }} elevation={4} className="imageInDashboard" onMouseOver={this.handleMouseOver} src={item} width="90%" height="50%" />
                    </div>
                </Card>
                // :
                // <div>
                //     <Card onMouseOver={this.handleMouseOver}
                //         className="cardsInProduct" style={{ margin: "2%", padding: "2%" }}>
                //         <div style={{ display: "flex", justifyContent: "center" }}>
                //             <img className="imagesInDashboard" onMouseOver={this.handleMouseOver} src={item} width="90%" height="50%" />
                //         </div>
                //     </Card>
                //     <Typography>asfds.</Typography>
                // </div>
            )
        })
        return (
            <div className="productContainer">
                <div style={{ display: "flex", justifyContent: "space-between",backgroundColor:"#8c99e0",width:"95%",padding:"3%"}}>
                    <div>
                        <Typography style={{
                            color: "#ffffff",
                            fontSize:"larger"
                           }}>Product</Typography>
                    <Typography style={{
                            color: "#ffffff",
                            marginBottom:"20%",
                            fontSize:"small"
                           }}>Welcome To Oreo</Typography>
                </div>
                <div style={{backgroundColor:""}}>
                    <h5 style={{
                            color: "#ffffff",
                            fontSize:"large"
                           }}>Oreo/e-Commerce/Product</h5>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",marginTop: "-7%",paddingLeft:"10%" }}>
                {cards}
            </div>
            </div >
        )
    }
}
export default withRouter(CardsInHome)