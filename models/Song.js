import mongoose from 'mongoose'

export const SongSchema = new mongoose.Schema(
    {
        songId: { type: Number, required: true },
        tittle: { type: String, required: true },
        albumName: { type: String, required: true },
    }, 
    { timestamps: true }
)

const Song = mongoose.model('Song', SongSchema)
export default Song