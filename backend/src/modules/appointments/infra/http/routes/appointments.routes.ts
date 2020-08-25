import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import Authenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../controllers/AppointmentsController';
import ProviderAppointmentController from '../controllers/ProviderAppointmesController';

const appointmentRouter = Router();
const appointmentsController = new AppointmentController();
const providerAppointmentsController = new ProviderAppointmentController();
appointmentRouter.use(Authenticated);

appointmentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);

appointmentRouter.get('/me', providerAppointmentsController.index);

export default appointmentRouter;
