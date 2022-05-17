import styled from "styled-components";

export const HeaderWrapper = styled.div`
    height: 150px;
    width: 100%;
<<<<<<< HEAD:ENSE-701-Team-9-SEER/frontend/src/common/header/style.js
    background:#0D1117;
    flow:left;
    '&:hover': {
        backgroundColor: 'white',
      },
=======
    background: lightblue;
    flow:left;
>>>>>>> origin/Jason:frontend/src/common/header/style.js
`;

export const Title = styled.div`
    height: 50%;
    width: 100%;
    flow: leff;
    color: white;
    padding-left: 3%;
    line-height: 250%;
    background: #161B22;
    font-size: 200%;
    '&:hover': {
        backgroundColor: 'white',
      },
`

export const Navbar = styled.div`
    margin-top:50%
    height: 10%;
    width: 100%;
    flow: leff;
    padding-left: 2%;
    '&:hover': {
        backgroundColor: 'white',
      },
`

export const NavItem = styled.a`
   
    font-size: 15px;
    float: left;
    cursor: pointer;
    line-height: 200%;
    margin-left: 25px;
    color:#58A6FF;
    text-decoration: none;
    font-size: 150%;
    '&:hover': {
        backgroundColor: 'white',
      },
`