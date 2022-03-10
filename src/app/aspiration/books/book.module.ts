export interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  image?: string;
  pageNumber: number;
  startDate: Date;
  state: 'complete' | 'cancled' | 'inProgress' | 'notStarted';
  takeaway: string;
}
