import React from 'react'

type Props = {
    name: string,
    color: string
}

function Hello({color, name}: Props) {
    return <div style={{color: color}}>안녕하세요 {name}</div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello