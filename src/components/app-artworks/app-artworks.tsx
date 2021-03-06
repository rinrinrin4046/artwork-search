import { Component, h, Prop } from '@stencil/core';
import { loadingController } from '@ionic/core';

@Component({
  tag: 'app-artworks',
  styleUrl: 'app-artworks.css',
  shadow: true,
})
export class AppArtworks {
  @Prop() keyword: string;
  #data = [];
  #baseUrl: URL;

  constructor() {
    const params = {
      country: 'jp',
      entity: 'album',
      limit: '48',
      lang: 'ja_jp',
    };

    this.#baseUrl = new URL('https://itunes.apple.com/search');
    for (const key in params) {
      this.#baseUrl.searchParams.append(key, params[key]);
    }
  }

  async getFromApi(url) {
    const loading = await loadingController.create({ message: '読み込み中…' });
    loading.present();

    const res = await fetch(url);
    const json = await res.json();

    loading.dismiss();
    return json.results;
  }

  componentWillUpdate() {
    const url = new URL(this.#baseUrl.href);
    url.searchParams.append('term', this.keyword);
    url.searchParams.append('_', Math.random().toString(36).slice(-8));
    return this.getFromApi(url.href).then(data => {
      this.#data = data;
    });
  }

  render() {
    return this.#data.map(({ collectionId, artworkUrl100, collectionName }) => {
      return <app-artworks-item key={collectionId} url={artworkUrl100} name={collectionName}></app-artworks-item>;
    });
  }
}
