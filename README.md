# WebAssembly_Inference
WebAssemblyを使って、機械学習の推論処理を実行してみよう

## 目的
WebAssemblyに触れてみる
推論に有用であることを体験してみる

## WebAssemblyって？
ブラウザ上で実行できるコード。
CやRustなどの言語をコンパイルして、バイナリデータとして読み込み・実行できる仕組みが提供されている。
JS直で実装するよりも高速・効率的であるため、負荷のかかる計算を任せることによる高速化が期待されている。

細かくは → https://developer.mozilla.org/ja/docs/WebAssembly

## 何をすればよか
- 添付のコードを実行してみて、中身を理解してみる
- https://www.tensorflow.org/js/guide/models_and_layers?hl=ja ページを参考に、Node-AIのモデルを変換してみる
- 変換できたら、コードを参考に、webブラウザ上で推論をおこなってみる
  - ただし、処理のフローについては、動的にはしないで良い。以下のフロー固定で前処理が行われる前提で実装すること
  - データ → 正規化 → LMNS → 学習
