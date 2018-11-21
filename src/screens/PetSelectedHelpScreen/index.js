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
import { compose } from "redux";
import _ from 'lodash'
import { connect } from 'react-redux'
import {SYSTEM_ROUTES} from "../../constants";
import Modal from "react-native-modal";

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

class PetSelectedHelpScreen extends Component {

    state = {
        isVisible: false
    };

    constructor(props) {
        super(props);
        this._modalClose = this._modalClose.bind(this);
        this._modalOpen = this._modalOpen.bind(this);
    }

    _modalClose() {
        this.setState({isVisible: false})
    }

    _modalOpen() {
        this.setState({isVisible: true})
    }

    render() {
        const {navigation: {navigate}, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <Modal
                        onBackdropPress={this._modalClose}
                        isVisible={this.state.isVisible}
                    >
                        <Card>
                            <CardItem style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Text style={{textAlign: 'center', marginBottom: 10, color: '#D4A452', fontSize: 20, fontWeight: '500'}}>Você vai mesmo adotar?</Text>
                                <Text style={{textAlign: 'center', fontSize: 15, color: '#9F9F9F'}}>Ficamos muito felizes com sua adoção,</Text>
                                <Text style={{textAlign: 'center', fontSize: 15, color: '#9F9F9F'}}>porém queremos te lembrar que esse</Text>
                                <Text style={{textAlign: 'center', fontSize: 15, color: '#9F9F9F'}}>pet já pode ter dono.</Text> 
                                <Text style={{textAlign: 'center', fontSize: 15, color: '#9F9F9F', marginTop: 10}}>Vamos deixar esse pet mais 48 horas</Text>
                                <Text style={{textAlign: 'center', fontSize: 15, color: '#9F9F9F'}}>no aplicaivo caso ele apareça.</Text>
                                <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <Button 
                                        style={{backgroundColor: '#87A23D', marginTop: 10}} 
                                        onPress={() => {
                                            this._modalClose()
                                            navigate(SYSTEM_ROUTES.PET_ADOPTED_SCREEN.ROUTE)
                                        }}
                                    >
                                        <Text style={{color: '#ffffff'}}>Adotar mesmo assim</Text>
                                    </Button>
                                </View>
                            </CardItem>
                        </Card>
                    </Modal>
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
                                onPress={() => this.props.navigation.navigate(SYSTEM_ROUTES.REGISTER_HELP_SCREEN.ROUTE)}
                                >
                                <Text style={{color: '#ffffff'}}>Ajude esse pet agora</Text>
                            </Button>
                            <Button 
                                style={{backgroundColor: '#87A23D', marginTop: 10}} 
                                onPress={() => this._modalOpen()}
                            >
                                <Text style={{color: '#ffffff'}}>Adote esse pet agora</Text>
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

PetSelectedHelpScreen = compose(
    connect(null, { }),
)(PetSelectedHelpScreen);

export { PetSelectedHelpScreen }