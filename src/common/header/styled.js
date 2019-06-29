import styled from 'styled-components'

import logo from '../../statics/img/header/logo.png'

export const HeaderWrapper = styled.header`
    {
        height : 58px;
        border-bottom : 1px solid #f0f0f0;
        display: flex;
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
        background-position-y: 10px;
    }
        
`

export const Nav = styled.div.attrs({

})`
    {
        
        width: 960px;
        height: 58px;
        margin: 0 auto;
        
    }
        
`
