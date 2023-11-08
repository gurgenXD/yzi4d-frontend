// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import YandexMetrika from './YandexMetrika'; // Импортируйте YandexMetrika из правильного пути

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Добавляем компонент YandexMetrika */}
          <YandexMetrika  />
          {/* Другие метатеги и скрипты, если есть */}
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;