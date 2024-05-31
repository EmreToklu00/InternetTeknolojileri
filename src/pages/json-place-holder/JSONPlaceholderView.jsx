import React from 'react';
import ReactLogo from "../../assets/logo.svg";
import CodeSnippetCard from "../../components/cards/CodeSnippetCard";

const JsonPlaceholderView = () => {
    return (
        <div className="bg-white min-h-screen p-4 sm:p-8">
            <div className="container mx-auto bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
                <div
                    className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3 rtl:space-x-reverse mb-6">
                    <img src={ReactLogo} className="h-12" alt="React Logo"/>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">
                        React ile JSONPlaceholder Kullanımı
                    </h1>
                </div>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    JSONPlaceholder, frontend geliştirme için sahte REST API servisleri sunan ücretsiz bir çevrimiçi
                    API'dir. Bu dökümanda, JSONPlaceholder'ı kullanarak React uygulamanızda nasıl veri çekebileceğinizi
                    ve bu veriyi nasıl gösterebileceğinizi öğreneceksiniz.
                </p>

                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                    JSONPlaceholder Nedir?
                </h1>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    JSONPlaceholder, sahte verilerle çalışan REST API uç noktaları sağlar. Bu API, frontend
                    geliştiricilerin test ve geliştirme süreçlerinde veri işlemlerini test etmelerine yardımcı olur.
                    JSONPlaceholder, kullanıcılar, gönderiler, yorumlar, albümler, fotoğraflar ve yapılacaklar listesi
                    gibi farklı veri türleri sunar.
                </p>

                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                    JSONPlaceholder API Uç Noktaları
                </h1>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    İşte JSONPlaceholder tarafından sunulan bazı temel API uç noktaları:
                </p>
                <ul className="list-disc list-inside">
                    <li className="mb-2">
                        <strong>`/posts`:</strong>
                        Tüm gönderileri alır
                    </li>
                    <li className="mb-2">
                        <strong>`/posts/1`:</strong>
                        Belirli bir gönderiyi alır
                    </li>
                    <li className="mb-2">
                        <strong>`/comments`:</strong>
                        Tüm yorumları alır
                    </li>
                    <li className="mb-2">
                        <strong>`/users`:</strong>
                        Tüm kullanıcıları alır
                    </li>
                </ul>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                    React ile JSONPlaceholder Kullanımı
                </h1>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    React ile JSONPlaceholder'dan veri çekmek için, `fetch` API veya `axios` kütüphanesini
                    kullanabilirsiniz. Bu dökümanda her iki yöntemle de nasıl veri çekileceğini göstereceğiz.
                </p>
                <CodeSnippetCard
                    title="Adım 1: React Projesi Oluşturma"
                    description="Öncelikle bir React projesi oluşturun:"
                    codeText={
                        `
npx create-react-app jsonplaceholder-demo
cd jsonplaceholder-demo`}
                />

                <CodeSnippetCard
                    title="Adım 2: `fetch` ve `axios` ile Veri Çekme"
                    description="`fetch` API kullanarak JSONPlaceholder'dan veri çekmek için aşağıdaki adımları izleyin:"
                    codeText={
                        `
import React, { useEffect, useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="list-disc list-inside">
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
`}
                />

                <CodeSnippetCard
                    title=""
                    description="`axios` kütüphanesini projenize ekledikten sonra JSONPlaceholder'dan veri çekmek için aşağıdaki adımları izleyin:"
                    codeText={`import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="list-disc list-inside">
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;`}
                />

                <CodeSnippetCard
                    title="Adım 3: Projeyi Çalıştırma"
                    description="Projenizi çalıştırmak için aşağıdaki komutu kullanın:"
                    codeText={`npm run start`}
                />

            </div>
        </div>
    );
}

export default JsonPlaceholderView;