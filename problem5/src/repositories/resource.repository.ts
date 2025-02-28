import { Model } from 'mongoose';
import Resource, { IResource } from '../models/resource.model';
import { BaseRepository } from './base.repository';

export interface FilterQuery {
  category?: string;
  isAvailable?: boolean;
  minPrice?: number;
  maxPrice?: number;
}

export class ResourceRepository extends BaseRepository<IResource> {
  constructor(model: Model<IResource>) {
    super(model);
  }

  async findAllWithFilters(filters: FilterQuery = {}): Promise<IResource[]> {
    const query: any = {};
    
    if (filters.category) {
      query.category = filters.category;
    }
    
    if (filters.isAvailable !== undefined) {
      query.isAvailable = filters.isAvailable;
    }
    
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      query.price = {};
      
      if (filters.minPrice !== undefined) {
        query.price.$gte = filters.minPrice;
      }
      
      if (filters.maxPrice !== undefined) {
        query.price.$lte = filters.maxPrice;
      }
    }
    
    return await this.findAll(query);
  }
}

export default new ResourceRepository(Resource);
