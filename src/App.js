import UserProfile from './components/user-profile/UserProfile'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {
   return (
      <div className="App">
         <UserRoutes />
         <AdminRoutes />
         <UserProfile />
      </div>
   )
}

export default App
