import { szenvedoMondatok } from "./angol.js";

class Model{

    #cim
    #sugo
    #mondatok
    #aktMondatIndex
    #pont = 0
    constructor(){
        this.#cim = szenvedoMondatok[0];
        this.#sugo = szenvedoMondatok[1];
        this.#mondatok = [];
        for (let index = 2; index < szenvedoMondatok.length; index++) {
            const jelenlegimondat = szenvedoMondatok[index]
            this.#mondatok.push({
                magyar: jelenlegimondat.magyar,
                mondat: jelenlegimondat.mondat,
                alap: jelenlegimondat.alap,
                helyes: jelenlegimondat.valasztas[0]

            })
            
            
        }
        this.#aktMondatIndex = 0;
    }

    get cim()
    {
        return this.#cim;
    }

    get sugo()
    {
        return this.#sugo;
    }

    get aktMondat() {
        return this.#mondatok[this.#aktMondatIndex];
    }
    pontotSzerez() {
        this.#pont += 1;
    }

    get aktPontszam() {
        return this.#pont;
    }
    kovetkezoMondat() {
        this.#aktMondatIndex = (this.#aktMondatIndex + 1) % this.#mondatok.length;
    }


}
export default Model