// app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/landing-page'); // atau ke path lain sesuai kebutuhan
  return null;
}
