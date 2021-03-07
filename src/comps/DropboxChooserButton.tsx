import { Button } from 'react-onsenui'
import { Dropbox, DropboxOptions } from 'dropbox'

const CLIENT_ID: string = process.env.REACT_APP_DROPBOX_CLIENT_ID || ''

// TODO: create API wrapper?
// interface DropboxDropins {
//   choose(options: DropboxChooseOptions): void
// }

function openChooser() : void {
  const authOptions: DropboxOptions = {
    clientId: CLIENT_ID,
  }
  const dbx: Dropbox = new Dropbox(authOptions)
  // dbx.choose() // TODO: not exist chooser API in SDK
}

export function DropboxChooserButton (): JSX.Element {
  return (
    <Button onClick={openChooser}>
      Dropbox
    </Button>
  )
}
