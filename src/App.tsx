import { ThemeProvider } from '@/lib/theme/theme-provider'
import { Calculator } from '@/pages/Calculator'

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Calculator />
    </ThemeProvider>
  )
}

export default App
