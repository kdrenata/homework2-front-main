import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {selectAppTheme} from "./themeSelector";
import {changeThemeId} from "./bll/themeReducer";
import {saveState} from "../hw06/localStorage/localStorage";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useSelector(selectAppTheme)
    const dispatch = useDispatch()


    const change = (themeId: number) => { // дописать функцию
        dispatch(changeThemeId(themeId))
        saveState('App-Theme-Id', themeId)
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div  id={'hw12'} className={s.hw12}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={`${s2.hw} ${s.selectWrapper}`}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    // сделать переключение тем
                    options={themes}
                    onChangeOption={change}
                    value={themeId}
                />
            </div>
        </div>
    )
}

export default HW12
