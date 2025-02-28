import { Router } from 'express';
import resourceController from '../controllers/resource.controller';
import { validateResource } from '../middleware/validation.middleware';

const router = Router();

router.post('/', validateResource, resourceController.createResource);
router.get('/', resourceController.getAllResources);
router.get('/:id', resourceController.getResourceById);
router.put('/:id', validateResource, resourceController.updateResource);
router.delete('/:id', resourceController.deleteResource);

export default router;