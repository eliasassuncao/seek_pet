import React, {Component} from 'react'
import {Item, Label, Input, Text} from 'native-base'
import styles from './styles'
import {View} from 'react-native'
import _ from 'lodash'

export class TextField extends Component {
    render() {
        const {
            value,
            label,
            errorMessage,
            noteMessage,
            icon,
            ...custom
        } = this.props;
        return (
            <View>
                <Item
                    style={styles.formItem}
                    error={!_.isEmpty(errorMessage)}
                    floatingLabel
                >
                    <Label style={styles.labelColor}>
                        {label}
                    </Label>

                    <Input
                        {...custom}
                        value={value}
                    />
                    {icon}
                </Item>
                {!_.isEmpty(noteMessage) ? <Text note>{noteMessage}</Text> : null}
                {!_.isEmpty(errorMessage) ? <Text note style={styles.errorMessage}>{errorMessage}</Text> : null}
            </View>
        )
    }
}
