import { Router } from 'express';
const router = Router();

import { loginVendorUser, getLoginVedorUser } from '../controllers/vendorlogin.controller';

router.route('/')
      .get(getLoginVedorUser)
      .post(loginVendorUser);
     


export default router;