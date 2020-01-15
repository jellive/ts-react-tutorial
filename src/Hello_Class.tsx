import React, { Component } from 'react'

type Props = {
    name: string,
    color: string,
    isSpecial: boolean
}

class Hello extends Component<Props> {
    static defaultProps = {
        name: '이름없음'
    }
    render() {
        const { color, name, isSpecial } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

export default Hello