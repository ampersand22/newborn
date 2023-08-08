import Image from 'next/image';
// import sunflower from '..public/assets/sunflower.jpeg';


function Header() {
  return (
    <header>
      <h1>Header</h1>
      {/* left */}
      <>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg" 
          layout='fill'
        />
      </>

      {/* middle */}
      <></>

      {/* right */}
      <></>

    </header>
  );
}

export default Header;