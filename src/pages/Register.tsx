import { useMutation } from '@tanstack/react-query';
import { useLocalStorage } from '@uidotdev/usehooks';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm/index.tsx';
import Spinner from '../components/Spinner/index.tsx';

const Register: React.FC = () => {
  const [error, setError] = useState<string | undefined>();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (newUser) => {
      return axios.post(`${process.env.DOMAIN_URL}/api/user`, newUser);
    },
  });
  const [userLS] = useLocalStorage('user');

  const onSubmit: (mail: string, user: string, typeOfUser: string) => void = (
    mail,
    user,
    typeOfUser,
  ) => {
    mutation.mutate({
      mail,
      typeOfUser,
      userName: user,
    });
  };

  if (mutation.isSuccess) {
    alert('El usuario se ha creado correctamente!');
    navigate('/login');
  }

  useEffect(() => {
    if (mutation.isError) {
      setError(mutation.error.response.data.error);
    }
  }, [mutation]);

  useEffect(() => {
    if (userLS && userLS._id) {
      navigate('/');
    }
  }, [userLS, navigate]);

  if (mutation.isPending) {
    return <Spinner />;
  }

  return <RegisterForm error={error} onSubmit={onSubmit} />;
};

export default Register;
