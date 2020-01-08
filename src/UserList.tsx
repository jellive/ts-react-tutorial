import React, { useEffect, useContext } from 'react'
import { UserDispatch } from './AppReducer'

const User = React.memo(function ({ user }: any) {
    useEffect(() => {
        console.log('user 값이 설정됨')
        console.log(user)
        return () => {
            console.log('user가 바뀌기 전...')
            console.log(user)
        }
    }, [user]) // 두 번째 [user] 를 deps 라고 한다. 이게 없을 때에는 컴포넌트가 처음 나타날 때에만 호출된다. 있으면 바뀔 때마다 호출 됨.

    const dispatch = useContext(UserDispatch)

    return (
        <div>
            <b style={{ cursor: 'pointer', color: user.active ? 'green' : 'black' }}
                onClick={() => { dispatch({ type: 'TOGGLE_USER', id: user.id }) }}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={() => {
                dispatch({ type: 'REMOVE_USER', id: user.id })
            }}>삭제</button>
        </div>
    )
})

function UserList({ users }: any) {
    return (
        <div>
            {users.map((user: any) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default React.memo(UserList)