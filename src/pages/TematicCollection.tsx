import SearchInput from '../components/SearchInput/index.tsx';
import TematicList from '../components/TematicList/index.tsx';

const TematicCollection = () => {
  return (
    <>
      <h1 className="mt-6 text-center text-4xl text-gray-900">Tematic name</h1>
      <SearchInput placeholder="Buscar contenido" />
      <TematicList />
    </>
  );
};

export default TematicCollection;
