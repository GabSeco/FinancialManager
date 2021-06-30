import React from 'react'
import './../layouts/main.css'
import Routes from '../routes'
import { Menu } from './Menu'

// eslint-disable-next-line import/no-anonymous-default-export
export function Main () {
    return (
        <div className="main">
            <Menu/>
            <Routes/>
        </div>
    )
}