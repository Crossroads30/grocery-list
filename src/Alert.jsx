import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

const Alert = ({ msg, type }) => {
	return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
