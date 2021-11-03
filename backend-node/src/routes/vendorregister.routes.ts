import { Router } from 'express';
const router = Router();

import { getVendorUsers, registerVendorUser, getVendorUser, deleteVendorUser, updateVendorUser } from '../controllers/vendorregister.controller';

router.route('/')
      .get(getVendorUsers)
      .post(registerVendorUser);


router.route('/:id')
      .get(getVendorUser)
      .delete(deleteVendorUser)
      .put(updateVendorUser);


export default router;