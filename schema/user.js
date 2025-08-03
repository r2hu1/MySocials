import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    max: 4000,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  youtube: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  github: {
    type: String,
  },
  snapchat: {
    type: String,
  },
  twitter: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  threads: {
    type: String,
  },
  reddit: {
    type: String,
  },
  stackoverflow: {
    type: String,
  },
  leetcode: {
    type: String,
  },
  codeforces: {
    type: String,
  },
  hackerrank: {
    type: String,
  },
  codechef: {
    type: String,
  },
  geeksForGeeks: {
    type: String,
  },
  twitch: {
    type: String,
  },
  soundcloud: {
    type: String,
  },
  spotify: {
    type: String,
  },
  applemusic: {
    type: String,
  },
  discord: {
    type: String,
  },
  telegram: {
    type: String,
  },
  whatsapp: {
    type: String,
  },
  skype: {
    type: String,
  },
  amazon: {
    type: String,
  },
  shopify: {
    type: String,
  },
  kofi: {
    type: String,
  },
  buyMeACoffee: {
    type: String,
  },
  patreon: {
    type: String,
  },
  website: {
    type: String,
  },
  blog: {
    type: String,
  },
  phone: {
    type: Number,
  },
  accessKey: { type: String, default: "" }

});
