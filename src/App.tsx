import React, { useState } from 'react'
import './App.css'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/dark-onsen-css-components.css'
import { Page, Button } from 'react-onsenui'

import { AppToolbar } from './comps/AppToolbar'
import { DropboxChooserButton } from './comps/DropboxChooserButton'


function help (): void {
  console.log('hey!')
}

function App (): JSX.Element {
  return (
    <div className='App'>
      <Page renderToolbar={AppToolbar}>
        <DropboxChooserButton />
      </Page>
    </div>
  )
}

export default App
