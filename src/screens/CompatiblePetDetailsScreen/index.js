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
} from 'native-base'
import {View, Image} from 'react-native'
import styles from './styles'
import { compose } from "redux";
import _ from 'lodash'
import { connect } from 'react-redux'
import {SYSTEM_ROUTES} from "../../constants";

class CompatiblePetDetailsScreen extends Component {

    render() {
        const {navigation: {navigate}, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <View style={{marginTop: 20,}}>
                        <Card style={{marginLeft: 20, marginRight: 20}}>
                            <CardItem cardBody>
                                <Image 
                                    source={{uri: 'https://www.petz.com.br/blog/wp-content/uploads/2017/11/pitbull-01.jpg'}} 
                                    style={{height: 200, width: null, flex: 1}}
                                />
                            </CardItem> 
                        </Card>
                        <View>
                            <Text>Cachorro em perigo</Text>
                            <Text>Encontramos esse cachorro e ele está</Text>
                            <Text>Precisando de ajuda.</Text>
                        </View>
                        <View>
                            <Text>Situação:</Text>
                            <Text>Perdido</Text>
                            <Text>Distância:</Text>
                            <Text>4 km</Text>
                        </View>
                        <View>
                            <Text>Tipo de animal:</Text>
                            <Text>Cachorro</Text>
                            <Text>Raça:</Text>
                            <Text>Border Colie</Text>
                        </View>
                        <View>
                            <Text>Rua São Jóse,85 - Jardim Alvorada,</Text>
                            <Text>Ribeirão Preto - SP, 14140-000, Brazil</Text>
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

CompatiblePetDetailsScreen = compose(
    connect(null, { }),
)(CompatiblePetDetailsScreen);

export { CompatiblePetDetailsScreen }