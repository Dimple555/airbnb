import { useEffect, useState } from "react";
import throttle from "lodash/throttle"; // 引入 throttle

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // 使用 throttle 包裹 scroll 处理函数，限制为每 100 毫秒触发一次
    const handleScroll = throttle(() => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    // 组件卸载时移除监听和 throttle 的定时器
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // 取消 throttle 内部的 pending 调用
    };
  }, []);

  return { scrollX, scrollY };
}