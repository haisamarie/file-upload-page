import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebaseの設定情報を含むオブジェクト
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, // FirebaseのAPIキー
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, // 認証ドメイン
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, // プロジェクトID
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, // ストレージバケット
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, // メッセージング送信者ID
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID, // アプリID
}

// Firebaseアプリケーションの初期化
const app = initializeApp(firebaseConfig)

// Firebase認証オブジェクトの取得
export const auth = getAuth(app)

// Firestoreデータベースのインスタンスを取得
export const db = getFirestore(app)
