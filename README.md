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

### JavaScript と API とその他 JavaScript ツールの関係

ここまででクライアントサイド API とは何か、JavaScript 言語とどう関係しているのかお話しました。もっとはっきりさせるために一度おさらいして、ついでに他の JavaScript ツールがどう関係してくるのかもお話しましょう:

- JavaScript — ブラウザーに組込まれた高レベルスクリプト言語で、Web ページやアプリに機能を実装するのに使えます。[Node](https://developer.mozilla.org/ja/docs/Learn/Server-side/Express_Nodejs/Introduction) のようなブラウザー以外にも他のプログラミング環境で使えるのは覚えておいて下さい。
- ブラウザー API — ブラウザーに組込みの JavaScript 言語の上にある構造で、何かの機能をもっと簡単に実装できるようにします。
- サードパーティ API — サードパーティのプラットフォーム (Twitter や Facebook) 上に作られた構造で、それらのプラットフォームの機能を Web ページで利用できるようにします (例えばあなたの最新のツイートをあなたの Web ページに表示する)。
- JavaScript ライブラリ — 多くは、[独自の関数](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Functions#custom_functions) を含んだ一つか複数の JavaScript ファイルで、Web ページにくっつけることでスピードアップしたり共通の機能を書いたりできるものです。例えば、jQuery、Mootools や React がなどが含まれます。
- JavaScript フレームワーク — ライブラリの一階層上にあたり、JavaScript フレームワーク (例えば Angular や Ember) は HTML や CSS に JavaScript、インストールして一から Web アプリケーションを作成するのに使えるその他もろもろの技術がパッケージ化されている場合が多いです。ライブラリとフレームワークの大きな相違点は、「制御の逆転 (Inversion of Control)」にあります。ライブラリのメソッドを呼ぶ時には、開発者がコントロールしています。フレームワークでは、コントロールが逆転します: フレームワークから開発者のコードが呼ばれるのです。

### 一般的なブラウザー API

> [MDN API 一覧](https://developer.mozilla.org/ja/docs/Web/API)

特に、あなたが使うであろう最も一般的なブラウザー API のカテゴリ (このモジュールでとても詳しい所まで網羅していきます) は:

- ブラウザーで読み込んだ**文書を操作するための API**。一番目にする例は [DOM (Document Object Model) API](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model) で、 HTML と CSS を操作できます — HTML を作成したり削除したり書き換えたり、動的に新しいスタイルをページに適用したり、などなど。例えばページにポップアップウィンドウが表われたり、何か新しい中身が表示されたりする時、DOM が使われています。この種の API については[ドキュメントの操作](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)でもっといろいろ見られます。
- **サーバからデータ取得をする API** で Web ページの一部を書き換える事はとてもよく行なわれます。この一見ちょっとした事が、サイトのパフォーマンスや振舞いに巨大なインパクトを与えました — 在庫一覧や新しいお話一覧を書き換えたい時に、サーバからページ全体をリロードする事なしにさくっとできたら、サイトやアプリはずっと反応よく素早く感じられます。これを可能にした API には [`XMLHttpRequest`](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest) と [Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API) が含まれています。**Ajax** という言葉を聞いた事があるかもしれませんが、これがこのテクニックの呼び名です。これらの API について [サーバからのデータ取得](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)でもっといろいろ見られます。
- **グラフィックスを描画したり操作する API** は多くのブラウザーがサポートしています — 最も知られているものには[ Canvas](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API) と [WebGL](https://developer.mozilla.org/ja/docs/Web/API/WebGL_API) があり、HTML の[`<canvas>`](https://developer.mozilla.org/ja/docs/Web/HTML/Element/canvas) 要素上にあるピクセルデータを書き換えて2次元や3次元のシーンを作成するのに使えます。例えばキャンバスAPIを使って長方形や円のような形を描いたり、キャンバスに画像を読み込んだり、セピアやグレイスケールといったフィルターを適用したり、あるいは WebGL を使ってライティングやテクスチャを使った3Dシーンを作成したりできます。これらの API はよくアニメーションループを作成するAPI([`window.requestAnimationFrame()`](https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame) 要素上にあるピクセルデータを書き換えて2次元や3次元のシーンを作成するのに使えます。例えばキャンバスAPIを使って長方形や円のような形を描いたり、キャンバスに画像を読み込んだり、セピアやグレイスケールといったフィルターを適用したり、あるいは WebGL を使ってライティングやテクスチャを使った3Dシーンを作成したりできます。これらの API はよくアニメーションループを作成するAPI([`window.requestAnimationFrame()`](https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame) など)や他のものと組み合わせて使われ、アニメやゲームのようなものの表示を定期的に書き換えるようにします。
- **[動画と音声の API](https://developer.mozilla.org/ja/docs/Web/Guide/Audio_and_video_delivery)** [`HTMLMediaElement`](https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement)や [Web Audio API](https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API) や [WebRTC](https://developer.mozilla.org/ja/docs/Web/API/WebRTC_API) のような API を使うと、 マルチメディアを使ってとても面白い事ができます。音声や動画再生のための独自のコントロールUIの作成、字幕やサブタイトルのような音声トラックをビデオと一緒に表示したり、Web カメラの画像を取り込んで操作し、上述のキャンバスに表示したり Web カンファレンスに参加している他の誰かのコンピューター上に表示したり、音声トラックにイフェクト(ゲイン、ディストーション、音場効果など)をかけたりできます。
- **デバイス API** は基本的に Web アプリで使えるような形で、今時のハードウェアデバイスのデータを操作したり取得する API です。デバイスの位置データにアクセスして地図上にあなたの居場所を書くような位置情報 API についてはすでにお話しました。他の例にはシステム通知を使って Web アプリに役に立つアップデートがあるのを知らせたり([Notifications API](https://developer.mozilla.org/ja/docs/Web/API/Notifications_API) を参照)、ハードウェアを振動させたり([Vibration API](https://developer.mozilla.org/ja/docs/Web/API/Vibration_API) を参照)などがあります。
- **クライアント側でのデータ保持 API** は今多くのブラウザーに普及しつつあります。— クライアント側にデータを保存できると、ページを移動しても状態を保存したり、たとえデバイスがオフラインでも動作するようなアプリを作成したいような場合、とても役に立ちます。いくつもの選択肢があり、例えば [Web Storage API](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API) を使ったキーバリューストアや、 [IndexedDB API](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) を使ったもっと複雑なテーブル型データ保存などです。

> blob = Binary Large Object

#  Web Storage API

**Web Storage API** は、[クッキー](https://developer.mozilla.org/ja/docs/Glossary/Cookie)を使用するよりも直感的な方法で、ブラウザーがキーと値のペアを保存できる仕組みを提供します。

## [Web Storage の概念と使用方法](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API#web_storage_concepts_and_usage)

Web Storage には、以下の 2 種類の仕組みがあります:

- `sessionStorage`は、ページのセッション中 (ページの再読み込みや復元を含む、ブラウザーを開いている間) に使用可能な、オリジンごとに区切られた保存領域を管理します。
  - セッションデータのみを保存します。つまり、データはブラウザ（またはタブ）が閉じられるまで保存されます。
  - データがサーバに転送されることはありません。
  - ストレージの制限がクッキーよりも大きいです（最大 5MB ）。
- `localStorage`も同様ですが、こちらはブラウザーを閉じたり再び開いたりしても持続します。
  - 有効期限なしでデータを保存し、 JavaScript を介してクリアされるます。もしくは、ブラウザキャッシュ/ローカルに保存したデータのクリアによりクリアされます。
  - ストレージ制限は3つの中で最大です。

これらの仕組みは [`Window.sessionStorage`](https://developer.mozilla.org/ja/docs/Web/API/Window/sessionStorage) および [`Window.localStorage`](https://developer.mozilla.org/ja/docs/Web/API/Window/localStorage) プロパティ (正確には、サポートするブラウザーは `Window` オブジェクトが `WindowLocalStorage` および `WindowSessionStorage` オブジェクトを実装しており、これらに `localStorage` および `sessionStorage` プロパティがあります) を通して使用でき、いずれかのプロパティを使用すると [`Storage`](https://developer.mozilla.org/ja/docs/Web/API/Storage) オブジェクトのインスタンスを生成して、データアイテムの保存、取り出し、削除ができます。 同じオリジンに対して `sessionStorage` と `localStorage` は、別の Storage オブジェクトを使用します。 これらは別々に制御されて機能します。

### 旧式な方法: クッキー

クライアント側での保存という考え方には、長い歴史があります。ウェブの初期から、ウェブサイト上でのユーザー体験を個別化するための情報を記憶するべく、サイトは [クッキー](https://developer.mozilla.org/ja/docs/Web/HTTP/Cookies) を使ってきました。そうしたクッキーは、ウェブ上で一般的に使われるクライアント側での保存の、最初期の形式です。

最近では、クライアント側のデータを保存するためのより簡単な仕組みが利用できるため、この記事ではクッキーの使用方法については説明しません。ただし、これはクッキーが現代のウェブで完全に役に立たないことを意味するわけではありません。クッキーは、ユーザーの個別化や状態に関連するデータを保存するために今でも一般的に使用されています。たとえば、セッション ID やアクセストークンです。クッキーの詳細については、[HTTP cookies](https://developer.mozilla.org/ja/docs/Web/HTTP/Cookies) の記事を参照してください。

### 新方式派: ウェブストレージと IndexedDB

前述の「簡単な」機能には次のものがあります:

- [Web Storage API](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API) は、名前とそれに対応する値とからなる小規模なデータ項目を保存したり取り出したりするための、とても簡潔な構文を提供しています。これは、ユーザーの名前、ユーザーがログインしているかどうか、画面の背景にどの色を使うべきか、といったような、何らかの単純なデータを記憶するだけでよい場合に有用です。
- [IndexedDB API](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API) は、複雑なデータを保存するための完全なデータベース・システムをブラウザーに提供しています。これは、顧客レコードの完全な集合から、音声ファイルまたは動画ファイルのような複雑なデータ型にいたるまでの、種々の物事に対して使えます。

以下ではこれらの API について学ぶことになります。

### 将来: キャッシュ API

いくつかのモダン・ブラウザーは、新しい [`Cache`](https://developer.mozilla.org/ja/docs/Web/API/Cache) API をサポートしています。この API は、特定の要求に対する HTTP 応答を記憶しておくために設計されています。 また、ネットワーク接続なしに後でサイトを利用できるように、ウェブサイト資産をオフラインに記憶しておく、といったようなことをするうえで非常に有用です。キャッシュは通常、[サービスワーカー API](https://developer.mozilla.org/ja/docs/Web/API/Service_Worker_API) と組み合わせて利用します。もっとも、必ずそうしなくてはならないというわけではありません。

> プロキシサーバとは、企業の社内ネットワークなどからインターネットに接続する際に、出入り口で中継をしているサーバ、それが「プロキシ」です。
>
> これによってマルウェアや不正アクセスなどのサイバー攻撃からサーバを守ります。
>
> また、内部ネットワークからインターネット接続を行う際、高速なアクセスや安全な通信などを確保するための中継サーバ、という役割もあります。

