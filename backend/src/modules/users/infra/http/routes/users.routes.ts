import { Router } from 'express';
import { Segments, celebrate, Joi } from 'celebrate';

import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersControllers';
import UserAvatarController from '../controllers/UserAvatarController';

import Authenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();
const userController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);

userRouter.patch(
  '/avatar',
  Authenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default userRouter;
