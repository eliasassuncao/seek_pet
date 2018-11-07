import React, { Component } from 'react'
import {
    Body, 
    Button,
    Container, 
    Content, 
    Icon, 
    Left, 
    ListItem, 
    Text, 
    Right, 
    Thumbnail,
    Card,
    CardItem,
    Form,
    Input,
} from 'native-base'
import {View, Image} from 'react-native'
import {TextField} from '../../components'
import { compose } from "redux";
import _ from 'lodash'
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {SYSTEM_ROUTES} from "../../constants";
import {requiredValidation} from '../../helpers'


class RegisterHelpScreen extends Component {

    //D4A452 BEJE
    //9F9F9F cinza
    //87A23D verde

    _renderTextField (field) {
        const { meta: { touched, error }, input: { value, onChange }, nameIcon, label, ...custom } = field;
        const errorInput = touched && error ? error : null;
            return (
                <View style={{
                    borderWidth: 1,
                    borderRadius: 5, 
                    borderColor: '#87A23D', 
                    marginTop: 20,  
                    display: 'flex', 
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    marginRight: 10
                }}>
                    <Input value={value} onChangeText={onChange} placeholderTextColor="#9F9F9F" placeholder={label}/>
                    <Icon type="MaterialIcons" name={nameIcon} style={{color: '#9F9F9F'}}/>
                </View>
            )
        }
    render() {
        const {navigation: {navigate}, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <View style={{marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#e6e4e4'}}>
                        <Card style={{marginLeft: 20, marginRight: 20}}>
                            <CardItem cardBody>
                                <Image 
                                    source={{uri: 'https://www.petz.com.br/blog/wp-content/uploads/2017/11/pitbull-01.jpg'}} 
                                    style={{height: 200, width: null, flex: 1}}
                                />
                            </CardItem> 
                        </Card>
                        <View>
                            <Text style={{textAlign: 'center', marginTop: 5, color: '#D4A452', fontSize: 20, fontWeight: '500'}}>Cachorro em perigo</Text>
                            <Text style={{textAlign: 'center', fontSize: 15, color: '#9F9F9F'}}>Encontramos esse cachorro e ele está</Text>
                            <Text style={{textAlign: 'center', fontSize: 15, color: '#9F9F9F'}}>Precisando de ajuda.</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
                            <Text style={{color: '#D4A452', fontSize: 18}}>Situação:</Text>
                            <Text style={{fontSize: 15, color: '#9F9F9F'}}> Perdido</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
                            <Text style={{color: '#D4A452', fontSize: 18}}>Distância:</Text>
                            <Text style={{fontSize: 15, color: '#9F9F9F'}}> 4 km</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
                            <Text style={{color: '#D4A452', fontSize: 18}}>Tipo de animal:</Text>
                            <Text style={{fontSize: 15, color: '#9F9F9F'}}> Cachorro</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5}}>
                            <Text style={{color: '#D4A452', fontSize: 18}}> Raça:</Text>
                            <Text style={{fontSize: 15, color: '#9F9F9F'}}> Border Colie</Text>
                        </View>
                        <View style={{marginTop: 5}}>
                            <Text style={{textAlign: 'center', color: '#87A23D', fontSize: 16}}>Rua São Jóse,85 - Jardim Alvorada,</Text>
                            <Text style={{textAlign: 'center', color: '#87A23D', fontSize: 16, paddingBottom: 10}}>Ribeirão Preto - SP, 14140-000, Brazil</Text>
                        </View>
                    </View>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#e6e4e4', paddingBottom: 20}}>
                        <Form>
                            <Field
                                label="Descreva sua ajuda"
                                name="ajuda"
                                textContentType="title"
                                component={this._renderTextField}
                                //validate={requiredValidation}
                                />
                        </Form>
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                        <View> 
                            <Button style={{backgroundColor: '#D4A452'}} 
                                onPress={() => this.props.navigation.navigate(SYSTEM_ROUTES.NEW_CUPOM_SCREEN.ROUTE)}
                            >
                                <Text style={{color: '#ffffff'}}>Postar comentário</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }

}
// const mapStateToProps = (state) => ({
//
// });

RegisterHelpScreen = compose(
    reduxForm({
        form: 'RegisterHelpForm',
        enableReinitialize: true,
    }),
    connect(null, { }),
)(RegisterHelpScreen);

export { RegisterHelpScreen }