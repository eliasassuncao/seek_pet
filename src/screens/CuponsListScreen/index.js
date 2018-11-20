import React, { Component } from 'react'
import {Body, Button, Container, Content, Icon, Left, ListItem, Text, Right, Thumbnail} from 'native-base'
import {View, Image} from 'react-native'
import styles from './styles'
import { compose } from "redux";
import _ from 'lodash'
import { connect } from 'react-redux'
import {SYSTEM_ROUTES} from "../../constants";

const arr = [
    {
        type: 'Geração pet',
        code: 'GERACAOPET20',
        url: require('../../../public/images/geracaopet.jpg')
    },
    {
        type: 'Pet love',
        code: 'PETLOVE20',
        url: require('../../../public/images/petlove.jpg')
    }
]
class CuponsListScreen extends Component {

    render() {
        const {navigation: {navigate}, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <View style={styles.viewHeader}>
                        <Text style={styles.title}>Cupons de desconto</Text>
                        <View style={styles.viewSubTitle}>
                            <Text style={styles.subTitle}>Aqui está listada todos os cupons de desconto</Text>
                            <Text style={styles.subTitle}>que você já ganhou aqui no aplicativo.</Text>
                        </View>
                    </View>
                    {
                        _.map(arr, (item, index) => (
                             <ListItem thumbnail key={index}>
                                <Left>
                                    <Image 
                                        resizeMode='contain' 
                                        style={{width: 80, height: 80}} 
                                        source={item.url} 
                                    />
                                </Left>
                                <Body>
                                    <Text style={styles.bodyText}>{item.type}</Text>
                                    <Text note numberOfLines={1} style={{color: '#87A23D'}}>{item.code}</Text>
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

CuponsListScreen = compose(
    connect(null, { }),
)(CuponsListScreen);

export { CuponsListScreen }