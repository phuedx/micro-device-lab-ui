import React from 'react'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionCached from 'material-ui/lib/svg-icons/action/cached'
import { connect } from 'react-redux'
import { refresh } from './actions'

const App = ({ isRefreshing, refresh }) => (
  <div>
    <AppBar
      title='Micro Device Lab'
      showMenuIconButton={false}
      iconElementRight={
        <IconButton disabled={isRefreshing} onTouchTap={refresh}><ActionCached /></IconButton>
      }
    />
  </div>
)

const identity = (x) => x

export default connect(identity, { refresh })(App)
