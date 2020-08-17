import React, { useMemo, useState } from 'react'

import { UserContext } from '../../store/UserContext'

function App () {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <UserContext.Provider value={value}>
      <div>
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a rel='noopener noreferrer'>Learn React</a>
        </header>
      </div>
    </UserContext.Provider>
  )
}

export default App
