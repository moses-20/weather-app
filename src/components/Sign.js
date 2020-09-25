import React, { useState } from 'react';

function Sign() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        alert('You have signed in...')
    }
    return (
        <main>
            <div className='sign-wrap'>
                <form className='signup-form' onSubmit={formSubmit}>
                    <input
                        testID='placeholder-color'
                        type='email'
                        value={email}
                        placeholder='enter your email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        testID='placeholder-color'
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        type='submit'
                        value='Sign Up'
                        className='sign-submit'
                    />
                </form>
            </div>
        </main>
    );
}

export default Sign;