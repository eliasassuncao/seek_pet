import React, {Component} from 'react';
import {
    View,
    Image,
} from 'react-native';
import styles from './styles'
import {compose} from "redux";
import {connect} from 'react-redux'
import {Text, Button, Icon, Form, Item, Label, Input, Container,Content, Thumbnail} from "native-base";
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
                                <Image 
                                    resizeMode='contain' 
                                    style={{width: 120, height: 120}} 
                                    source={require('../../../public/images/profile.png')}
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
                                    {label: 'Brasil', value: 1},
                                    {label: 'Argentina', value: 2},
                                ]}
                                validate={requiredValidation}
                            />
                            <Field
                                name="estado"
                                component={this._renderPickerList}
                                label="Estado"
                                arrItens={[
                                    {label: 'Selecione', value: ''},
                                    {label: 'São Paulo', value: 'M'},
                                    {label: 'Rio de Janeiro', value: 'F'}
                                ]}
                                validate={requiredValidation}
                            />
                            <Field
                                name="cidade"
                                component={this._renderPickerList}
                                label="Cidade"
                                arrItens={[
                                    {label: 'Selecione', value: ''},
                                    {label: 'Ribeirão Preto', value: 'M'},
                                    {label: 'Cravinhos', value: 'F'}
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