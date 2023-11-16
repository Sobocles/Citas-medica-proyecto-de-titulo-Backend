import {Router} from 'express'
import { createOrder, receiveWebhook } from '../controllers/mercadoPago';
import { getAllFacturas, obtenerFacturaPorId, eliminarFactura } from '../controllers/facturas';



const router = Router()

router.post('/create-order', createOrder )

router.get('/success',(req, res) => res.send('success'))

router.get('/factura', getAllFacturas

 );

 router.delete('/factura/:id', eliminarFactura);

 router.get('/factura/:id', obtenerFacturaPorId

 );




router.get('/failure',(req, res) => res.send('failure'))

router.get('/pending',(req, res) => res.send('pending'))

router.post('/webhook', receiveWebhook )

export default router;