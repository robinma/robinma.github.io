/**
 * @file krpano method
 */

class krpano {
    constructor(idTarget) {
        if (typeof idTarget === 'string') {
            this.getKrpanoTarget(idTarget);
        } else {
            this.krpano = idTarget;
        }
    }

    getKrpanoTarget(target) {
        this.krpano = document.getElementById(target);
    }

    /**
     * 获取fov
     * 
     */
    getLookAt() {
        let krpano = this.krpano;
        let info = {};
        function getLookAkInfo(){
            let mouse_at_x = krpano.get('mouse.x');
            let mouse_at_y = krpano.get('mouse.y');
            let mouse_at_h = krpano.get('mouseath');
            let mouse_at_v  =krpano.get('mouseatv');
            let fov = krpano.get('view.fov');
            let info = {mouse_x: mouse_at_x, mouse_y: mouse_at_y, mouse_ath: mouse_at_h, mouse_atv: mouse_at_v, fov};
            
            return info;
        }

        if(krpano && krpano.get) {
           let stp = krpano.call("screentosphere(mouse.x, mouse.y, mouseath, mouseatv);");
           info = getLookAkInfo();
        }
        return info;
    }

    screentosphere() {
        let krpano = this.krpano;
        
    }


    

}

export default krpano;