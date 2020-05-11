import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import './drawer.less'
import DrawerD from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import { IconButton, Typography, Icon, Divider} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import {connect} from 'react-redux'
import * as actionType from '../../constants/actionsType'

class Drawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        anchor:'left',
    }
  }
    render() {
        let drawerContent = this.props.rDrawerContent === 'oreo' ?
            <div className='menuContent'>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                id="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" >
                    -- Main
                  </ListSubheader>
                }
              >
                <div className='sideBarList'>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon style={{ fontSize: 17 }} />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <AppsIcon style={{ fontSize: 17 }}/>
                  </ListItemIcon>
                  <ListItemText primary="App" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon >
                    <ShoppingCartIcon style={{ fontSize: 17 }}/>
                  </ListItemIcon>
                  <ListItemText primary="Ecommerce" />
                </ListItem>
                <ListItem button onClick={this.props.increment}>
                  <ListItemIcon >
                    <SwapCallsIcon style={{ fontSize: 17 }}/>
                  </ListItemIcon>
                  <ListItemText primary="User Interface (UI)" />
                  {this.props.ctr}
                </ListItem>
                </div>
                </List>
            </div>
        :
          <div className='userProfile' style={{left:this.state.left}}>
              <div className='flexColumn userData'>
                <img src="../../assets/profileImg.jpg" width='100px'/>
                <Typography variant="h5" gutterBottom>
                  Alex
                </Typography>
                <Typography variant="body2" gutterBottom>
                  UI UX Designer
                </Typography>

                <div className='flexRow'>
                  <FacebookIcon />
                  <TwitterIcon />
                  <InstagramIcon />
                </div>
                
                <div>
                  <Typography className='profileAddress' variant="body1" gutterBottom>
                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                  </Typography>
                </div>
                <div className='flexRow' >
                  <div>
                    <Typography variant="h5" gutterBottom>
                      852
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Following
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h5" gutterBottom>
                      13K
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Followers
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h5" gutterBottom>
                      234 
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Post
                    </Typography>
                  </div>
                </div>
              </div>
              <div className='profileContact'>
                <Divider />
                <div>
                  <Typography variant="body1" gutterBottom>
                    Email address:
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    alex@gmail.com
                  </Typography>
                </div>
                <Divider />
                <div>
                  <Typography variant="body1" gutterBottom>
                    Phone:
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    +81 25698 85214
                  </Typography>
                </div>
              </div>
          </div>
        
      return (
        <div id='drawer'>
          <IconButton onClick={this.props.rDrawerOpenOnChange}>
            <MenuIcon/>
          </IconButton >
          <div className='drawerData'>
            <DrawerD 
              anchor='left'
              open={this.props.rDrawerOpen}
              onClose={this.props.rDrawerOpenOnChange}>
                
                <div id="drawerConteiner">
                      <div className='drawerNav' onClick={e => this.props.rDrawerContentOnChange('oreo')}>
                          <HomeIcon  />
                          <Typography >Oreo</Typography>
                      </div>
                      <div className='drawerNav' onClick={e => this.props.rDrawerContentOnChange('user')}>
                          <PersonIcon />
                          <Typography >User</Typography>
                      </div>
                  </div>
                  {drawerContent}
            </DrawerD> 
          </div>
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return{
      rDrawerOpen : state.drawerReducer.drawerOpen,
      rDrawerContent : state.drawerReducer.drawerContent
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      rDrawerOpenOnChange : () => dispatch({type : actionType.DRAWER_OPEN}),
      rDrawerContentOnChange : (contentOf) => dispatch({type : actionType.DRAWER_CONTENT_CHANGE, contentOf:contentOf})
    }
  }

  export default  connect(mapStateToProps,mapDispatchToProps)(Drawer)