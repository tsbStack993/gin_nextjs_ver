// app/page.js
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/signup'); // Redirect root URL to signup
}
