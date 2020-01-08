import React, { useContext, useRef } from 'react'
import { UserDispatch } from './AppReducer'
import useInputs from './hooks/useInputs'

function CreateUser() {
    const [{ username, email }, onChange, onReset] = useInputs({
        username: '',
        email: ''
    })
    const dispatch = useContext(UserDispatch)
    const nextId = useRef(4)
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={() => {
                dispatch({
                    type: 'CREATE_USER', user: {
                        id: nextId.current,
                        username,
                        email
                    }
                })
                nextId.current += 1
            }}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser)