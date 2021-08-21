import { Socket } from "socket.io";

const ioMiddleware = (socket: Socket, next: any) => {
  try {
    // do stuff
    next();
  } catch (error) {
    next(error);
  }
};

const socketMiddleware = async ([event, ...args]: Array<any>, next: any) => {
  try {
    // do stuff
    console.log(event, args);
    next();
  } catch (error) {
    next(error);
  }
};

const socketError = (error: Error) => {
  console.log(error);
};

export { ioMiddleware, socketMiddleware, socketError };
