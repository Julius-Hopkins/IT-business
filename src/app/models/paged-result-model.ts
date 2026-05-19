export class PagedResultModle<T>{
  public items: T[] = [];
  public page: number = 0;
  public pageSize: number = 0;
  public totalCount: number = 0;
  public totalPages: number = 0;
  public description: String = "";
}