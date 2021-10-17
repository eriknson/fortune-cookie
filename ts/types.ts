export type Fortune = {
  id: string;
  lyric: string;
  artist: string;
  song: string;
};

export type Fortunes = {
  fortunes: Fortune[];
};

export type Response = {
  props: {
    fortunes: Fortune[];
  };
  revalidate: number;
};
