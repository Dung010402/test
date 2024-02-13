import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';

import Dashboard from './Dashboadrd';
import User from './User';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/users/:id" element={<User />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
