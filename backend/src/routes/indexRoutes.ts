import {Router} from 'express';
import {indexController} from '../controllers/indexController';
import { usuariosController } from '../controllers/usuariosController';


class IndexRoutes{
    public router:Router=Router();
    constructor(){
        this.config();

    }

    config():void{
        this.router.get('/',indexController.index);
        //this.router.get('/usuarios',usuariosController.index);
    }
}
const indexRoutes=new IndexRoutes();
export default indexRoutes.router;