import React, { Component } from 'react'
import {Body, Button, Container, Content, Icon, Left, ListItem, Text, Right, Thumbnail} from 'native-base'
import {View, TouchableOpacity} from 'react-native'
import styles from './styles'
import { compose } from "redux";
import _ from 'lodash'
import { connect } from 'react-redux'
import {SYSTEM_ROUTES} from "../../constants";

const arr = [
    {
        type: 'Cachorro em perigo',
        date: '13/02/2017 20h15',
        url: 'https://static.thenounproject.com/png/13421-200.png'
    },
    {
        type: 'Precisando de socorro',
        date: '13/02/2017 20h15',
        url: 'https://static.thenounproject.com/png/13421-200.png'
    }
]
class CompatiblePetsScreen extends Component {

    render() {
        const {navigation: {navigate}, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <View style={styles.viewHeader}>
                        <Text style={styles.title}>Pets compatíveis</Text>
                        <View style={styles.viewSubTitle}>
                            <Text style={styles.subTitle}>Outros usuários cadastraram pets</Text>
                            <Text style={styles.subTitle}>semelhantes neste local, veja aqui se alguma</Text>
                            <Text style={styles.subTitle}>delas se encaixa com a sua.</Text>
                        </View>
                    </View>
                    {
                        _.map(arr, (item, index) => (
                             <ListItem button thumbnail onPress={() => navigate(SYSTEM_ROUTES.COMPATIBLE_PET_DETAILS.ROUTE)} key={index}>
                                <Left>
                                    <Thumbnail square source={{ uri: item.url}} />
                                </Left>
                                <Body>
                                    <Text style={styles.bodyText}>{item.type}</Text>
                                    <Text note numberOfLines={1}>{item.date}</Text>
                                </Body>
                            </ListItem>
                        ))
                    }
                    <Button 
                        full 
                        style={styles.buttonSubmit} 
                        //disabled={pristine || submitting}
                        onPress={() => navigate(SYSTEM_ROUTES.NEW_CUPOM_SCREEN.ROUTE)}
                    >
                        <Text style={{color: '#ffffff'}}>Nenhum é compatível</Text>
                    </Button>
                   
                </Content>
            </Container>
        )
    }

}
// const mapStateToProps = (state) => ({
//
// });

CompatiblePetsScreen = compose(
    connect(null, { }),
)(CompatiblePetsScreen);

export { CompatiblePetsScreen }