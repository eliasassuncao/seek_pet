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

const arr = [
    {
        nome: 'João Rodrigues',
        date: '13/02/2017 20h15',
        url: 'https://cdn-images-1.medium.com/max/2000/1*g09N-jl7JtVjVZGcd-vL2g.jpeg',
        action: 'Informou sobre esse pet'
    },
    {
        nome: 'Matheus Souza',
        date: '13/02/2017 20h15',
        url: 'https://cdn-images-1.medium.com/max/2000/1*g09N-jl7JtVjVZGcd-vL2g.jpeg',
        action: 'Acabei de levar comida para ele'
    }
]

class CompatiblePetDetailsScreen extends Component {

    //D4A452 BEJE
    //9F9F9F cinza
    //87A23D verde
    render() {
        const {navigation: {navigate}, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <View style={{marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#e6e4e4'}}>
                        <Card style={{marginLeft: 20, marginRight: 20}}>
                            <CardItem cardBody>
                                <Image 
                                    source={require('../../../public/images/pitbull.jpg')} 
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
                    <View>
                    {
                        _.map(arr, (item, index) => (
                             <ListItem thumbnail key={index}>
                                <Left>
                                    <Thumbnail source={{ uri: item.url}} />
                                </Left>
                                <Body>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <Text style={{color: '#D4A452'}}>{item.nome}</Text>
                                        <Text style={{fontSize: 12, color: '#777777', marginTop: 4}}>{item.date}</Text>
                                    </View>
                                    <Text note numberOfLines={1}>{item.action}</Text>
                                </Body>
                            </ListItem>
                        ))
                    }
                    </View>
                    <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                        <View> 
                            <Button 
                                style={{backgroundColor: '#D4A452'}} 
                                onPress={() => navigate(SYSTEM_ROUTES.GATHER_INFORMATION_COMPATIBLE_SCREEN.ROUTE)}
                            >
                                <Text style={{color: '#ffffff'}}>Pet compatível</Text>
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

CompatiblePetDetailsScreen = compose(
    connect(null, { }),
)(CompatiblePetDetailsScreen);

export { CompatiblePetDetailsScreen }