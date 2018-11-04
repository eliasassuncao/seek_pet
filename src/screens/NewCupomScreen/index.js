import React, { Component } from 'react'
import {Body, Button, Container, Content, Icon, Left, ListItem, Text, Right, Thumbnail} from 'native-base'
import {View} from 'react-native'
import styles from './styles'
import { compose } from "redux";
import _ from 'lodash'
import { connect } from 'react-redux'
import {SYSTEM_ROUTES} from "../../constants";

class NewCupomScreen extends Component {

    render() {
        const {navigation, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <View style={styles.container}>
                        <Thumbnail 
                            large 
                            source={{ uri: 'https://static.thenounproject.com/png/13421-200.png'}}
                            style={styles.image}
                        />
                        <Text style={styles.textCongratulations}>Meus parabéns!</Text>
                        <View style={styles.viewBody}>
                            <Text style={styles.textBody}>Você acaba de ajudar um pet e</Text>
                            <Text style={styles.textBody}>a colaborar para um mundo melhor.</Text>
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

NewCupomScreen = compose(
    connect(null, { }),
)(NewCupomScreen);

export { NewCupomScreen }