import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ScoreBoard from './components/ScoreBoard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScoreBoard />
  </StrictMode>,
)
