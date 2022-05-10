import DateRangePicker from './components/UI/date-picker/DatePicker'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {
   return (
      <div className="App">
         <UserRoutes />
         <AdminRoutes />
         <DateRangePicker />
      </div>
   )
}

export default App
