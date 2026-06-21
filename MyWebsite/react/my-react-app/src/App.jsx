import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Paragraph from './Paragraph.jsx';

function App() {
 
  return(
    <>
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* 2. TANTANGAN: Panggil komponen Header yang sudah diimpor tadi di sini */}
      <Header />

      {/* Ini adalah form input utama kita sementara */}
      <div style={{ marginTop: '20px' }}>
        <input type="text" placeholder="Ketik tugas baru..." />
        <button>Tambah</button>
      </div>

    </div>
    
    <Footer></Footer>
    </>
  );
 


}

export default App
