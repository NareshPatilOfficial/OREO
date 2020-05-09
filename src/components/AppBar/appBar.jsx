import React, {Component} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import MailIcon from '@material-ui/icons/Mail';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FlagIcon from '@material-ui/icons/Flag';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import DrawerComponent from '../Drawer/drawer'
import Typography from '@material-ui/core/Typography';
import './appBar.less'

class AppBar extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className='appBar'>
        <div className='flexRow appDivisions'>
          <div className='flexRow appAssets' style={{justifyContent:'unset'}}>
              <DrawerComponent/>
              <img src="../../assets/oreoLogo.svg" width="30px" />
              <Typography className="oreoName" variant="h5" style={{color:'white'}}>OREO</Typography>
          </div>
          <div className='flexRow appAssets'>
              <EventIcon fontSize='small'/>
              <MailIcon fontSize='small'/>
              <PermContactCalendarIcon fontSize='small'/>
              <div >
                <NotificationsIcon fontSize='small'/>
                <span className='network'></span>
                <span className='networkDot'></span>
              </div>
              <div >
                <FlagIcon fontSize='small'/>
                <span className='network' style={{left:'378px'}}></span>
                <span className='networkDot'></span>
              </div>
          </div>  
          <div>
            <Paper >
              <InputBase
                placeholder="Search "
                inputProps={{
                'aria-label': 'search google maps'
              }}/>
              <IconButton type="submit"  aria-label="search">
                <SearchIcon style={{ fontSize: 15 }} />
              </IconButton>
              <Divider orientation="vertical"/>
            </Paper>
          </div>
        </div>
        <div className='flexRow appAssets'>
            {/* <div id="heart" >
              <img class="bottom" src="../../assets/oreoLogo.svg" width="100px" />
              <img class="top" src="../../assets/oreoLogo.svg" width="100px" />
            </div> */}
            
            <PowerSettingsNewIcon fontSize="small"/>
            <SettingsIcon className='settingIcon' fontSize="small"/>
        </div>
      </div>
    )
  }
}

export default AppBar