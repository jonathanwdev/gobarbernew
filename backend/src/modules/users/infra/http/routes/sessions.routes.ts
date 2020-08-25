import { Router } from 'express';
import { Segments, celebrate, Joi } from 'celebrate';

import SessionsController from '../controllers/SessionsController';

const sessionRouter = Router();
const sessionController = new SessionsController();

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionController.create,
);

export default sessionRouter;
