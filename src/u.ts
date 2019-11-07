
import { connectMongoDB } from './main/mongoose';
import { runServer } from './main/apolloExpress';

connectMongoDB();
runServer();
