// Dev-only entry. Production builds prerender every route to static HTML
// (scripts/prerender.mjs) and ship no JavaScript at all.
import { createRoot } from 'react-dom/client'
import './styles.css'
import { routes } from './routes'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
const route = routes.find((r) => r.meta.path === path) ?? routes.find((r) => r.meta.path === '/404')!

document.title = route.meta.title
createRoot(document.getElementById('root')!).render(<route.Component />)
