import MainLayout from "@/layouts/MainLayout.tsx";
import {useGetBattlesuits} from "@/hooks/useGetBattlesuits.ts";
import CharacterCard from "@/components/cards/CharacterCard.tsx";

const Characters = () => {
  const {battlesuits, loading, error} = useGetBattlesuits();

  return (
    <MainLayout>
      <div className="relative w-full h-full pt-20">
        {loading && (
          <div className="flex justify-center items-center h-full">
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center h-full">
            <span className="text-lg text-red-500">Error: {error || "Something went wrong."}</span>
          </div>
        )}
        {!loading && !error && battlesuits && <CharacterCard characters={battlesuits}/>}
      </div>
    </MainLayout>
  );
};

export default Characters;
