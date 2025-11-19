import express from 'express';
import path from 'path';
//import passport from 'passport';
import cors from 'cors';
import { DotenvPlugin } from 'webpack';
const GoogleStrategy = require ('passport-google-oauth2').Statergy;
//dotenv.config()

const app = express();
app.use(express.json());
 
const port = 800;
app.use(cors({
  
}))