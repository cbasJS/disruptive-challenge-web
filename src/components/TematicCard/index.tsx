/**
 * TODO: pass idCollection for redirect to tematic collection
 */
import { Link } from 'react-router-dom';

type Props = {
  imageSrc: string;
  name: string;
  totalImages: number;
  totalTextos: number;
  totalVideos: number;
  // idCollection
};
const TematicCard: React.FC<Props> = ({
  imageSrc,
  name,
  totalImages,
  totalTextos,
  totalVideos,
}) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full cursor-pointer overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
        <img
          alt={''}
          className="h-full w-full cursor-pointer object-cover object-center lg:h-full lg:w-full"
          src={imageSrc}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-xl text-gray-700">
            <Link
              // onClick={() => console.log('you clicked!')}
              to={'/tematic-collection'}
            >
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">Imagenes: +{totalImages}</p>
          <p className="mt-1 text-sm text-gray-500">Videos: +{totalVideos}</p>
          <p className="mt-1 text-sm text-gray-500">Textos: +{totalTextos}</p>
        </div>
      </div>
    </div>
  );
};

export default TematicCard;
