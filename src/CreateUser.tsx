import React, { SyntheticEvent } from 'react'

function CreateUser({ username, email, onChange, onCreate }: {username: string, email: string, onChange: (e: React.FormEvent<HTMLInputElement>) => void, onCreate: () => void}) {
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
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUser