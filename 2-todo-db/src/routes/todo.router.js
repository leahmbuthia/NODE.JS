import { Router } from "express";

const todoRouter =Router();

todoRouter.get('/todos',getTodo)