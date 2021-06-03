import React, { useState } from "react"
import QRcode from "qrcode.react"
import { Input } from "antd"

const QRcodeCmp: React.FC<any> = props => {
  const [codeUrl, setCodeUrl] = useState<string>()
  const onSearch = (value: string) => {
    setCodeUrl(value)
  }
  return <>
    <Input.Search enterButton="生成二维码" onSearch={onSearch} />
    <div style={{padding: 32, textAlign: "center"}}>
    {
      codeUrl ? <QRcode
        value={codeUrl}
        size={200}
        fgColor="#1890ff"
      /> : null
    }
    </div>
  </>
}

export default QRcodeCmp