import { BrowserRouter, Routes, Route } from "react-router"

// Context
import { ThemeProvider } from "@/context"

// Pages
import { PageLogin } from "@/pages"

function App() {

  return (
    <ThemeProvider
      defaultTheme="system"
      storageKey="app-theme"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <PageLogin /> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
