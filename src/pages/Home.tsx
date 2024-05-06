// import SearchInput from '../components/SearchInput/index.tsx';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Spinner from '../components/Spinner/index.tsx';
import TematicList from '../components/TematicList/index.tsx';

const Home: React.FC = () => {
  const { data, error, isPending } = useQuery({
    queryFn: () => axios.get(`${process.env.DOMAIN_URL}/api/tematic`),
    queryKey: ['getTematics'],
    refetchInterval: 5000,
  });

  if (isPending) {
    return <Spinner />;
  }

  return (
    <>
      <h1 className="mt-6 text-center text-4xl text-gray-900">
        My disruptive challange
      </h1>
      {/* <SearchInput placeholder="Buscar tematica" /> */}
      {data && <TematicList data={data?.data.data} />}
      {error && (
        <p className="mt-6 text-center text-red-600">
          Hubo un error en el servidor, intente de nuevo
        </p>
      )}
    </>
  );
};

export default Home;
