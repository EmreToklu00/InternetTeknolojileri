import React from 'react';
import ReactLogo from "../../assets/logo.svg";
import CodeSnippetCard from "../../components/cards/CodeSnippetCard";

const ReactReduxView = () => (
    <div className="bg-white min-h-screen p-4 sm:p-8">
        <div className="container mx-auto bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <div
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-3 rtl:space-x-reverse mb-6">
                <img src={ReactLogo} className="h-12" alt="React Logo"/>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center sm:text-left">Redux Toolkit
                    Kullanımı</h1>
            </div>
            <p className="text-gray-800 text-base sm:text-lg mb-4">
                Redux Toolkit, Redux'u daha etkili bir şekilde kullanmanıza olanak tanıyan resmi olarak önerilen bir
                pakettir. Redux Toolkit, Redux'u kullanırken daha az boilerplate kodu yazmanıza yardımcı olur ve modern
                JavaScript pratiklerini uygulamanıza olanak tanır. Bu dökümanda, Redux Toolkit'in temel kavramlarını ve
                kullanımını detaylı bir şekilde ele alacağız.
            </p>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                Redux Toolkit Nedir?
            </h1>
            <p className="text-gray-800 text-base sm:text-lg mb-4">
                Redux Toolkit, Redux'u daha etkili ve verimli hale getiren bir pakettir. Redux Toolkit, yaygın olarak
                kullanılan Redux eklentilerini ve önerilen en iyi uygulama kalıplarını içerir. Bu sayede, Redux'u
                kullanırken daha az boilerplate kodu yazmanızı ve daha iyi bir kod organizasyonu sağlamanızı sağlar.
            </p>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                Redux Toolkit Avantajları
            </h1>
            <p className="text-gray-800 text-base sm:text-lg mb-4">
                Redux Toolkit'in sağladığı avantajlar şunlardır:
            </p>

            <ul className="list-disc list-inside">
                <li className="mb-2">
                    <strong>Daha Az Boilerplate Kodu:</strong> Redux Toolkit, Redux'u kullanırken daha az tekrarlanan
                    kod yazmanıza olanak tanır. Slice'lar ve önceden tanımlanmış yardımcı fonksiyonlar sayesinde, state
                    yönetimi için gereken kod miktarını azaltır.
                </li>
                <li className="mb-2">
                    <strong>Immutability ve Immer Entegrasyonu:</strong> Immer kütüphanesi sayesinde, Redux Toolkit ile
                    state güncellemeleri daha kolay ve okunabilir hale gelir. Bu, karmaşık state değişikliklerini daha
                    rahat bir şekilde yönetmenizi sağlar.
                </li>
                <li className="mb-2">
                    <strong>Performans Optimizasyonu:</strong> Redux Toolkit, performansı artıran optimize edilmiş bir
                    yapı sunar. Bu sayede, büyük ve karmaşık uygulamalarda bile yüksek performanslı bir state yönetimi
                    sağlar.
                </li>
            </ul>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                Temel Kavramlar
            </h1>
            <p className="text-gray-800 text-base sm:text-lg mb-4">
                Redux Toolkit kullanımını anlamak için aşağıdaki temel kavramları öğrenmeniz önemlidir:
            </p>

            <CodeSnippetCard
                title="1. Store Oluşturma"
                description="Redux Toolkit ile bir store oluşturmak oldukça basittir. `configureStore` fonksiyonunu kullanarak, store'unuza bir reducer tanımlayabilirsiniz:"
                codeText={
                    `import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer
});

export default store;`}
            />

            <CodeSnippetCard
                title="2. Slice'lar"
                description="
Slice'lar, Redux Toolkit ile state'in belirli bir parçasını tanımlayan ve güncelleyen fonksiyonlardır. Her bir slice, bir reducer ve action creator'lar içerir:
                "
                codeText={
                    `
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;                   
`}
            />


            <CodeSnippetCard
                title="3. useDispatch ve useSelector"
                description="
`useDispatch` ve `useSelector` kancaları, React bileşenleri içinde Redux ile etkileşimde bulunmanın kolay bir yoludur. `useDispatch` ile action creator'ları çağırabilir ve `useSelector` ile store'dan state'i alabilirsiniz:
                "
                codeText={
                `
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
              
`}
            />

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                Redux Toolkit Kullanımı
            </h1>
            <p className="text-gray-800 text-base sm:text-lg mb-4">
                Redux Toolkit kullanımını anlamak için yukarıdaki temel kavramları kullanabilirsiniz. Redux Toolkit,
                Redux'u kullanırken daha az tekrarlayan kod yazmanıza ve daha iyi bir kod organizasyonu sağlamanıza
                yardımcı olabilir. Redux Toolkit'in sunduğu avantajları kullanarak, uygulamanızın state yönetimini daha
                verimli bir şekilde sağlayabilirsiniz.
            </p>

        </div>
    </div>
);

export default ReactReduxView;


