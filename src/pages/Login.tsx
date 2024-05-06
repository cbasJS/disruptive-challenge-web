import { skipToken, useQuery } from '@tanstack/react-query';
import { useLocalStorage } from '@uidotdev/usehooks';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm/index.tsx';
import Spinner from '../components/Spinner/index.tsx';

const Login: React.FC = () => {
  const [userData, setUserData] = useState<{
    mail: string;
    user: string;
  } | null>(null);
  const [fetchErrorMessage, setFetchErrorMessage] = useState('');
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();
  const getUserResponse = () => {
    return axios
      .get(
        `${process.env.DOMAIN_URL}/api/user?userName=${userData.user}&mail=${userData.mail}`,
      )
      .then((res) => res.data);
  };

  const { data, error, isPending } = useQuery({
    queryFn: () => (userData ? getUserResponse() : skipToken),
    queryKey: ['getUser', userData],
  });

  const onSubmit: (user: string, mail: string) => void = (user, mail) => {
    setUserData({ mail, user });
  };

  useEffect(() => {
    if (data) {
      if (data.status === 'ok' && data.data === null) {
        setFetchErrorMessage(data.message);
      }

      if (data.status === 'ok' && data.data !== null) {
        setUser(data.data);
        navigate('/');
      }
    }
    if (error) {
      alert('Ha ocurrido un error inesperado!');
    }
  }, [data, user, setUser, error, navigate]);

  useEffect(() => {
    if (user && user._id) {
      navigate('/');
    }
  }, [user, navigate]);

  if (isPending) {
    return <Spinner />;
  }

  return (
    <LoginForm fetchErrorMessage={fetchErrorMessage} onSubmit={onSubmit} />
  );
};

export default Login;
