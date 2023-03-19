import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get } from "firebase/database";

dotenv.config();

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const phrasesRef = ref(database, 'phrases');
// const snapshot = await get(phrasesRef)

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getData(): Promise<any> {
    try {
      const snapshot = await get(phrasesRef)
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
      return snapshot.val()
    } catch(error) {
      console.error(error);
    }
  }
}
