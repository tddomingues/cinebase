import { useGetSeries } from "../../hooks/useGetSeries";

import SkeletonAbout from "../../components/SkeletonAbout/SkeletonAbout";

const MoreAboutSerie = () => {
  const { serieId } = useGetSeries();

  return (
    <SkeletonAbout type={serieId}/>
  );
};

export default MoreAboutSerie;
