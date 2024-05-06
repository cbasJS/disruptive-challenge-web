import { useMutation } from '@tanstack/react-query';
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
      return axios.post(`http://${process.env.DOMAIN_URL}/api/user`, newUser);
    },
  });

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
    alert('El usuario se a creado correctamente!');
    navigate('/login');
  }

  useEffect(() => {
    if (mutation.isError) {
      setError(mutation.error.response.data.error);
    }
  }, [mutation]);

  if (mutation.isPending) {
    return <Spinner />;
  }

  return <RegisterForm error={error} onSubmit={onSubmit} />;
};

export default Register;
