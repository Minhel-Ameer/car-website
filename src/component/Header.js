import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'
import SearchBar from './SearchBar';

const Header = () => {
  const [enterMake, setEnterMake] = useState("Enter Make From hook")
  return (
    <MainHeader>
      <NavLink to='/'>
        <img src={require("../images/logo2.jpg")} alt='logo' className='logo'/>
      </NavLink>
      <Navbar/>
      {/* <SearchBar enterMake={enterMake}/> */}
    </MainHeader>
  );
};

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme}) => theme.colors.bg};

display: flex;
justify-content: space-between;
align-items: center;

.logo{
  height:auto;
  max-width: 30%;
}
`;
export default Header
