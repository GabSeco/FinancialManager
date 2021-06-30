import React from 'react'
import './../layouts/menu.css'

// eslint-disable-next-line import/no-anonymous-default-export
export function Menu () {
    return (
        <div className="sidenav">
            <a href="/emprestimos">Empréstimos</a>
            <a href="/relatorios">Relatórios</a>
        </div>
    )
}