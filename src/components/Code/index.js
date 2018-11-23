import React from 'react';
import styled from 'styled-components';
import {Colors}  from '../../components/System';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'


const StyledLivePreview = styled(LivePreview)`
  padding: 20px 20vw;
  border: 1px solid ${Colors.grey.c400.hex()};
  border-radius: 2px 2px 0 0;
  background: ${Colors.grey.c200.hex()};
  text-align: center;
`;
const StyledLiveEditor = styled(LiveEditor)`
  &.prism-code{
    padding: 20px;
    background: #fff;
    color: ${Colors.black.c600.hex()};
    border: 1px solid ${Colors.grey.c400.hex()};
    border-radius: 0 0 2px 2px;
    border-top: 0;
    margin-bottom: 40px;
    overflow: auto;
  }
  .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.atrule, .token.attr-value, .token.keyword{
    color: ${Colors.red.hex()};
  }
  .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted{
    color: #00D3A7;
  }
`;


export default class CodeObj extends React.Component {
  render(){
    return (<LiveProvider code={this.props.code} scope={this.props.scope}>
      <LiveError />
      <StyledLivePreview />
      <StyledLiveEditor />
    </LiveProvider>
    )
  }
}
