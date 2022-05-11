import Profile from './components/user-profile/Profile'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {
   return (
      <div className="App">
         <UserRoutes />
         <AdminRoutes />
         <Profile />
      </div>
   )
}

export default App
