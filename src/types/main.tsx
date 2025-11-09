export type MainResponse = {
  id: number;
  content: string;
  thumbnail: string;
  cover_img: string;
  created_at: Date;
}[];

export type SnsImgResponse = {
  id: number;
  link: string;
  created_at: Date;
}[];
