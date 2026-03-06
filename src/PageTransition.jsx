import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function PageTransition({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeIn')
  const location = useLocation()

  useEffect(() => {
    // 使用 setTimeout 将状态更新推迟到下一个事件循环
    const timer = setTimeout(() => {
      setTransitionStage('fadeOut')
    }, 0)

    return () => clearTimeout(timer)
  }, [location])

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timer = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage('fadeIn')
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [transitionStage, children])

  return (
    <div className={`page-transition ${transitionStage}`}>
      {displayChildren}
    </div>
  )
}

export default PageTransition
