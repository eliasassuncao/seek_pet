import React from 'react'
import {Icon} from 'native-base';

export const TabBarIcon = (props) => {
    const {type, name, focused, tintColor, fontSize} = props;
    return (
        <Icon active={focused} style={{color: tintColor, fontSize: fontSize ? fontSize : 26}} color={tintColor} type={type} name={name}/>
    )
};