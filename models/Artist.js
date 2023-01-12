import mongoose from 'mongoose'

export const ArtistSchema = new mongoose.Schema(
    {
        artistId: { type: Number, required: true },
        name: { type: String, required: true },
    }, 
    { timestamps: true }
)

const Artist = mongoose.model('Artist', ArtistSchema)
export default Artist