# 環境構築

## Version

- React v18.2.0
- Next v12.2.3
- TailwindCSS v3.1.6

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn dev

# production mode
$ yarn build
$ yarn start:build
```

# デザインパターン

## コンポーネント設計

- コンテナ・プレゼンテーションパターンの採用
- React コンポーネントの実装方法は、[経年劣化に耐える ReactComponent の書き方](https://qiita.com/Takepepe/items/41e3e7a2f612d7eb094a)を参考にさせていただいている

  ```tsx
  ├── components　・・・ コンポーネントをまとめるディレクトリ
  │   ├── Header  ・・・ あるコンポーネントのディレクトリ
  │   │   ├── Header.tsx ・・・ Container層として、ロジックを定義するファイル
  │   │   └── Presenter.tsx ・・・ Container層から表示に必要なpropsを受領し、画面表示するためのファイル
  │   │   └── index.ts ・・・ コンポーネントを出力するファイル
  │   ├── helper  ・・・ 複数のコンポーネントから利用されるコンポーネントの管理ディレクトリ
  ```
