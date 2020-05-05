import {StyleSheet, Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  overflow: hidden;
  background: #fff;
  padding: 10px;
  align-self: center;
  margin-bottom: 15px;
`;

export const BankInfo = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const AgencyInfo = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const AccountInfo = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const TextLabel = styled.Text`
  color: #fff;
`;

export const TextInfo = styled.Text`
  color: #fff;
  font-weight: bold;
  padding-left: 5px;
`;

export const Nav = styled.View`
  margin-top: 30px;
  align-self: stretch;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;

export const Left = styled.View`
  flex-direction: row;
`;
