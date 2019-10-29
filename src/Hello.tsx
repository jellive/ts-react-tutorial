import React from 'react'

type Props = {
    name: string,
    color: string,
    isSpecial: boolean
}

function Hello({color, name, isSpecial}: Props) {
    return <div style={{color: color}}>
        { isSpecial && <b>*</b>}
        안녕하세요 {name}
    </div>
}

Hello.defaultProps = {
    name: '이름없음',
    isSpecial: false
}

export default Hello