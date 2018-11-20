import React, {Component} from 'react';
import {
    View,
    Image,
    SafeAreaView
} from 'react-native';
import styles from './styles'
import {compose} from "redux";
import {connect} from 'react-redux'
import {Text, Button, Icon, Form, Item, Label, Input, Container,Content, Card, CardItem} from "native-base";
import {SYSTEM_ROUTES} from "../../constants";
import { change, Field, reduxForm } from 'redux-form'
import {TextField, PickerList} from '../../components'
import {requiredValidation} from '../../helpers'

class RegisterPetScreen extends Component {
   
   _renderTextField(field) {
    const {meta: {touched, error}, input: {value, onChange}, ...custom} = field;
    const errorInput = touched && error ? error : null;
        return (
            <TextField
                errorMessage={errorInput}
                value={value}
                onChangeText={onChange}
                {...custom}
            />
        )
    }

    
    _renderPickerList(field) {
        const {input: {value, onChange}} = field;
        const {meta: {touched, error}} = field;
        const errorInput = touched && error ? error : null;

        return (
            <PickerList
                value={value}
                onChange={onChange}
                errorMessage={errorInput}
                {...field}
            />
        )
    }

    render() {
        const { navigation: {navigate}, pristine, submitting} = this.props;
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <Card style={{marginLeft: 20, marginRight: 20, width: 220, marginTop: 20}}>
                            <CardItem cardBody>
                                <Image 
                                    source={require('../../../public/images/petupload.jpg')}
                                    style={{height: 180, width: 180, flex: 1}}
                                    resizeMode="contain"
                                />
                            </CardItem> 
                        </Card>
                        <Form style={styles.form}>
                            <Field
                                label="Título"
                                name="titulo"
                                textContentType="title"
                                component={this._renderTextField}
                                validate={requiredValidation}
                            />
                            <Field
                                name="situacao"
                                component={this._renderPickerList}
                                label="Situação"
                                arrItens={[
                                    {label: 'Selecione', value: null},
                                    {label: 'Situação 1', value: 1},
                                    {label: 'Situação 2', value: 2}
                                ]}
                                validate={requiredValidation}
                            />
                            <Field
                                name="tipo"
                                component={this._renderPickerList}
                                label="Tipo do animal"
                                arrItens={[
                                    {label: 'Selecione', value: ''},
                                    {label: 'Tipo 1', value: 'M'},
                                    {label: 'Tipo 2', value: 'F'}
                                ]}
                                validate={requiredValidation}
                            />
                            <Field
                                name="raca"
                                component={this._renderPickerList}
                                label="Raça do animal"
                                arrItens={[
                                    {label: 'Selecione', value: ''},
                                    {label: 'Raça 1', value: 'M'},
                                    {label: 'Raça 2', value: 'F'}
                                ]}
                                validate={requiredValidation}
                            />
                           <Field
                                label="Descreva a situação"
                                name="stiuacao"
                                textContentType="description"
                                component={this._renderTextField}
                                validate={requiredValidation}
                            />
                            <View style={styles.viewLocation}>
                                <Text style={styles.textLocation}>Localização</Text>
                                <Text style={styles.location}>Rua São José, 85 - Jardim Alvorada</Text>
                                <Text style={styles.location}>Ribeirão Preto - SP, 14140-000, Brazil</Text>
                            </View>
                            <Button 
                                full 
                                style={styles.buttonSubmit} 
                                //disabled={pristine || submitting}
                                onPress={() => navigate(SYSTEM_ROUTES.COMPATIBLE_PETS_SCREEN.ROUTE)}
                            >
                                <Text style={{color: '#ffffff'}}>Informar sobre esse pet</Text>
                            </Button>
                        </Form>
                    </View>
                </Content>
            </Container>
        );
    }
}



RegisterPetScreen = compose(
    connect(null, {}),
    reduxForm({
        form: 'LoginAuthScreen',
        enableReinitialize: true,
    }),
)(RegisterPetScreen);

export {RegisterPetScreen}