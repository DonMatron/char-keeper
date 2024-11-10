import { defineStore, createPinia } from 'pinia'
const pinia = createPinia();

//const GoogleDrivePreviewLink = "https://drive.google.com/thumbnail?id=180eFQ9pYj42Ot_f8DflZ_7Sas4Zd0K6V";

interface CharacterInfo {
  name: string,
  image?: string,
  ac: number,
  initiative: number,
  proficiency: number,
  speed: number,
  darkvision: number,
  inspirations: number,
  currentHp: number,
  maxHp: number,
  tempHp: number
}

const character: CharacterInfo = {
  name: "Dark Urge",
  image: "https://preview.redd.it/wondering-who-made-this-dark-urge-artwork-v0-zqs9aiyjol6c1.png?width=1920&format=png&auto=webp&s=c710e5af0d76d9d89fd4115f8e001a025ec4bd97",
  //image: GoogleDrivePreviewLink,
  ac: 17,
  initiative: 4,
  proficiency: 2,
  speed: 6,
  darkvision: 20,
  inspirations: 3,
  currentHp: 999,
  maxHp: 999,
  tempHp: 0
};

export const useCharacterStore = defineStore({
  id: "character",
  state: () => character,
  actions: {
    actionName() {
      //do something
    }
  }
});

export default pinia;
