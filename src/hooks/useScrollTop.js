import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export default function useScrollTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  },[location.pathname])//location.pathname:监听路径有没有发送改变
}