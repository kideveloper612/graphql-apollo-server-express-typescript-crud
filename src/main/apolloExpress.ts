
import express from 'express';
import errorhandler from 'errorhandler';
import http from 'http';
import cookieParser from 'cookie-parser';
import { ApolloServer, ApolloServerExpressConfig, ServerRegistration } from 'apollo-server-express';
import { userSchema } from '../graphql/schema';
import { MongooseDataloaderFactory } from 'graphql-dataloader-mongoose';

function runServer() {
  const app = express();
  const port = 3000;

  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
  }

  app.use(cookieParser());

  applyApollo(app);

  // create server
  const server = http.createServer(app);

  // start server
  server.listen(port, () => {
    console.log(`express server is listening http://localhost:${port}/graphql`);
  });
}

function applyApollo(app: any) {
  // applly apollo confing to express app
  const apolloConfig: ApolloServerExpressConfig = {
    schema: userSchema,
    context: async ctx => {
      const dataloaderFactory = new MongooseDataloaderFactory();
      return { ...ctx, dataloaderFactory };
    },
    formatError: error => {
      console.log(`[Graphql ERROR] ${error}`);
      return error;
    },
  };

  const apolloRegistration: ServerRegistration = {
    app,
    path: '/graphql',
    cors: true,
    bodyParserConfig: true,
  };

  const apollo = new ApolloServer(apolloConfig);
  apollo.applyMiddleware(apolloRegistration);
}

export { runServer };
