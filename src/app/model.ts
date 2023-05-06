export interface todoListModel {
    description: string
    dueDate: string
    priority: string
  }

  export class TableBasicExample {
    displayedColumns: string[] = ['description', 'dueDate', 'priority'];
    // dataSource = TABLE_DATA;
  }

  // const TABLE_DATA: todoListModel[] = [
  //   {description: 'running', dueDate: '06/15/2023', priority: 'high'},

  // ];

  