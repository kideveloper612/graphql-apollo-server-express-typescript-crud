
import mongoose from 'mongoose';

function connectMongoDB(): void {

    mongoose
    .connect("mongodb://localhost:27017/users", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(err);
    });
}

async function disconnectMongoDB() {
  mongoose.disconnect();
}

export { connectMongoDB, disconnectMongoDB };
