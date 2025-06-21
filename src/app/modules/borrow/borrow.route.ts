import express from "express";
import { borrowBook, getBorrowSummary } from "./borrow.controller";

const router = express.Router();
const BorrowRoutes = router;

router.post('/', borrowBook);
router.get('/', getBorrowSummary);

export default BorrowRoutes;