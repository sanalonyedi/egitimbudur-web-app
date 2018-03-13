import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

export const PrivateLayout = ({ children }) => (
    <div>
        Private Layout
        {children}
    </div>
)

PrivateLayout.propTypes = {
    children: PropTypes.node,
}


export default PrivateLayout
