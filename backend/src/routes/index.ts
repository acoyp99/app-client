import {Router} from 'express';
const router = Router();

import {createClient, getClients, getClient, deleteClient, updateClient} from '../controllers/client.controller'
import multer from '../libs/multer'

router.route('/clients')
    .post(multer.single('image'), createClient)
    .get(getClients)

router.route('/clients/:id')
    .get(getClient)
    .delete(deleteClient)
    .put(updateClient)

export default router;