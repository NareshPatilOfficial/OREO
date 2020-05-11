import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import { Icon, Typography, Card } from '@material-ui/core'
import "./content.less"
import productData from '../../assets/products.json'

class Content extends Component {
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
        let productCard = productData.products.map( product => {
            return (<div className="productCard" key={Math. random() * 1000000000}>
                        <img src={product.image} width='100%' />
                    <div className='productData flexColumn'>
                        <Typography variant='body1'>
                            {product.name}
                        </Typography>
                        <Typography variant='body2'>
                            <div className='flexRow productCostRow'>
                                <div >${product.actualCost}</div>
                                <div style={{color:'red'}}>${product.currentCost}</div>
                            </div>
                        </Typography>
                    </div>
            </div>)
        })
        return (
           <div className='containerMain'>
               <div>
                <div className="contentsNav">
                        <div id="productWelcomeMsg">
                            <Typography variant="h5">
                                Product
                            </Typography>
                            <Typography variant="body2">
                                Welcome to Oreo
                            </Typography>
                        </div>
                        <div>
                        <div className='contentRoute'>
                            <HomeIcon />
                            <div>Oreo / eCommerce / Product</div>
                        </div>
                        </div>
                </div>

                <div className="productCards">
                    {productCard}
                </div>

               </div>
        </div>
        )
    }
}
export default withRouter(Content)