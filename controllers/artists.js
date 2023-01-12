import Artist from "../models/Artist.js"

export const getAllArtist = async (req, res) => {
    try {
        const data = await Artist.find()
        if (data.length !== 0)
            res.status(200).json(data)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getByIdArtist = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Artist.findById(id)
        if (data)
            res.status(200).json(data)
        else
            res.status(404).json({ error: 'resource not found' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addArtist = async (req, res) => {
    try {
        const { artistId, name } = req.body
        const artistInfo = await Artist.create({
            artistId,
            name
        })
        const savedArtist = await artistInfo.save()
        res.status(201).json({ id: savedArtist._id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteArtist = async (req, res) => {
    try {
        await Artist.deleteOne({ 
            artistId: req.params.artistId, 
            _id: req.params.id 
        })
        res.status(204).send()
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const updateArtist = async (req, res) => {
    try {
        const filter = { 
            artistId: req.params.artistId, 
            _id: req.params.id 
        }
        const { artistId, name } = req.body
        const update = { 
            artistId,
            name
        }

        await Artist.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}