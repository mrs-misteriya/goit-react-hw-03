import { useState } from 'react'

import css from './App.module.css'

function App() {

  return (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>)

}

export default App
