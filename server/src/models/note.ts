import { InferSchemaType, model, Schema } from "mongoose";

const NoteSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please add a title"],
        timestamp: true,
    }
}, {timestamps: true});

type Note = InferSchemaType<typeof NoteSchema>;

export default model<Note>("Note", NoteSchema);