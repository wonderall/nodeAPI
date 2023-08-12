const express= require("express")
const {getProducts, getAProduct, addProduct, updateProduct, deleteProduct,} = require('../controllers/productController')
const router = express.Router()

//전체목록가져오기
router.get('/',getProducts)
//id로 품목 1개 가져오기
router.get('/:id',getAProduct)
//등록
router.post('/',addProduct)
// id로 품목 1개 수정
router.put('/:id',updateProduct)
//id로 품목 1개 삭제
router.delete('/:id',deleteProduct)

module.exports = router;