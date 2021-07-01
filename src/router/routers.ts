import React from "react"
export interface IRouters {
    id: string
    name: string
    to: string
    path: string
    component?: string
    exact: boolean
    icon?: React.ReactNode
    childer?: IRouters[]    
}
const routers: IRouters[] = [
    {
        id: "1",
        name: "首页",
        to: "/home",
        path: "/home",
        component: "page/home",
        exact: true  
    },
    {
        id: "2",
        name: "ES6",
        to: "/es6",
        path: "/es6",
        component: "page/es6",
        exact: true,
        childer: [
            {
                id: "2-1",
                name: "声明变量",
                to: "/es6/decareVariables",
                path: "/es6/decareVariables",
                component: "page/es6/decare-variables",
                exact: true
            },
            {
                id: "2-2",
                name: "map用法",
                to: "/es6/map",
                path: "/es6/map",
                component: "page/es6/map",
                exact: true
            },
            {
                id: "2-3",
                name: "set用法",
                to: "/es6/set",
                path: "/es6/set",
                component: "page/es6/set",
                exact: true
            },
            {
                id: "2-4",
                name: "promise用法",
                to: "/es6/promise",
                path: "/es6/promise",
                component: "page/es6/promise",
                exact: true
            },
            {
                id: "2-5",
                name: "Array数组用法",
                to: "/es6/array",
                path: "/es6/array",
                component: "page/es6/array",
                exact: true
            }
        ]  
    },
    {
        id: "3",
        name: "React",
        to: "/react",
        path: "/react",
        component: "page/react",
        exact: true,
        childer: [
            {
                id: "3-1",
                name: "Statu hook",
                to: "/react/hooks/useStatu",
                path: "/react/hooks/useStatu",
                component: "page/react/useStatu",
                exact: true  
            },
            {
                id: "3-2",
                name: "Effect hook",
                to: "/react/hooks/useEffect",
                path: "/react/hooks/useEffect",
                component: "page/react/useEffect",
                exact: true  
            }, 
            {
                id: "3-3",
                name: "qrcode 二维码",
                to: "/react/qrcode",
                path: "/react/qrcode",
                component: "page/react/qrcode",
                exact: true  
            }, 
            {
                id: "3-4",
                name: "自定义 Hook",
                to: "/react/hooks/myHook",
                path: "/react/hooks/myHook",
                component: "page/react/myHook",
                exact: true   
            },   
            {
                id: "3-5",
                name: "小游戏",
                to: "/react/hooks/play",
                path: "/react/hooks/play",
                component: "page/react/play",
                exact: true  
            },
            {
                id: "3-6",
                name: "懒加载",
                to: "/react/lazy",
                path: "/react/lazy",
                component: "page/react/lazy",
                exact: true  
            }
        ] 
    },
    {
        id: "4",
        name: "mathjax数学公式工具",
        to: "/mathjax",
        path: "/mathjax",
        component: "page/math-jax",
        exact: true  
    }
]

export default routers