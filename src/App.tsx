import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateTematicModal from './components/CreateTematicModal/index.tsx';
import Header from './components/Header/index.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import NotFound from './pages/NotFound.tsx';
import Register from './pages/Register.tsx';
import TematicCollection from './pages/TematicCollection.tsx';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<NotFound />} path="*" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<TematicCollection />} path="/tematic-collection" />
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export const WrappedApp: React.FC = () => {
  const [isTematicModalVisible, setIsTematicModalVisible] = useState(false);

  const setTematicModalVisible: (status: boolean) => void = (status) => {
    setIsTematicModalVisible(status);
  };

  return (
    <BrowserRouter>
      <Header openCreateTematicModal={setTematicModalVisible} />
      <App />
      <CreateTematicModal
        isVisible={isTematicModalVisible}
        setOpen={setTematicModalVisible}
      />
    </BrowserRouter>
  );
};

export default App;
