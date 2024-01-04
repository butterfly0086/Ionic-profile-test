import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import Profile from '../database/profile';

const saveProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newProfile = new Profile({
      ...req.body,
    });

    const savedProfile = await newProfile.save();

    res.status(200).json(savedProfile);
  } catch (error) {
    next(error);
  }
}

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  try {
    const profile = await Profile.findById(id);

    if (!profile) throw createError(500, 'Something went wrong.');
    else res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
}

const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  try {
    const updatedProfile = await Profile.findByIdAndUpdate(id, { ...req.body });

    if (!updatedProfile) throw createError(500, 'Something went wrong.');
    else res.status(200).json(updatedProfile);
  } catch (error) {
    next(error);
  }
}

const removeProfile = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  try {
    const removeedProfile = await Profile.findByIdAndDelete(id);

    if (!removeedProfile) throw createError(500, 'Something went wrong.');
    else res.status(200).json(removeedProfile);
  } catch (error) {
    next(error);
  }
}

export default {
  saveProfile,
  updateProfile,
  getProfile,
  removeProfile,
};
