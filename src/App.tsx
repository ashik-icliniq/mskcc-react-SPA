import Home from 'components/Home'
import SideNav from 'components/SideNav'
import './App.css'
import Nav from './components/Nav'
import { Routes, Route, useLocation} from "react-router-dom";
import Cases from 'components/Cases'
import Messages from 'components/Messages';
import Account from 'components/Account';

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <Nav />
      {location.pathname !== '/cases/view-cases' && location.pathname !== '/messages/view-messages' && <SideNav /> }
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/home/drafts"
            element={<Home />}
          />
        </Route>
        <Route path="/cases" element={<Cases />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </div>
  )
}

export default App
