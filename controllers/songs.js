import Song from "../models/Song.js"

export const getAllSong = async (req, res) => {
    try {
        const data = await Song.find()
        if (data.length !== 0)
            res.status(200).json(data)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getByIdSong = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Song.findById(id)
        if (data)
            res.status(200).json(data)
        else
            res.status(404).json({ error: 'resource not found' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addSong = async (req, res) => {
    try {
        const { songId, tittle, albumName } = req.body
        const songInfo = await Song.create({
            songId,
            tittle,
            albumName
        })
        const savedSong = await songInfo.save()
        res.status(201).json({ id: savedSong._id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteSong = async (req, res) => {
    try {
        await Song.deleteOne({ 
            songId: req.params.songId, 
            _id: req.params.id 
        })
        res.status(204).send()
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const updateSong = async (req, res) => {
    try {
        const filter = { 
            songId: req.params.songId, 
            _id: req.params.id 
        }
        const { songId, tittle, albumName } = req.body
        const update = { 
            songId,
            tittle,
            albumName
        }

        await Song.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}