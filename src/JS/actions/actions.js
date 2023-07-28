import { FILTRER_PAR_NOM } from "../constants/constant"

export const filterParNom = (nom) => {
    return {
        type : FILTRER_PAR_NOM,
        paylod : nom
    }
}
