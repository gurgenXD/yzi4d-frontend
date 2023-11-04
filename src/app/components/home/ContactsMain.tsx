'use client'

import ContactsBlock from "@/app/components/ContactsBlock"
import { useState, useEffect } from 'react'


export default function ContactsMain() {
    const [contacts, setContacts] = useState({}) // не понял

    useEffect(() => {
        (async () => {
        })()
    }, [])

    return (
        <section className="pt-lg-6 pt-5 pb-lg-3">
            <div className="container">
                <h2 className="mb-lg-4 mb-2">Наши филиалы</h2>

                <ContactsBlock />

            </div>
        </section >
    )
}
