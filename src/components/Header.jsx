
export default function Header(){
    return (
      <header className="header bg-gradient-to-r from-green-400 to-blue-500 p-6 shadow-lg">
        <div className="container mx-auto flex flex-col items-center">
          <img src="/image/logotoko.jpeg" alt="logo-toko-buah" className="logo rounded-full shadow-md mb-4" />
          <h1 className="shop-name text-4xl font-bold text-white">Fruit Shop</h1>
        </div>
      </header>
      );
    }