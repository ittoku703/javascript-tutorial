# JavaScript Tutorial

## What is JS

### Application Programming Interface (API)

API は大まかに 2種類に分けられます。

- Browser API
  - [`DOM (Document Object Model) API`](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model) は HTML と CSS の操作を可能とします。HTML を生成し、削除し、変更し、動的にページの見た目を変更することなどが可能です。もし (先ほどの簡単な例で見たように) ページ内でポップアップウィンドウを見たり、新しいコンテンツが表示されたりしたのなら、DOM が使用されていることでしょう。
  - [`Geolocation API`](https://developer.mozilla.org/ja/docs/Web/API/Geolocation) は地理的な情報を取得します。これは [Google マップ](https://www.google.com/maps)があなたの所在地を見つけて地図上にプロットする場合に使用されています。
  - [`Canvas`](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API) と [`WebGL`](https://developer.mozilla.org/ja/docs/Web/API/WebGL_API) の API は 2D や 3D グラフィックでのアニメーションを可能とします。このウェブ技術を使用してすごいことをやってのける人たちがいます。[Chrome Experiments](https://www.chromeexperiments.com/webgl) や [webglsamples](https://webglsamples.org/) などのページを見てください。
  - [音声と動画の API](https://developer.mozilla.org/ja/docs/Web/Apps/Fundamentals/Audio_and_video_delivery)、たとえば [`HTMLMediaElement`](https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement) や [`WebRTC`](https://developer.mozilla.org/ja/docs/Web/API/WebRTC_API) などは適切な音声・動画をウェブページで再生することや、ウェブカメラの動画を撮って他の人のコンピューターで流すといった、マルチメディアの可能性を示してくれます (我々が作った[Snapshot demo](http://chrisdavidmills.github.io/snapshot/) を見てみてください)。
- 3rd party API
  - [Twitter API](https://dev.twitter.com/overview/documentation) を使用して、ウェブサイトに最新のツイートを表示させることができます。
  - [Google マップ API](https://developers.google.com/maps/) と [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) を使用して、ウェブサイトに専用の地図を埋め込み、付加機能を付けることもできます。

### ブラウザのセキリュティ

> ブラウザーのそれぞれのタブは、コードを実行するための入れ物を個別に持ちます (この入れ物を技術的用語では「実行環境」と呼びます)。つまり、それぞれのタブ内でコードは完全に分かれて実行されており、あるタブで動いているコードは他のタブや他のウェブサイトのコードに、直接的には干渉できません。これは良いセキュリティ対策です。互いに干渉することが出来てしまえば、ウェブの悪党たちは、他のタブで開いているウェブサイトから情報を盗み出したり、もっとひどいことをするためにコードを書き始めることでしょう。

### インタープリターとコンパイルコード

> JavaScript は軽量なインタープリター型プログラミング言語です。ウェブブラウザーは元のテキストの形で JavaScript コードを受け取り、それからスクリプトを実行します。技術的な見地からは、たいていの JavaScript インタープリターは **just-in-time compiling** というテクニックを使ってパフォーマンスを向上させています; スクリプトが使われるときに、JavaScript コードが速いバイナリーフォーマットにコンパイルされて、可能な限り高速に実行されます。しかし、JavaScript は、事前ではなく実行時にコンパイルされるために、インタープリター言語と考えられています。

### 動的コードと性的コード

> クライアントサイドの JavaScript と、サーバーサイドの言語を説明するのに**動的**という言葉を使います。これはウェブページやウェブアプリが必要に応じてコンテンツを生成し、異なる状況において異なる表示ができるという能力を指しています。サーバーサイドのコードは、データベースからデータを取得して動的にコンテンツを生成します。一方、クライアントサイドの JavaScript はクライアント上のブラウザーで HTML のテーブルを生成したり、そのテーブルにサーバーから指示を受け、データを追加したり、ウェブページ上でユーザーにテーブルを表示したりするなどして、動的にコンテンツを生成します。それぞれの文脈で、少し異なる意味合いではありますが、関連しています。そしてどちらの方式も (サーバーサイドもクライアントサイドも) たいていは同時に使用されます。
>
> 動的に更新されるコンテンツを含まないウェブページは**静的**と表現されます。静的なウェブページとは常に同じコンテンツを表示するページのことです。

### async と defer

> - `async` と `defer` の両方とも、ページのその他の部分 (DOM など) がダウンロード中な時でも、ブラウザーにスクリプトを別々のスレッドでダウンロードするよう指示して、このためページ読み込みはスクリプトでブロックされません。
> - 依存関係なしでスクリプトを単独ですぐに実行できる場合は、`async` を使用します。
> - スクリプトが他のスクリプトや DOM配置に依存している場合は、`defer` を使用してスクリプトを読み込み、対応する `<script>` 要素をブラウザーで実行して欲しい順序で配置します。

### JSONの取得

> JSON を取得するには、[`XMLHttpRequest`](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest) (しばしば **XHR** と呼ばれる) という API を使用します。これは非常に便利な JavaScript オブジェクトで、JavaScript を使用してサーバからリソース (例：画像、テキスト、JSON、さらには HTML スニペットなど) を取得するネットワークリクエストを行うことができます。つまりページ全体を再読み込みせずに、小さな部分のコンテンツを更新することができます。これにより、よりレスポンシブな Web ページを作成できますが、それをもっと詳細に教えるのはこの記事の範囲を超えています。

 #### usage: 

1. JSONがあるURLを変数に代入する

```javascript
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
```



2. XMLHttpRequestを使ってHTTPリクエストを作成する

```javascript
let request = new XMLHttpRequest();
```

3. リクエストを開始する

```javascript
request.open('GET', requestURL);
```

4. XHRオブジェクトがサーバから返されるデータを判断するようにresponseTypeにJSONを指定する。それからsend()メソットでリクエストを送信する

```javascript
request.responseType = 'json';
request.send();
```

5. 最後にサーバからのレスポンスを待ち、それを処理するコードを記述する

```javascript
request.onload = function() {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
```

6. 値の取得するには`superHeroes['KEY']`で参照することができる

## Asynchronous javascript

## 非同期とは？

通常は、あるプログラムのコードは書かれた順に、一度にひとつのことだけが起こるように実行されます。もしある関数が別の関数の結果に依存するのであれば、その関数は他の関数の処理が完了して結果を返すまで待たなくてはならず、それまでは、ユーザー視点からはプログラム全体は止まっているのと本質的には同じです。

例えば、Mac ユーザーは回転する虹色のカーソル（よく「ビーチボール」と呼ばれます）としてこのことを経験することもあるでしょう。このカーソルによってオペレーティングシステムは「現在使用中のプログラムは何かが終わるのを待って停止しており、それが非常に長く掛かっているので何が起こっているのかとご心配をお掛けしているのではないでしょうか」と言っているのです。

![Multi-colored macOS beachball busy spinner](https://mdn.mozillademos.org/files/16577/beachball.jpg)

これはいら立つような体験であり、コンピューターの処理能力の良い使い方ではありません――特に、マルチコアプロセッサーが利用できる時代においては。他のタスクを別のプロセッサーコアに処理させて、それが終わった時に知らせることができるのに、座って待っているのは意味がありません。このように合間に別の仕事を終わらせる、ということが**非同期プログラミング**の基本です。非同期にタスクを実行する API は、あなたが使用するプログラミング環境（ウェブ開発であればウェブブラウザー）によって提供されます。