import { useEffect, useState } from 'react'
import * as typeformEmbed from '@typeform/embed'

const defaultOptions = {
  mode: 'popup',
  autoOpen: false,
  autoClose: 5,
  hideScrollbars: false,
  hideFooter: false,
  hideHeaders: false,
  onSubmit: null,
  drawerWidth: 800,
}

export const usePopup = (url, options) => {
  const [popup, setPop] = useState({})
  if (!url) {
    throw 'Url missing'
  }
  options = { ...defaultOptions, ...options }
  useEffect(() => {
    setPop(typeformEmbed.makePopup(url, options))
    return () => popup.close()
  }, [url])
  return popup
}
