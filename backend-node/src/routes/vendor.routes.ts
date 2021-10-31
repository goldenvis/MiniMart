import { Router } from 'express';
const router = Router();

import { getVendorItems, createVendorItems, getVendorItem, deleteVendorItem, updateVendorItem } from '../controllers/vendoritem.controller';

router.route('/')
      .get(getVendorItems)
      .post(createVendorItems);


router.route('/:id')
      .get(getVendorItem)
      .delete(deleteVendorItem)
      .put(updateVendorItem);


export default router;