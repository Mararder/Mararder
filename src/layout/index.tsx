import React from "react";
import { Layout, Spin } from "antd";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import Menu from "../page/menu"
import routers from "../router/routers";
import "./index.css";

const { Sider, Content } = Layout;

const LayoutComponent: React.FC<any> = (props) => {
    const renderRoutes = (routes = routers): any => {
        return routes.map(({ id, path, component, exact, childer }) => {
            const Cmp = Loadable({
                loader: () => import(`../${component}`),
                loading: () => <Spin />,
                delay: 300,
            });
            return childer
                ? renderRoutes(childer)
                : <Route key={id} path={path} exact={exact} component={() => <Cmp />} />
        })
    }
    return (
        <BrowserRouter>
            <Layout className="layout-wrapper">
                <Sider>
                    <div style={{
                        padding: "45px 0",
                        color: "rgba(0,0,0,1)",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 46,
                        fontFamily: "inherit",
                        fontStyle: "italic",
                        // textShadow: "#fff 1px 0, #fff -1px 0, #fff 1px -1px, #fff -1px 1px"
                        textShadow: "#fff -2px 2px"
                    }}>
                        HOOKS
                    </div>
                    <Menu />
                </Sider>
                <Layout>
                    <Content style={{ padding: 20 }}>
                        <Switch>
                            {renderRoutes()}
                            <Redirect exact to="/home" from='/' />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    )
}

export default LayoutComponent
