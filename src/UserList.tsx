import React from 'react'

function User({ user, onRemove }: any) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove}: any) {

    return (
        <div>
            {users.map((user: any) => (
                <User user={user} key={user.id} onRemove={onRemove}/>
            ))}
        </div>
    )
}

export default UserList