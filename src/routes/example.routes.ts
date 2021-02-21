import {Router, Request, Response} from 'express';

const exampleRouter = Router();

exampleRouter.get('/', async (request: Request, response: Response) =>
  response.json({message: 'Hello!'}),
);

export default exampleRouter;
