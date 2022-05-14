// import Admin from './components/admin-application/AdminApplication'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {
   return (
      <div className="App">
         <UserRoutes />
         <AdminRoutes />
         {/* <Admin /> */}
      </div>
   )
}

export default App
