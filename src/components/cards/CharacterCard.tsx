import {Battlesuit} from "@/interfaces/Battlesuit.ts";

interface Props {
  characters: Battlesuit[];
}

const CharacterCard = ({characters}: Props) => {
  return (
    <section className='px-2 sm:px-10 py-24 sm:py-6'>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {characters.map((character =>
            <div key={character.id}>
              <img src={character.avatar_url} alt={character.battlesuit_name}
                   className='shadow-xl
                    w-20 sm:w-full
                    grayscale cursor-pointer
                    active:scale-100 active:brightness-105
                    hover:grayscale-0 hover:scale-105 inline-block transition-all'/>
            </div>
        ))}
      </div>
    </section>
  );
};

export default CharacterCard;