// node doesnt execute TS, so is necesary to first parse the ts code to js code
// hence, tsnode exists which under the hood first parse the ts code to js code and the run it

//const express = require('express'); this is how we import something in node.js but actually in TS is necessary to use 'import'

import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();

app.use(json()); // parse all the response's body to json

app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
