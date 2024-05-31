import React from 'react';
import ReactLogo from "../../assets/logo.svg";
import CodeSnippetCard from "../../components/cards/CodeSnippetCard";

const CRUDView = () => {
    return (
        <div className="bg-white min-h-screen p-4 sm:p-8">
            <div className="container mx-auto bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
                <div
                    className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3 rtl:space-x-reverse mb-6">
                    <img src={ReactLogo} className="h-12" alt="React Logo"/>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">
                        React'da HTTP İstekleri
                    </h1>
                </div>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    React uygulamalarında, HTTP istekleri göndermek için çeşitli yöntemler bulunmaktadır. Bu dökümanda,
                    temel HTTP isteklerini nasıl göndereceğinizi ve yaygın olarak kullanılan paketleri nasıl entegre
                    edeceğinizi öğreneceksiniz.
                </p>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
                    Temel HTTP İstekleri
                </h1>

                <CodeSnippetCard
                    title="1. GET İsteği"
                    description="
                    GET isteği, sunucudan veri almak için kullanılır. Örnek olarak, bir RESTful API'den veri çekmek için kullanılır.
                "
                    codeText={`
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
`}
                />

                <CodeSnippetCard
                    title="2. POST İsteği"
                    description="
POST isteği, sunucuya veri göndermek için kullanılır. Örneğin, form verilerini sunucuya iletmek için kullanılır.
                "
                    codeText={`
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: 'example', password: '123456' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error posting data:', error));
`}
                />

                <CodeSnippetCard
                    title="3. PUT İsteği"
                    description="
PUT isteği, sunucuda belirli bir kaydı güncellemek için kullanılır.
                "
                    codeText={`
fetch('https://api.example.com/data/123', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'New Name' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error updating data:', error));
`}
                />

                <CodeSnippetCard
                    title="4. DELETE İsteği"
                    description="
DELETE isteği, sunucuda belirli bir kaydı silmek için kullanılır.
                "
                    codeText={`
fetch('https://api.example.com/data/123', {
    method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error deleting data:', error));
`}
                />

                <CodeSnippetCard
                    title="JWT Token Kullanımı"
                    description="
JWT token, kullanıcı kimlik doğrulama ve yetkilendirme için kullanılır. Genellikle kullanıcı giriş yaptığında sunucudan alınır ve her isteğin başlığına eklenir."
                    codeText={`
const token = 'your_jwt_token';

fetch('https://api.example.com/data', {
    headers: {
        'Authorization': \`Bearer $token\`
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching data:', error));

`}
                />


                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
                    Fetch API Alternatifi Axios
                </h1>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    Axios, HTTP isteklerini yapmak için kullanılan popüler bir JavaScript kütüphanesidir. Yüksek düzeyde
                    özelleştirme imkanı sağlar.
                </p>
                <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                <code className="text-gray-900">{`npm install axios`}</code>
            </pre>
                <p className="text-gray-800 text-base sm:text-lg mb-4">Kullanımı:</p>
                <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                <code className="text-gray-900">
                    {`
axios.get('https://api.example.com/data')
.then(response => console.log(response.data))
.catch(error => console.error('Error fetching data:', error));
                `}
                </code>
            </pre>

            </div>
        </div>
    );
}

export default CRUDView;