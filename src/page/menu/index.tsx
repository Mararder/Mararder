import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import routers, { IRouters } from "../../router/routers"

const { SubMenu } = Menu;
const MenuItem = Menu.Item

interface IMenuAppPorops { }

const MenuApp: React.FC<IMenuAppPorops> = props => {
    const getMenuItem = (menuItem: IRouters) => {
        if (menuItem.childer) {
            return <SubMenu key={menuItem.id} title={menuItem.name}>
                {
                    menuItem.childer.map((menu => {
                        return <MenuItem key={menu.id} >
                        <Link to={menu.to}>{menu.name}</Link>
                    </MenuItem>
                    }))
                }
            </SubMenu>
        }
        return <MenuItem key={menuItem.id} >
            <Link to={menuItem.to}>{menuItem.name}</Link>
        </MenuItem>
    }
    return <Menu mode="inline" theme="dark">
        {
            routers.map((item) => (getMenuItem(item)))
        }
    </Menu>
}

export default MenuApp