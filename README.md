Webとクルマのハッカソン2018 チーム「中目黒フレンズ」のためのリポジトリ
===========================================================

フレンズなんだね！

雑な説明
=======

* src配下に成果物を置きましょう。ディレクトリは空気読んで
* gulpでビルドします。ビルドについては後述
* ES6で書こうな！
* ビルドの成果物はbuild配下に出力されます。build配下はgithubにコミットしないでいいです。.gitignoreに入れてあります。
* `gulp-webserver`を確認用webserverとして用意しました。後述します。

環境
----

* v8.x系最新のnodejsとnpmを入れておきましょう。

初期化
------

* GitHubからcloneしてきます

```sh
$ npm install
```

ビルドとか
------

* gulpを直接叩かず、npmスクリプトにいろいろ書いています。

```sh
$ npm run build  # ビルドします
$ npm run clean  # ./build配下をすっからかんにします
$ npm start      # webserverを立ち上げます
$ npm run brower # ブラウザで http://127.0.0.1:3000 を開きます
```

* `npm run build:continuous` コマンドを用意しました。こいつは呼ばれると一発buildを実行し、その後`src`配下のコードを監視。変更があれば自動でビルドが走るようになります。きゃー素敵抱いて！

* gulpを直接叩きたいときは `npx`コマンドが便利です。

```sh
$ npx gulp build
```

* VisualStudio Codeを利用している場合、taskが定義してあるので `cmd + shift + p`からnpmタスクが実行できます。

ローカルの動作確認
-------

`npm start` するとwebserveが立ち上がり、`./build`配下の静的ファイルを確認できます。

http://127.0.0.1:3000 にアクセスすると `./build/index.html`が表示されます。あとは空気読んで！

コードの書き方
------------

### 前準備

* `src/config.json` に各種APIのkeyなどを記述してください。GitHubには展開しないので、ハッカソン当日になんらかの方法でシェアします。念力とか

### 依存性解決

* 他のモジュールを参照したいときは `require`します。
  * `npm run build`すると`browserify`を使って`require`で指定されている依存関係を解決します。`node.js`みたいな形で書くんですね。
  * たとえば外部のライブラリ(jQueryとか)を使いたい場合は `npm install --save-dev jQuery`してライブラリをインストール。その後、使いたいコード中で`const $ = require('jquery')`とかすると、jQueryが使えるようになります。
  * 内部の他のjsを指定したい場合は `const hoge = require('./plugins/moge')`とかすれば読み込まれます。逆に言うとrequireしないと絶対に読み込まれません。

### pluginの書き方

* pluginは `src/js/plugins`配下に置きましょう
* ファイル名はなんでもいいですが、`action`メソッドを必ず作ってください。`app-main.js`はpluginの`action`メソッドを呼び出します。
  * `action`メソッドは`vias`と`callback`いうオブジェクトを引数にとります。最後に`callback`を呼ぶことでrenderingします。。
  * 返却するjsonには喋りのパラメタとか喋る内容とかくま画像とかを指定してください。あとは空気読んで！
* pluginを書いたら、`app-main.js`の`plugins`配列のなかでrequireしてください。
  * ディレクトリ読んで自動でrequireさせようとおもったけど、同じこと考えてる人がissue立ててPR出してる最中だったので諦めた。

便利な情報
--------

* Chromeでlocalhostから外部APIを叩くと CORS違反で超怒られる。このプラグインを入れておくといろいろ捗る
  * https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

