import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import { yellow } from '@mui/material/colors';
const Header = () => {
  return (
    <div className="header">
        <div className="header__logo">
        <StorefrontIcon fontSize="large" sx={{ color: yellow[800] }}/>
        <div className="header__logoTitle">eShop</div>
        </div>

        <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon fontSize="large"  className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <div className="nav__item">
                <div className="nav_itemLineOne">
                Hello Guest
                </div>
                <div className="nav__itemLineTwo">
                 Sign In
                </div>
            </div>
            
            <div className="nav__item">
                <div className="nav_itemLineOne">
                Your
                </div>
                <div className="nav__itemLineTwo">
                 Shop
                </div>
            </div>

            <div className="nav__item itemBasket">
                <div className="nav_itemLineOne">
                <ShoppingBasketIcon fontSize="large" />
                </div>
                <div className="nav__itemLineTwo basketCount ">
                    0
                </div>
            </div>
        </div>

</div>
    
 
  )
}

export default Header;