import React, { PureComponent } from 'react';
import
{
  HeaderWrapper, Navbar, NavItem, Title,
} from './style';

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Title>ENSE701</Title>
        <Navbar>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/SearchArticle">Search article</NavItem>
          <NavItem href="/SubmitArticle">submit article</NavItem>
          <NavItem href="/Contantus">Contant us</NavItem>
        </Navbar>
      </HeaderWrapper>
    );
  }
}

export default Header;
