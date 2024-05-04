import { tematics } from '../../utils/constants/index.ts';
import TematicCard from '../TematicCard/index.tsx';

const TematicList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {tematics.map((tematic) => (
            <TematicCard
              imageSrc={tematic.imageSrc}
              key={tematic.id}
              name={tematic.name}
              totalImages={tematic.totalImages}
              totalTextos={tematic.totalTextos}
              totalVideos={tematic.totalVideos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TematicList;
