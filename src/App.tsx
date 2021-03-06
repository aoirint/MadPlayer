import React from 'react'
import './App.css'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/dark-onsen-css-components.css'
import { Page, Toolbar, Button, BackButton, ToolbarButton, Icon } from 'react-onsenui'

function help (): void {
  console.log('hey!')
}

function renderToolbar (): JSX.Element {
  return (
    <Toolbar>
      <div className='left'>
        <BackButton>
          Back
        </BackButton>
      </div>
      <div className='center'>
        Title
      </div>
      <div className='right'>
        <ToolbarButton>
          <Icon icon='md-menu' />
        </ToolbarButton>
      </div>
    </Toolbar>
  )
}

function App (): JSX.Element {
  return (
    <div className='App'>
      <Page renderToolbar={renderToolbar}>
        <Button onClick={help}>
          Hello!
        </Button>
      </Page>
    </div>
  )
}

export default App
