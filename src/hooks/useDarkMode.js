import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkmode] = useLocalStorage('dark-mode')

    useEffect(() => {
        if(darkMode === true){
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }},
    [darkMode])

    return [darkMode, setDarkmode]
}