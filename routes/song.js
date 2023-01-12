import express from 'express'
import { getAllSong, getByIdSong, addSong, deleteSong, updateSong } from '../controllers/songs.js' 
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getAllSong)
router.get('/:id', verifyToken, getByIdSong)
router.post('/', verifyToken, addSong)
router.put('/:id', verifyToken, updateSong)
router.delete('/:id', verifyToken, deleteSong)

export default router