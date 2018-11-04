import React, { Component } from 'react'
import {Body, Button, Container, Content, Icon, Left, ListItem, Text, Right, Thumbnail} from 'native-base'
import {View} from 'react-native'
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
class HelpAndDonationsScreen extends Component {

    render() {
        const {navigation: {navigate}, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <View style={styles.viewHeader}>
                        <Text style={styles.title}>Suas ajudas suas adoções</Text>
                        <View style={styles.viewSubTitle}>
                            <Text style={styles.subTitle}>Aqui está listada todas as suas</Text>
                            <Text style={styles.subTitle}>boas ações através desse aplicativo</Text>
                        </View>
                    </View>
                    {
                        _.map(arr, (item, index) => (
                             <ListItem thumbnail key={index}>
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
                   
                </Content>
            </Container>
        )
    }

}
// const mapStateToProps = (state) => ({
//
// });

HelpAndDonationsScreen = compose(
    connect(null, { }),
)(HelpAndDonationsScreen);

export { HelpAndDonationsScreen }