import { Div } from '@vkontakte/vkui'
import { Icon28MoonOutline } from '@vkontakte/icons';
import { Icon28SunOutline } from '@vkontakte/icons';
import './ThemeButton.css'
import { useAppDispatch, useAppSelector } from '../../redux-store/hooks';
import { toggleTheme } from '../../redux-store/reducers/appThemeReducer';


const ThemeButton = () => {

  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector(state => state.appTheme)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <Div className='main__themeButton' onClick={handleToggleTheme}>{currentTheme === 'light' ? <Icon28MoonOutline /> : <Icon28SunOutline />}</Div>
  )
}

export default ThemeButton