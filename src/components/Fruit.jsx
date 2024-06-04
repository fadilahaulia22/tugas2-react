import { Info, Heart, MessageCircle, Send } from 'lucide-react';

function Fruit({fruits}){
    const handleInfo =(fruit) => {
        alert(`Name : ${fruit.name}\nPrice : ${fruit.price}\nQuantity : ${fruit.quantity}\nCategory : ${fruit.category}`);
    };

    const handleLike = (fruit) => {
        alert(`Saya Menyukai ${fruit.name}.`);
    };
    const handleComment= (fruit) => {
        const comment = prompt(`Masukkan komentar mu`);
        if (comment) {
            alert(`Komentar anda : ${comment}`);
        }
    };

    const handleSend =() =>{
        if (confirm('Apakah anda yakin want to send this?')) {
            alert('Komentar berhasil dikirim!')
        }
    };

    return (
        <div className="fruit-list">
            {fruits.map((fruit,index) => (
                <div key={index} className="fruit-item">
                    <img src={fruit.photo} alt={fruit.name} className="h-48 w-full object-contain bg-gray-100" />
                    <h2>{fruit.name}</h2>
                    <p>{fruit.description}</p>

                    <div className="flex justify-center gap-2 mt-2">
                        <button onClick={() => handleInfo(fruit)} className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                            <Info className="mr-2" /> 
                        </button>
                        <button onClick={() => handleLike(fruit)} className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                            <Heart className="mr-2" /> 
                        </button>
                        <button onClick={() => handleComment(fruit)} className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                            <MessageCircle className="mr-2" /> 
                        </button>
                        <button onClick={handleSend} className="flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                            <Send className="mr-2" /> 
                        </button>
                    </div>  
                </div>
            ))}
        </div>
    );
}
export default Fruit;