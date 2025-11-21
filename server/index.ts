import express from 'express';
import path from 'path';
//import passport from 'passport';
//import session from 'expess-session'
import dotenv from 'dotenv';
import cors from 'cors';
import { parseBuildCommand, parseJsonSourceFileConfigFileContent } from 'typescript';
import { profile } from 'console';

const GoogleStrategy = require ('passport-google-oauth2').Statergy;
dotenv.config()

const app = express();
app.use(express.json());
 
const port = 800;
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
}));
app.options('*', cors());
app.use(express.static(path.join(__dirname, '..', 'dist')));

/*
app.use(passport.intialize());
app.use(passport.session());
app.use(express.json())

google Oauth Strategy
parseJsonSourceFileConfigFileContent.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.Google_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:8000/auth/google/callback'
}, async (accessToken, refrshToken, profile, done)
=>{
  try{
    let user =  await 
  }
}
))
    
passport.serializeUser
try{
((user: any, done)=>{
  done(null, user.id);
});

passport.deserializeUser(async(id: any, done) =>{
const user = await prisma.user.findeUnique({ where: {id},
});
done(null, user);
} catch (error ){
 done(error, null);
 }
}))
*/