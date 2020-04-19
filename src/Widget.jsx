import React, { useEffect, useRef } from 'react'
import * as typeformEmbed from '@typeform/embed'
import PropTypes from 'prop-types'

const Widget = ({ url, as: Tag, options, styles }) => {
  const DOMRef = useRef(null)
  useEffect(() => {
    if (DOMRef) {
      typeformEmbed.makeWidget(DOMRef.current, url, options)
    }
  }, [])

  return <Tag ref={DOMRef} style={{ ...styles }} />
}

Widget.defaultProps = {
  styles: {
    height: 350,
  },
  as: 'div',
  options: {
    opacity: 100,
    buttonText: 'Start',
    hideScrollbars: false,
    hideFooter: false,
    hideHeaders: false,
    onSubmit: null,
  },
}

Widget.propTypes = {
  styles: PropTypes.object,
  as: PropTypes.string,
  url: PropTypes.string.isRequired,
  options: PropTypes.shape({
    opacity: PropTypes.number,
    buttonText: PropTypes.string,
    hideScrollbars: PropTypes.bool,
    hideFooter: PropTypes.bool,
    hideHeaders: PropTypes.bool,
    onSubmit: PropTypes.func,
  }),
}

export default Widget
