import styled from 'styled-components'

import logo from '../../statics/img/header/logo.png'

export const HeaderWrapper = styled.header`
    {
        height : 58px;
        border-bottom : 1px solid #f0f0f0;
    }
        
`

export const Logo = styled.a.attrs({
    href : '/',
})`
    {
        background: url(${logo});
        display: block;
        width: 100px;
        height: 58px;
        background-size: contain;
        float: left;
        //background-position-y: 10px;
    }
        
`

export const Nav = styled.div`
    {       
        
        height: 58px;
        margin: 0 auto;     
        padding-right: 30px;
        box-sizing: border-box;   
    }
        
`

export const NavItem = styled.div`
    {        
        line-height: 58px;
        padding: 0 15px;
        font-size: 16px;
        &.left{
            float: left;
        }
        &.right{
            float: right;
        }
        &.active{
            
        }
    }
        
`

export const NavSearch = styled.input.attrs({
    placeholder : '搜索',
})`
    {        
        width: 160px;
        height: 38px;
        padding: 0  35px 0 20px;
        margin-left: 20px;
        box-sizing: border-box;
        border: none;
        outline: none;
        border-radius: 19px;
        background: #eee;
        font-size: 14px;
        &::placeholder{
            color: #999;
        }
        margin-top: 10px;
        &.focused{
            width: 240px;
            
        }
    }
        
`

export const Adition = styled.div`
    {
        float: right;
        height: 58px;
        margin-left: 30px;
    }
`

export const Button = styled.button`
    {
        padding: 0 20px;
        margin-right: 20px;
        line-height: 38px;
        border-radius: 19px;
        border: 1px solid #ec6149;
        margin-top: 10px;
        font-size: 14px;
        &.red {
            color: #ec6149;
            background: white;
        }
        &.write{
            color: #fff;
            background: #ec6149;
        }
        &:focus{
            outline: 0;
        }
        cursor: pointer;
    }
`

export const SearchWrap = styled.div`
    {
        float: left;
        position: relative;
        margin-right: 20px;
        line-height: 30px;
        .slide-enter{
            transition: all .2s ease-in;
        }
        .slide-enter-active{
            width: 240px;
        }
        .slide-exit{
            transition: all .2s ease-in;
        }
        .slide-exit-active{
            width: 160px;
        }
    }

`

export const Magnifier = styled.i`
    {
        margin-top: 14px;
        position: absolute;
        right: 2px;
        text-align: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        &.focused{
            color: #fff;
            background: #777;
        }
    }
`

export const SearchInfo = styled.div`
    {
        position: absolute;
        left: 20px;
        top: 56px;
        width: 240px;
        padding: 0 0 0 24px;

        box-shadow: 0 0 8px rgba(0,0,0,.2);
        height: 188px;
    }
`

export const SearchInfoTitle = styled.div`
    {
        margin-top: 20px;
        margin-bottom: 15px;
        line-height: 20px;
        font-size: 14px;
        color: #969696;
    }
`

export const SearchInfoSwitch = styled.span`
    {
        float: right;
        font-size: 14px;
        margin-right: 20px;
        &:hover{
            color: black;
            cursor: pointer;          
        }
        i{
            vertical-align: center;
            font-size: 12px;
            margin-right: 10px;
        }
        .iconspin{
            display: inline-block;
            transition: all 0.2s ease;
            transform-origin: center center;
        }
        
    }
`

export const SearchInfoItem = styled.li`
    {
        line-height: 20px;
        padding: 0 5px;
        border: 1px solid #ddd;
        font-size: 12px;
        border-radius: 2px;
        display: inline;
        margin-right: 26px;
        margin-bottom: 10px;
        box-sizing: border-box;
        a{
            color: #787878;   
    
        }
        &:hover{
            border: 1px solid black;
            a{
                color: black;
            }
            
        }
    }
`

export const SearchInfoItemList = styled.ul`
    {
        display: flex;
        flex-flow: wrap;
        
    }
`