import React from "react";
import ReactLogo from '../../assets/logo.svg';

function HomeView() {
    return (
        <div className="bg-white min-h-screen p-4 sm:p-8">
            <div className="container mx-auto bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3 rtl:space-x-reverse mb-6">
                    <img src={ReactLogo} className="h-12" alt="React Logo" />
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">React ile Proje Başlatma</h1>
                </div>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    React, modern web uygulamaları geliştirmek için kullanılan popüler bir JavaScript kütüphanesidir.
                    Facebook tarafından geliştirilmiş ve ilk olarak 2013 yılında tanıtılmıştır. React, bileşen tabanlı
                    mimarisi sayesinde, kullanıcı arayüzlerinin oluşturulmasını ve yönetilmesini kolaylaştırır.
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6">React Kurulumu</h2>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    React ile bir proje başlatmak için birkaç yöntem vardır. En yaygın yöntemlerden biri <code>create-react-app </code>
                    kullanmaktır. İşte bu yöntemle nasıl hızlı bir şekilde React projesi oluşturabileceğiz:
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">Adım 1: Proje Dizini Oluşturun</h3>
                <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                    <code className="text-gray-900">
{`npx create-react-app my-react-app
cd my-react-app`}
                    </code>
                </pre>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">Adım 2: Proje Yapısı</h3>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    `create-react-app` komutu, proje yapınızı otomatik olarak oluşturur ve gerekli yapılandırmaları yapar. Proje yapınız aşağıdaki gibi olacaktır:
                </p>
                <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                    <code className="text-gray-900">
{`my-react-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
├── .gitignore
├── package.json
├── README.md`}
                    </code>
                </pre>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">Adım 3: Tailwind CSS Kurulumu</h3>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    Tailwind CSS'i kullanmak için gerekli adımları izleyin. Öncelikle Tailwind CSS'i yükleyin:
                </p>
                <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                    <code className="text-gray-900">
{`npm install tailwindcss
npx tailwindcss init`}
                    </code>
                </pre>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    `tailwind.config.js` dosyasını aşağıdaki gibi yapılandırın:
                </p>
                <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                    <code className="text-gray-900">
{`// tailwind.config.js
/** 
@type {import('tailwindcss').Config}
*/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                    </code>
                </pre>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    `src/index.css` dosyasına Tailwind CSS direktiflerini ekleyin:
                </p>
                <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                    <code className="text-gray-900">
{`/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}
                    </code>
                </pre>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    `src/index.js` dosyasına Tailwind CSS stil dosyasını import edin:
                </p>
                <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                    <code className="text-gray-900">
{`// src/index.js
import './index.css';`}
                    </code>
                </pre>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">Adım 4: Uygulamayı Çalıştırma</h3>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    Projenizi başlatmak için terminalde aşağıdaki komutu çalıştırın:
                </p>
                <pre className="bg-gray-200 p-4 rounded-lg mb-4 text-sm sm:text-base">
                    <code className="text-gray-900">
{`npm run start`}
                    </code>
                </pre>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    Tarayıcıda <code>http://localhost:3000</code> adresine giderek React uygulamanızı görebilirsiniz.
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6">Sonuç</h2>
                <p className="text-gray-800 text-base sm:text-lg mb-4">
                    Artık React ile basit bir proje başlattınız ve Tailwind CSS ile stil verdiniz. Bu yapı, daha büyük ve daha karmaşık projelere başlamanız için sağlam bir temel sağlar. React'in güçlü bileşen tabanlı yapısı ve Tailwind CSS'in esnek stil seçenekleri ile modern web uygulamaları geliştirmek çok daha kolay olacaktır.
                </p>
            </div>
        </div>
    );
}

export default HomeView;
