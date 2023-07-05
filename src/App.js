import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import Posts from './pages/Posts';
import Form from './useReducer/Form';
import PostsReducer from './useReducer/PostsReducer';
import TasksApp from './useReducer/tasks/TasksApp';
import ParentComponent from './context/ParentComponent';
import { UsersContext } from './context/context';
import ThemeApp from './context/theme/ThemeApp';

// nested routes

// GET, POST, PUT, DELETE
// CRUD - create, read, update, delete
function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <UsersContext.Provider value={{ user: 'Egzon' }}>
        <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Product />} />
              <Route path="/products/:productId" element={<SingleProduct />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard user={user} />
                  </ProtectedRoute>
                }
              />
              <Route path="/posts" element={<Posts />} />
              <Route path="/reducer" element={<Form />} />
              <Route path="/reducer/posts" element={<PostsReducer />} />
              <Route path="/reducer/tasks" element={<TasksApp />} />
              <Route path="/prop-drilling" element={<ParentComponent />} />
              <Route path="/context/theme" element={<ThemeApp />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
// Krijoni nje page te re SinglePost qe ju gjeneron content ne baze te id-se qe vendoset si parameter ne url
// Ne faqen posts, secili post le ta kete nje Link qe dergon ne /posts/id ku id ndryshon varesisht prej postit qe klikojme
