import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import './drawer.less'
import DrawerD from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { IconButton, Typography, Icon} from '@material-ui/core';

import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import Slide from '@material-ui/core/Slide';

class Drawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        anchor:'left',
        drawerOpen: false,
        drawerContent: false
    }
  }

    toggleDrawer = () => {
        this.setState({drawerOpen:!this.state.drawerOpen})
        console.log('data',this.state.drawerOpen)
    }
    handleDrawerContent = () =>  {
        this.setState({ drawerContent: !this.state.drawerContent })
    }

    render() {
        let drawerContent = !this.state.drawerContent ?
            <div className="slideDrawerContent">
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <div>
                        <div className="drawerComponents">
                            <div className="dashboardAllDrawerContent">
                                <div className="dashboardDrawerContent">
                                    <Icon color="action"><HomeIcon style={{ fontSize: 18 }} /></Icon>
                                    <Typography style={{ color: "#546e7a" }}>sdfsfsdd</Typography>
                                </div>
                                <div className="drawerArrowContent">
                                    <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                </div>
                            </div> 
                             <div className="appAllDrawerContainer">
                                <div className="appDrawerContainer">
                                    <Icon color="action"><AppsIcon style={{ fontSize: 18 }} /></Icon>
                                    <Typography style={{ color: "#546e7a" }}>App</Typography>
                                </div>
                                <div className="drawerArrowContent">
                                    <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                                </div>
                                </div>
                        <div className="ecommerceAllDrawerContainer">
                            <div className="ecommerceDrawerContainer">
                                <Icon color="action"><LocalGroceryStoreIcon style={{ fontSize: 18 }} /></Icon>
                                <Typography style={{ color: "#546e7a" }}>E-Commerce</Typography>
                            </div>
                            <div className="drawerArrowContent">
                                <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                            </div>
                        </div>
                        <div className="uiAllDrawerContainer">
                            <div className="uiDrawerContainer">
                                <Icon color="action"><SwapVertIcon style={{ fontSize: 18 }} /></Icon>
                                <Typography style={{ color: "#546e7a" }}>User-Interface</Typography>
                            </div>
                            <div className="drawerArrowContent">
                                <Icon color="action"><ArrowForwardIosIcon style={{ fontSize: 14 }} /></Icon>
                            </div>
                        </div>
                    </div>
                    </div>
                </Slide>
            </div >
            :
        <div className="slideDrawerContent" >
            user details
        </div>
        
      return (
        <div className='drawer'>
          <IconButton onClick={this.toggleDrawer}>
            <MenuIcon/>
          </IconButton>
          <DrawerD
            anchor='left'
            open={this.state.drawerOpen}
            onClose={this.toggleDrawer}>
              
              <div className="drawerConteiner">
                    <div onClick={this.handleDrawerContent}>
                        <HomeIcon style={{ fontSize: 18 }} color="action" />
                        <Typography style={{ fontSize: 15, color: "#888" }}>Oreo</Typography>
                    </div>
                    <div className="userContainer" onClick={this.handleDrawerContent}>
                        <PersonIcon style={{ fontSize: 18 }} color="action" />
                        <Typography style={{ fontSize: 15, color: "#888" }}>User</Typography>
                    </div>
                </div>
                {drawerContent}
          </DrawerD> 
        </div>
      )
    }
  }

  export default Drawer