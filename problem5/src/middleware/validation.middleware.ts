import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateResource = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    name: Joi.string().trim().required().min(2).max(100),
    description: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().required().min(0),
    isAvailable: Joi.boolean().default(true)
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }
  
  next();
};