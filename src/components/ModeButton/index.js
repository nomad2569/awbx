import React from "react"
// Images 벡터 이미지기 때문에 겟츠비 이미지 컴포넌트 안써도 가능
import DayIcon from "images/daymode.svg"
import NightIcon from "images/nightmode.svg"
// Styles
import { ImgButton } from "./ModeButton.styles"

const ModeButton = ({ darkMode, setDarkMode }) => {
  return (
    <ImgButton
      src={darkMode ? NightIcon : DayIcon}
      alt="mode"
      onClick={() => setDarkMode(prev => !prev)}
    />
  )
}

export default ModeButton
