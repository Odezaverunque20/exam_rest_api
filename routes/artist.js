import express from 'express'
import { getAllArtist, getByIdArtist, addArtist, deleteArtist, updateArtist } from '../controllers/artists.js' 
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getAllArtist)
router.get('/:id', verifyToken, getByIdArtist)
router.post('/', verifyToken, addArtist)
router.put('/:id', verifyToken, updateArtist)
router.delete('/:id', verifyToken, deleteArtist)

export default router