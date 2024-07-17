import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formpage from './Pages/Formpage/Formpage';
import Sidebars from './Components/Sidebarcompo/Sidebar';
import { useEffect, useState } from 'react';
import Task from './Pages/Taskpage/Task';
import Home from './Pages/Homes/Home';
import Activity from './Pages/Activitypage/Activity';
import Users from './Pages/Userpage/Users';
import Notifications from './Pages/Notificationpage/Notifications';
import Settings from './Pages/Settingspage/Settings';
import Supports from './Pages/Supportpage/Supports';
import Downloads from './Pages/Downloadspage/Downloads';
import Gifts from './Pages/Giftspage/Gifts';
import Logout from './Pages/Logoutpage/Logout';
import Figmafile from './Pages/Figmapage/Figma';
import Homepage from './Pages/CmsHomepage/Homepage';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLogin') === 'true';
      setIsLogin(loggedIn);
    };

    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    setIsLogin(true);     //  localStorage mathi pass remove karta form dekhase
    localStorage.setItem('isLogin', 'true');
  };

  // const handleLogout = () => {
  //   setIsLogin(false);
  //   localStorage.removeItem('isLogin');
  // };

  return (
    <Router>
      {isLogin ? (
        <>
          <Sidebars />
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/task" element={<Task />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/user" element={<Users />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Supports />} />
            <Route path="/figmafiles" element={<Figmafile />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Formpage onLogin={handleLogin} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
