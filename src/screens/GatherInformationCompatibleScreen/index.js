import React, { Component } from 'react'
import {Body, Button, Container, Content, Text,} from 'native-base'
import {View, Image} from 'react-native'
import styles from './styles'
import { compose } from "redux";
import _ from 'lodash'
import { connect } from 'react-redux'
import {SYSTEM_ROUTES} from "../../constants";

class GatherInformationCompatibleScreen extends Component {

    render() {
        const {navigation, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <Image 
                            source={require('../../../public/images/compatiblePet.jpg')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={styles.textCongratulations}>Pet compatível</Text>
                        <View style={styles.viewBody}>
                            <Text style={styles.textBody}>Anexamos suas informações junto com esse pet.</Text>
                            <Text style={styles.textBody}>Fique de olho nas notificações ou entre em</Text>
                            <Text style={styles.textBody}>contato com as pessoas que já ajudaram esse pet.</Text>
                        </View>
                        <View style={styles.viewBody}>
                            <Text style={styles.textBody}>Estamos dando de presente para você</Text>
                            <View style={styles.viewTextCupom}>
                                <Text style={styles.textCupom}>20% DE DESCONTO </Text>
                                <Text style={styles.textCupomCenter}>na</Text>
                                <Text style={styles.textCupom}> GERAÇÃO PET</Text>
                            </View>
                        </View>

                        <View style={styles.lastView}>
                            <Text style={styles.textCupomCenter}>Na sua compra use o cupom </Text>
                            <Text style={styles.textCupom}>GERACAOPET20</Text>
                        </View>
                        <Button 
                            full 
                            style={styles.buttonSubmit} 
                            //disabled={pristine || submitting}
                            onPress={() => navigation.popToTop()}
                        >
                            <Text style={styles.textButtonSubmit}>Voltar ao menu</Text>
                        </Button>
                    </View>    
                </Content>
            </Container>
        )
    }

}
// const mapStateToProps = (state) => ({
//
// });

GatherInformationCompatibleScreen = compose(
    connect(null, { }),
)(GatherInformationCompatibleScreen);

export { GatherInformationCompatibleScreen }