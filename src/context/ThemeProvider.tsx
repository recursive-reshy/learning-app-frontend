import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: ( theme: Theme ) => void
}

const ThemeProviderContext = createContext< ThemeProviderState >(
  { theme: 'system',
    setTheme: () => null
  } as ThemeProviderState 
)

const useTheme = () => {
  const context = useContext< ThemeProviderState >( ThemeProviderContext )
  if( !context ) {
    throw new Error( 'useTheme must be used within a ThemeProvider' )
  }

  return context
}

const ThemeProvider = ( {
  defaultTheme = 'system',
  storageKey = 'app-theme',
  children,
  ...props
}: ThemeProviderProps ) => {
  const [ theme, setTheme ] = useState< Theme >( () => localStorage.getItem( storageKey ) as Theme || defaultTheme )

  useEffect( () => {
    const root = window.document.documentElement

    root.classList.remove( 'light', 'dark' )

    if( theme === 'system' ) {
      root.classList.add(
        window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? 
        'dark'
      : 
        'light'
      )

      return
    }

    root.classList.add( theme )
  }, [ theme ] )

  return (
    <ThemeProviderContext.Provider
      value={ { 
        theme,
        setTheme: ( theme ) => {
          localStorage.setItem( storageKey, theme )
          setTheme( theme )
        }
      } }
      { ...props }
    >
      { children }
    </ThemeProviderContext.Provider>
  )
}

export default ThemeProvider
export { useTheme }