import React from 'react';
import foto from '../Components/Assets/foto.jpg';
import foto2 from '../Components/Assets/foto2.jpg';
import foto3 from '../Components/Assets/foto3.jpg';
import foto4 from '../Components/Assets/foto4.jpg';
import foto5 from '../Components/Assets/foto5.jpg';
import foto6 from '../Components/Assets/foto6.jpg';
import './foto.css'

const Foto = () => {
  return (
    <div className='image'>
      <div>
        <img src={foto} alt="1" />
        <h1>Toko Kami</h1>
      </div>
      <div>
        <img src={foto2} alt="2" />
        <h1>Kami menyediakan parfum berkualitas dan tahan lama</h1>
      </div>
      <div>
        <img src={foto3} alt="3" />
        <h1>Kami juga menerima jual beli hp bekas</h1>
      </div>
      <div>
        <img src={foto4} alt="4" />
        <h1>Toko kami tampak samping</h1>
      </div>
      <div>
        <img src={foto5} alt="5" />
        <h1>Neonbox besar Di pinggir jalan agar pengendara tau lokasi tepat toko kami</h1>
      </div>
      <div>
        <img src={foto6} alt="6" />
        <h1>Contoh Parfum Kami</h1>
      </div>
    </div>
  );
}

export default Foto;
