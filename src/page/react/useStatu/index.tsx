import React, {
  useState
} from "react"
import {
  Button,
  Table
} from "antd"
import {
  IDataSource
} from "./interface"

const UseStatuCmp: React.FC<any> = props => {
  const [count, setCount] = useState<number>(0)
  const columns = [
    {
      title: "学号",
      dataIndex: "num"
    },
    {
      title: "名字",
      dataIndex: "name"
    },
    {
      title: "年龄",
      dataIndex: "age"
    },
    {
      title: "操作",
      dataIndex: "handle",
      render: (_: any, record: IDataSource) => <>
        <Button onClick={() => del(record)}>删除</Button>
      </>
    }
  ]
  const [dataSource, setDataSource] = useState<IDataSource[]>([
    {
      id: 1,
      num: "001",
      name: "张三",
      age: 18
    },
    {
      id: 2,
      name: "李四",
      num: "002",
      age: 24
    },
    {
      id: 3,
      name: "王二",
      num: "003",
      age: 20
    }
  ])
  const del = (record: IDataSource) => {
    const newDataSource = [...dataSource]
    const index = dataSource.findIndex(item => item.id === record.id)
    newDataSource.splice(index, 1)
    setDataSource([...newDataSource])
  }
  return <>
    <h1>使用 useStatu hooks</h1>
    <div>
      <span>{count}</span><br />
      <Button onClick={() => {
        const num = count + 1
        setCount(num)
      }}>加加</Button>&nbsp;
      <Button onClick={() => {
        const num = count - 1
        setCount(num)
      }}>减减</Button>&nbsp;
      <Button onClick={() => setCount(0)}>重置</Button>
    </div>
    <hr />
    <h3>表格利用useState hooks 实现删减</h3>
    <div>
      <Table rowKey="id" columns={columns} dataSource={dataSource} />
    </div>
    <div>
      <table style={{width: "100%"}}>
        <thead>
          <tr>
            {
              columns.map(col => (<th>{col.title}</th>))
            }
          </tr>
        </thead>
        <tbody>
            {
              dataSource.map((row) => <tr>{
                columns.map(col => {
                  const dataIndex = col.dataIndex
                  if (dataIndex === "handle") {
                    return <td><Button onClick={() => del(row)}>删除</Button></td>
                  }
                  else {
                    // @ts-ignore
                    return <td>{row[dataIndex]}</td>
                  }
                })
              }</tr>)
            }
        </tbody>
      </table>
    </div>
  </>
}

export default UseStatuCmp