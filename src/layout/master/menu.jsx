import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'


class MenuExampleBasic extends Component {

    constructor() {

        super();

       this.state = {};

         this.handleItemClick = (e, { name }) => {


           this.setState({ activeItem: name })
       };
    }



render() {

const { activeItem } = this.state

    return (

        <Menu inverted vertical floated fixed='left'>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
        </Menu>

    )
}
}

export default MenuExampleBasic;
