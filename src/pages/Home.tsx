import SearchInput from '../components/SearchInput/index.tsx';
import TematicList from '../components/TematicList/index.tsx';

const Home: React.FC = () => {
  return (
    <>
      <h1 className="mt-6 text-center text-4xl text-gray-900">
        My disruptive challange
      </h1>
      <SearchInput placeholder="Buscar tematica" />
      <TematicList />
    </>
  );
};

export default Home;
