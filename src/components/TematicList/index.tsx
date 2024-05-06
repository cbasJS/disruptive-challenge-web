import TematicCard from '../TematicCard/index.tsx';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
};

const TematicList: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((tematic) => (
            <TematicCard
              imageSrc={tematic.thumbnailImage}
              key={tematic._id}
              name={tematic.name}
              // totalImages={tematic.totalImages}
              // totalTextos={tematic.totalTextos}
              // totalVideos={tematic.totalVideos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TematicList;
