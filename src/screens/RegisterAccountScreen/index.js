import React, {Component} from 'react';
import {
    View,
    Image,
    SafeAreaView
} from 'react-native';
import styles from './styles'
import {compose} from "redux";
import {connect} from 'react-redux'
import {Text, Button, Icon, Form, Item, Label, Input, Container,Content, Thumbnail
} from "native-base";
import {SYSTEM_ROUTES} from "../../constants";
import { change, Field, reduxForm } from 'redux-form'
import {TextField, PickerList} from '../../components'
import {requiredValidation} from '../../helpers'

class RegisterAccountScreen extends Component {
   
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
                        <Form style={styles.form}>
                            <View style={{marginTop: 20, display: 'flex', alignItems: 'center'}}>
                                <Thumbnail 
                                    large 
                                    source={{uri: 'https://cache.olhardigital.com.br/uploads/acervo_imagens/2014/12/20141204130826_660_420.jpg'}} 
                                />
                            </View>
                            <Field
                                label="Nome"
                                name="name"
                                textContentType="name"
                                component={this._renderTextField}
                                validate={requiredValidation}
                            />
                            <Field
                                label="E-mail"
                                name="email"
                                textContentType="name"
                                component={this._renderTextField}
                                validate={requiredValidation}
                            />
                            <Field
                                label="Senha"
                                name="senha"
                                secureTextEntry={true}
                                component={this._renderTextField}
                                validate={requiredValidation}
                            />
                            <Field
                                label="Confirmar senha"
                                name="confirmSenha"
                                secureTextEntry={true}
                                component={this._renderTextField}
                                validate={requiredValidation}
                            />
                            <Field
                                name="sexo"
                                component={this._renderPickerList}
                                label="Sexo"
                                arrItens={[
                                    {label: 'Selecione', value: null},
                                    {label: 'Masculino', value: 1},
                                    {label: 'Feminino', value: 2}
                                ]}
                                validate={requiredValidation}
                            />
                            <Field
                                name="pais"
                                component={this._renderPickerList}
                                label="País"
                                arrItens={[
                                    {label: 'Selecione', value: null},
                                    {label: 'País 1', value: 1},
                                    {label: 'País 2', value: 2}
                                ]}
                                validate={requiredValidation}
                            />
                            <Field
                                name="estado"
                                component={this._renderPickerList}
                                label="Estado"
                                arrItens={[
                                    {label: 'Selecione', value: ''},
                                    {label: 'Estado 1', value: 'M'},
                                    {label: 'Estado 2', value: 'F'}
                                ]}
                                validate={requiredValidation}
                            />
                            <Field
                                name="cidade"
                                component={this._renderPickerList}
                                label="Cidade"
                                arrItens={[
                                    {label: 'Selecione', value: ''},
                                    {label: 'Cidade 1', value: 'M'},
                                    {label: 'Cidade 2', value: 'F'}
                                ]}
                                validate={requiredValidation}
                            />
                            <Button 
                                full 
                                style={styles.buttonSubmit} 
                                //disabled={pristine || submitting}
                                onPress={() => navigate(SYSTEM_ROUTES.COMPATIBLE_PETS_SCREEN.ROUTE)}
                            >
                                <Text style={{color: '#ffffff'}}>Salvar</Text>
                            </Button>
                        </Form>
                    </View>
                </Content>
            </Container>
        );
    }
}



RegisterAccountScreen = compose(
    connect(null, {}),
    reduxForm({
        form: 'LoginAuthScreen',
        enableReinitialize: true,
    }),
)(RegisterAccountScreen);

export {RegisterAccountScreen}