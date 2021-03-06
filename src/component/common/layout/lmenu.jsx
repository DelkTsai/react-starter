import React, {Component} from 'react';

import Config from '_config/index';
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';

export class Lmenu extends Component {
    constructor(props, context) {
        super(props, context); //后才能用this获取实例化对象
        const openKeys = Config.localItem('OPENKEY') ? [Config.localItem('OPENKEY')] : [];
        this.state = {
            openKeys: openKeys
        };
    }

    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        Config.localItem('OPENKEY', nextOpenKeys);
        this.setState({openKeys: nextOpenKeys});
    }
    getAncestorKeys = (key) => {
        const map = {
            sub3: ['sub2'],
        };
        return map[key] || [];
    }

    test = (item) => {
        console.log(item)
    }


    render() {
        return (
            <Menu openKeys={this.state.openKeys} onClick={this.test} onOpenChange={this.onOpenChange} theme="dark" mode={this.props.mode}
                  defaultSelectedKeys={['/home/nurseStation/curPatient']}>
                <Menu.Item key="/home/image">
                    <Link to="/home/image">
                        <Icon type="laptop"/>
                        {!this.props.collapsed && <span className="nav-text">TESTING</span>}
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}