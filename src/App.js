import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper gambar">
      <div className="wrapper">
        <div className="flex-judul">
          <div className="judul">
            <h1 style={{ color: 'white' }}>Sekolah</h1>
            <h1 class="unggul">Unggul</h1>
          </div>
        </div>
        <div className="wrap-description">
          <div className="description">
            <p><b>Lorem Ipsum</b> is simply dummy text of the printing<br /> and typesetting industry. Lorem Ipsum has been the <br />industry's standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and <br />scrambled it to make a type specimen book. </p>
          </div>
        </div>
        <div className="top-button">
          <div className="wrap-button">
            <div className="button">
              Baca Selengkapnya
        </div>
          </div>

          <div className="right">
            <i class="fa fa-chevron-left"></i>
          </div>
          <div className="left">
            <i class="fa fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;