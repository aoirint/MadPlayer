import { Toolbar, Button, BackButton, ToolbarButton, Icon } from 'react-onsenui'

export function AppToolbar (): JSX.Element {
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
