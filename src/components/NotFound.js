import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="error-not-found">
        <p>404: Not Found </p>
        <Link to="/">Home</Link>
    </div>
)

export default NotFound