import {useEffect, useState} from "react";
import {supabase} from "@/util/supabase.ts";
import {Battlesuit} from "@/interfaces/Battlesuit.ts";
import {toast} from "sonner";

export const useGetBattlesuits = () => {
  const [battlesuits, setBattlesuits] = useState<Battlesuit[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBattlesuits = async (): Promise<void> => {
    try {
      const {data: battlesuits, error} = await supabase
        .from("battlesuit")
        .select(`
          *,
          character (
            *
          )
        `);

      if (error) {
        toast.error(error.message)
      }

      setBattlesuits(battlesuits as Battlesuit[]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBattlesuits().then();
  }, []);

  return {battlesuits, loading, error};
};