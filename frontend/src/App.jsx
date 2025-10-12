import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage"
import{BrowserRouter as Router,Routes , Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={ <LoginPage/>} />
        <Route path='/signup'  element={ <SignupPage/> }/>
      </Routes>
     </Router>
    </>
  )
}

export default App
