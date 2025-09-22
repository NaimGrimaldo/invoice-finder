import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import ThemeRegistry from './theme/ThemeRegistry.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeRegistry>
    <App />
  </ThemeRegistry>
)
