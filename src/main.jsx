import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Profile from './Profile.jsx'
import UserCard from "./UserCard.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
		{/* <Profile /> */}
		<UserCard />
  </StrictMode>,
)
