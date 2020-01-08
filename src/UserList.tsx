import React, { useEffect } from 'react'

function User({ user, onRemove, onToggle }: any) {
    useEffect(() => {
        console.log('user 값이 설정됨')
        console.log(user)
        return () => {
            console.log('user가 바뀌기 전...')
            console.log(user)
        }
    }, [user]) // 두 번째 [user] 를 deps 라고 한다. 이게 없을 때에는 컴포넌트가 처음 나타날 때에만 호출된다. 있으면 바뀔 때마다 호출 됨.
    return (
        <div>
            <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }} onClick={() => onToggle(user.id)}>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }: any) {
    return (
        <div>
            {users.map((user: any) => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default UserList