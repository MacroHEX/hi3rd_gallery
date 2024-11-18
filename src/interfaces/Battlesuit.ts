import {Character} from "@/interfaces/Character.ts";

export interface Battlesuit {
  id: number;
  valkyrie_id: number;
  battlesuit_name: string;
  avatar_url: string;
  hero_image_url: string;
  organization: string;
  battlesuit_details: string;
  character: Character;
}