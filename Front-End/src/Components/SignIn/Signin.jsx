// eslint-disable-next-line no-unused-vars
import React from 'react'

function Signin() {
  return (
    <div>
      <h1>Sign in</h1>
      <form>
        <div>
            <label htmlFor="username">USER NAME</label>
            <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="email">EMAIL ID</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Signin
