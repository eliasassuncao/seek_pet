import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Picker, Label, Item, Text} from 'native-base'
import styles from './styles'
import _ from "lodash";
import {View} from 'react-native'

export class PickerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    componentDidMount() {
        const {value} = this.props;
        this.setState({
            selected: value
        });
    }

    onValueChange(value) {
        const {onChange} = this.props;
        this.setState({
            selected: value
        }, () => onChange(value));
    }

    render() {
        const {
            label,
            arrItens,
            errorMessage,
            value,
            ...custom
        } = this.props;

        console.log(this.state.selected, "<--- this.state.selected")
        return (
            <View>
                <Item
                    style={styles.formItem}
                    error={!_.isEmpty(errorMessage)}
                    inlineLabel={!value}
                    stackedLabel={!!value}
                >
                    <Label style={!value ? styles.inputLabel : styles.inputLabelActive}>
                        {label}
                    </Label>
                    <Picker
                        style={!value ? styles.emptyValueInputStyle : styles.inputStyle}
                        textStyle={!value ? styles.pickerTextStyleInactive : styles.pickerTextStyle}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                        headerBackButtonText="Fechar"
                        iosHeader={label}
                        headerStyle={styles.headerStyle}
                        headerTitleStyle={styles.headerTitleStyle}
                        headerBackButtonTextStyle={styles.headerBackButtonTextStyle}
                    >
                        {
                            _.map(arrItens, (item) => (
                                <Picker label={item.label} value={item.value} key={item.value}/>
                            ))
                        }
                    </Picker>
                </Item>
                {!_.isEmpty(errorMessage) ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            </View>
        )
    }
}

PickerList.propTypes = {
    arrItens: PropTypes.any,
    errorMessage: PropTypes.any,
    label: PropTypes.any.isRequired,
    onChange: PropTypes.any,
    value: PropTypes.any
};