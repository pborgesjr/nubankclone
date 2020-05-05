import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Code,
  BankInfo,
  AgencyInfo,
  AccountInfo,
  TextLabel,
  TextInfo,
  Nav,
  NavItem,
  Left,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://www.linkedin.com/in/pedro-borges-3613489a/"
          size={80}
          color="#fff"
          backgroundColor="#8b10AE"
        />
      </Code>
      <BankInfo>
        <TextLabel>Banco</TextLabel>
        <TextInfo>260 - Nu Pagamentos S.A.</TextInfo>
      </BankInfo>
      <AgencyInfo>
        <TextLabel>Agência</TextLabel>
        <TextInfo>0000</TextInfo>
      </AgencyInfo>
      <AccountInfo>
        <TextLabel>Conta</TextLabel>
        <TextInfo>0000000-0</TextInfo>
      </AccountInfo>

      <Nav>
        <NavItem>
          <Left>
            <Icon name="help-outline" size={20} color="#fff" />
            <NavText>Me ajuda</NavText>
          </Left>
          <Icon name="chevron-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <Left>
            <Icon name="person-outline" size={20} color="#fff" />
            <NavText>Perfil</NavText>
          </Left>
          <Icon name="chevron-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <Left>
            <IconCommunity name="coin" size={20} color="#fff" />
            <NavText>Configurar conta</NavText>
          </Left>
          <Icon name="chevron-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <Left>
            <Icon name="credit-card" size={20} color="#fff" />
            <NavText>Configurar Cartão</NavText>
          </Left>
          <Icon name="chevron-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <Left>
            <Icon name="smartphone" size={20} color="#fff" />
            <NavText>Pedir conta PJ</NavText>
          </Left>
          <Icon name="chevron-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <Left>
            <Icon name="smartphone" size={20} color="#fff" />
            <NavText>Configurações do app</NavText>
          </Left>
          <Icon name="chevron-right" size={20} color="#fff" />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
