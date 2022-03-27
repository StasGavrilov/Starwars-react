import React, { useState } from "react"
import { Link } from 'react-router-dom'

const Character = () => {
    return (
        <div>
            Hello

            <div>
                <Link to={'/'}>
                    <button>Back!</button>
                </Link>
            </div>
        </div>
    )
}

export default Character