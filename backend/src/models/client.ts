import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    name: String,
    position: String,
    office: String,
    salary: Number
});

interface IClient extends Document {
    name: string;
    position: string;
    office: string;
    salary: number;
}

export default model<IClient>('Client', schema);