import Navbar from "../components/Navbar";

// app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <h1>เกี่ยวกับเรา</h1>
        <p>นี่คือหน้าข้อมูลเกี่ยวกับบริษัทของเรา</p>
        <Navbar />
      </div>
    </div>
  );
}
