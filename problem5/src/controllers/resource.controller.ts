import { Request, Response, NextFunction } from 'express';
import resourceService from '../services/resource.service';

class ResourceController {
  // Create a new resource
  async createResource(req: Request, res: Response, next: NextFunction) {
    try {
      const resource = await resourceService.createResource(req.body);
      res.status(201).json({
        success: true,
        data: resource
      });
    } catch (error) {
      next(error);
    }
  }

  // Get all resources with filters
  async getAllResources(req: Request, res: Response, next: NextFunction) {
    try {
      const filters = {
        category: req.query.category as string,
        isAvailable: req.query.isAvailable === 'true' ? true : 
                    req.query.isAvailable === 'false' ? false : undefined,
        minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
        maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined
      };
      
      const resources = await resourceService.getAllResources(filters);
      
      res.status(200).json({
        success: true,
        count: resources.length,
        data: resources
      });
    } catch (error) {
      next(error);
    }
  }

  // Get a single resource
  async getResourceById(req: Request, res: Response, next: NextFunction) {
    try {
      const resource = await resourceService.getResourceById(req.params.id);
      
      if (!resource) {
        return res.status(404).json({
          success: false,
          message: 'Resource not found'
        });
      }
      
      res.status(200).json({
        success: true,
        data: resource
      });
    } catch (error) {
      next(error);
    }
  }

  // Update a resource
  async updateResource(req: Request, res: Response, next: NextFunction) {
    try {
      const resource = await resourceService.updateResource(req.params.id, req.body);
      
      if (!resource) {
        return res.status(404).json({
          success: false,
          message: 'Resource not found'
        });
      }
      
      res.status(200).json({
        success: true,
        data: resource
      });
    } catch (error) {
      next(error);
    }
  }

  // Delete a resource
  async deleteResource(req: Request, res: Response, next: NextFunction) {
    try {
      const resource = await resourceService.deleteResource(req.params.id);
      
      if (!resource) {
        return res.status(404).json({
          success: false,
          message: 'Resource not found'
        });
      }
      
      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ResourceController();