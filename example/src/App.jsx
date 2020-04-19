import React from 'react'
import { Router, Link } from '@reach/router'

import Widget from './Widget'
import { usePopup } from '../../lib'

const App = () => {
  const popup = usePopup('https://admin.typeform.com/to/PlBzgL')
  const drawerLeft = usePopup('https://admin.typeform.com/to/PlBzgL', {
    mode: 'drawer_left',
  })
  const drawerRight = usePopup('https://admin.typeform.com/to/PlBzgL', {
    mode: 'drawer_right',
  })
  return (
    <div>
      <h1>React Typeform Emebed Widget</h1>
      <p>
        You can use this component to embed your typeform inside your React
        application.
      </p>
      <nav>
        <Link style={{ display: 'block' }} to='widget'>
          Show me the basic Widget
        </Link>
        <a
          href='#'
          onClick={() => popup.open()}
          style={{ display: 'block' }}
          to='popup'
        >
          Open in a Popup
        </a>
        <a
          href='#'
          onClick={() => drawerLeft.open()}
          style={{ display: 'block' }}
        >
          Open in a Drawer
        </a>
        <a
          href='#'
          onClick={() => drawerRight.open()}
          style={{ display: 'block' }}
        >
          Open in a Right Drawer
        </a>
      </nav>
      <div>
        <Router>
          <Widget path='widget' />
        </Router>
      </div>
    </div>
  )
}
export default App
