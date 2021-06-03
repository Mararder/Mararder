import React, { lazy, Suspense, useState } from 'react'
import { Button } from 'antd'

const TestLazy = lazy(() => import('./components/test-lazy'))

const LazyComponent: React.FC<any> = props => {
  const [visible, setVisible] = useState<boolean>()
  return <>
    <Button onClick={() => setVisible(true)}>测试懒加载</Button>
    <div>
      {
        visible ? <Suspense fallback={"加载中..."}>
        <TestLazy />
      </Suspense> : null
      }
    </div>
  </>
}

export default LazyComponent