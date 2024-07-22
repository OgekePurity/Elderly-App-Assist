declare module 'morgan' {
    import * as express from 'express';
  
    function morgan(format: string): express.RequestHandler;
    function morgan(format: string, options: morgan.Options): express.RequestHandler;
  
    namespace morgan {
      interface Options {
        skip?: (req: express.Request, res: express.Response) => boolean;
        stream?: NodeJS.WritableStream;
      }
    }
  
    export = morgan;
  }