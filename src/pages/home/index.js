import * as React from 'react'
import mainImg from '../.././statics/img/home/main.png'

import { HomeWrapper ,HomeLeft ,HomeRight } from './style'

import List from './components/List'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommend from './components/Recommend'


class home extends React.Component {
    render(){
        return <div>
            <HomeWrapper>
                <HomeLeft>
                    <img src={mainImg} className='mainImg'/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        </div>
    }
}

export default home