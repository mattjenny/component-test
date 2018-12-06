import React from 'react';
import styled  from 'styled-components';
import PropTypes from 'prop-types';

export const Colors = {
  blue: '#2D85FB',
  white: '#ffffff',
  green: '#00C596',
  red: '#EC4068',
  yellow: '#FCA200',
  purple: '#735BFA',
  pink: '#A600A3',
  black: {
    c900: '#07090A',
    c800: '#1F262D',
    c700: '#283038',
    c600: '#454D54',
    c500: '#525A62',
    c400: '#616871',
    c300: '#7E8690',
    c200: '#969EA8',
    c100: '#A5ADB5',
  },
  grey: {
    c900: '#8C93A0',
    c800: '#9CA4B1',
    c700: '#A7AFBC',
    c600: '#B5BBC6',
    c500: '#CBCFD7',
    c400: '#E1E4E9',
    c300: '#F1F2F5',
    c200: '#F8F9FB',
    c100: '#FCFCFD',
  },
  gradient: {
    blueGreen: 'linear-gradient(45deg, #2D85FB 0%, #00C596 100%)',
    bluePink: 'linear-gradient(45deg, #2D85FB 0%, #A600A3 100%)',
    purplePink: 'linear-gradient(45deg, #735BFA 0%, #A600A3 100%)',
    pinkRed: 'linear-gradient(45deg, #A600A3 0%, #EC4068 100%)',
    pinkYellow: 'linear-gradient(45deg, #A602A2 0%, #FF8811 100%)',
  }
}


const HeaderStyle = styled.div`
  font-size: ${props => {
    switch(props.level) {
      case 0:
        return '40px'
      case 2:
        return '16px'
      default:
        return '20px'
  }}};
  line-height: ${props => {
    switch(props.level) {
      case 0:
        return '40px'
      case 2:
        return '24px'
      default:
        return '28px'
  }}};
  font-weight: ${props => {
    switch(props.level) {
      case 0:
        return '400'
      default:
        return '500'
  }}};
  color: ${Colors.black.c800};
  margin: 0 0 5px;
`;

export class Header extends React.Component {
  static defaultProps = {
    level: 1
  }
  render(){
    return <HeaderStyle className={this.props.className} level={this.props.level}>{this.props.children}</HeaderStyle>
  }
}
Header.propTypes = {
  level: PropTypes.number,
}
