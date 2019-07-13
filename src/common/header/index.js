import * as React from 'react'

import { HeaderWrapper ,Logo ,Nav ,NavItem ,NavSearch ,Adition ,Button ,SearchWrap ,Magnifier ,SearchInfo ,SearchInfoTitle ,SearchInfoSwitch ,SearchInfoItemList ,SearchInfoItem } from './styled'

import { CSSTransition } from "react-transition-group"

import { connect } from 'react-redux'

import  { actionCreators }  from './store'

class Header extends React.Component {

    render(){
        const { focused ,handleInputFocus ,handleInputBlur ,page ,list ,mouseIn ,handleMouseLeave , handleChangePage ,totalPage ,total } = this.props

        const newList = []

        const pageList = list.toJS()

        if(pageList.length){
            for(let i = (page - 1) * 10;i < (page * 10 <= total ? page * 10 : total);i++){
                newList.push(<SearchInfoItem key={i}><a>{pageList[i]}</a></SearchInfoItem>)
            }
        }

        return <HeaderWrapper>

            <Logo></Logo>
            <Nav>
                <NavItem className='left'><a>首页</a></NavItem>
                <NavItem className='left'><a>下载App</a></NavItem>
                <Adition>
                    <Button className='red'>注册</Button>
                    <Button className='write'>写文章</Button>
                </Adition>
                <NavItem className='right'><i className='icon iconfont iconAa'></i></NavItem>
                <NavItem className='right'>登录</NavItem>

                <SearchWrap>

                    <CSSTransition
                        in = {this.props.focused}
                        timeout = {200}
                        classNames = 'slide'

                    >
                        <NavSearch onFocus={() => { handleInputFocus(list) }} onBlur={handleInputBlur} className={focused ? 'focused' : ''}></NavSearch>
                    </CSSTransition>
                    <Magnifier className={focused ? 'icon iconfont iconfangdajing focused' : 'icon iconfont iconfangdajing'}></Magnifier>
                    <SearchInfo onMouseLeave={handleMouseLeave} style={{visibility:mouseIn?'visible':'hidden'}}>
                        <SearchInfoTitle>热门搜索
                            <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.iconspin)}}>
                                <i ref={icon => { this.iconspin = icon }} className='icon iconfont iconspin'></i>
                                换一批
                            </SearchInfoSwitch></SearchInfoTitle>
                        <SearchInfoItemList>

                            {newList}

                        </SearchInfoItemList>
                    </SearchInfo>
                </SearchWrap>

            </Nav>

        </HeaderWrapper>
    }


}

export default connect((state)=>{
    return {
        // focused : state.get('header').get('focused'),
        focused : state.getIn(['header','focused']),
        list : state.getIn(['header','list']),
        page : state.getIn(['header','page']),
        mouseIn : state.getIn(['header','mouseIn']),
        totalPage : state.getIn(['header','totalPage']),
        total : state.getIn(['header','total']),

    }
},(dispatch)=>{
    return {
        handleInputFocus(list){
            !list.size && dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
            dispatch(actionCreators.mouseEnter())
        },

        handleInputBlur(){
            dispatch(actionCreators.searchBlur())

        },

        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },

        handleChangePage(page,totalPage,spin){

            let newPage = page < totalPage ? page + 1 : 1

            dispatch(actionCreators.changePage(newPage))

            let angle = spin.style.transform.replace(/[^0-9]/ig,'')

            angle = angle ? parseInt(angle) : 0

            spin.style.transform = 'rotate(' + (angle + 360) + 'deg)'

        }
    }
})(Header)