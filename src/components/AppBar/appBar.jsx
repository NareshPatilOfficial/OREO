import React, {Component} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import MailIcon from '@material-ui/icons/Mail';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import DrawerComponent from '../Drawer/drawer'

class AppBar extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className='appBar'>
        <div>
            <DrawerComponent/>
        </div>
        <div>
          <IconButton>
            <EventIcon/>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <MailIcon/>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PermContactCalendarIcon/>
          </IconButton>
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
        <div>
          <IconButton>
            <PowerSettingsNewIcon/>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <SettingsIcon/>
          </IconButton>
        </div>
      </div>
    )
  }
}

export default AppBar