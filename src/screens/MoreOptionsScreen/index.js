import React, { Component } from 'react'
import {Body, Button, Container, Content, Icon, Left, ListItem, Text,} from 'native-base'
import {View} from 'react-native'
import styles from './styles'
import { compose } from "redux";
//import { fetchStoresDetails } from "../../actions";
import _ from 'lodash'
import { connect } from 'react-redux'
import {SYSTEM_ROUTES} from "../../constants";

class MoreOptionsScreen extends Component {

    render() {
        const {navigation: {navigate}, handleSubmit, submitting, pristine} = this.props;
        return (
            <Container>
                <Content>
                    <ListItem
                        onPress={() => navigate(SYSTEM_ROUTES.REGISTER_ACCOUNT_SCREEN.ROUTE)}
                        style={styles.listItem}
                        icon
                    >
                        <Left>
                            <Button style={styles.iconColor}>
                                <Icon type="MaterialIcons" name="edit"/>
                            </Button>
                        </Left>
                        <Body style={styles.listItemBody}>
                        <Text style={styles.textColor}>Editar seu perfil</Text>
                        </Body>
                    </ListItem>
                    <ListItem
                        onPress={() => navigate(SYSTEM_ROUTES.HELP_AND_DONATION_SCREEN.ROUTE)}
                        style={styles.listItem}
                        icon
                    >
                        <Left>
                            <Button style={styles.iconColor}>
                                <Icon type="MaterialIcons" name="pets"/>
                            </Button>
                        </Left>
                        <Body style={styles.listItemBody}>
                        <Text style={styles.textColor}>Suas ajudas e sua adoções</Text>
                        </Body>
                    </ListItem>
                    <ListItem
                        onPress={() => navigate(SYSTEM_ROUTES.CUPONS_LIST_SCREEN.ROUTE)}
                        style={styles.listItem}
                        icon
                    >
                        <Left>
                            <Button style={styles.iconColor}>
                                <Icon type="MaterialIcons" name="local-offer"/>
                            </Button>
                        </Left>
                        <Body style={styles.listItemBody}>
                            <Text style={styles.textColor}>Cupons de desconto</Text>
                        </Body>
                    </ListItem>
                    <ListItem
                        style={styles.listItem}
                        button
                        icon
                        onPress={() => navigate(SYSTEM_ROUTES.LOGIN_AUTH_SCREEN.ROUTE)}
                    >
                        <Left>
                            <Button style={styles.iconColor}>
                                <Icon type="MaterialIcons" name="exit-to-app"/>
                            </Button>
                        </Left>
                        <Body style={styles.listItemBody}>
                        <Text style={styles.textColor}>Sair do aplicativo</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        )
    }

}
// const mapStateToProps = (state) => ({
//
// });

MoreOptionsScreen = compose(
    connect(null, { }),
)(MoreOptionsScreen);

export { MoreOptionsScreen }