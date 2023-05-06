import { Button, ButtonGroup, Div } from '@vkontakte/vkui'
import { Icon28MoonOutline } from '@vkontakte/icons';
import { Icon28SunOutline } from '@vkontakte/icons';
import './ThemeButton.css'

interface IThemeButtonProps {
  toggleTheme: () => void,
  currentTheme: string
}

const ThemeButton = ({ toggleTheme, currentTheme }: IThemeButtonProps) => {

  return (
    <Div className='main__themeButton' onClick={toggleTheme}>{currentTheme === 'light' ? <Icon28MoonOutline /> : <Icon28SunOutline />}</Div>
  )
}

export default ThemeButton