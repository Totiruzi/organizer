export interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  image?: string;
  startDate: Date;
  pageNumber: number;
  currentPageNumber?: number;
  endDate?: Date;
  spentTime?: number;
  progressMade?: number;
  state: 'complete' | 'cancelled' | 'inProgress' | 'notStarted';
  takeaway: string;
}
