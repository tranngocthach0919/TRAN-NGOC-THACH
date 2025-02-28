import { IResource } from '../models/resource.model';
import resourceRepository, { FilterQuery } from '../repositories/resource.repository';

class ResourceService {
  // Create a new resource
  async createResource(resourceData: Partial<IResource>): Promise<IResource> {
    return await resourceRepository.create(resourceData);
  }

  // Get all resources with optional filters
  async getAllResources(filters: FilterQuery = {}): Promise<IResource[]> {
    return await resourceRepository.findAllWithFilters(filters);
  }

  // Get resource by ID
  async getResourceById(id: string): Promise<IResource | null> {
    return await resourceRepository.findById(id);
  }

  // Update resource
  async updateResource(id: string, updates: Partial<IResource>): Promise<IResource | null> {
    return await resourceRepository.update(id, updates);
  }

  // Delete resource
  async deleteResource(id: string): Promise<IResource | null> {
    return await resourceRepository.delete(id);
  }
}

export default new ResourceService();