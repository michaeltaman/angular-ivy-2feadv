import { TableField, TablePagination, TableSetting } from 'dynamic-mat-table';
import { DynamicCellComponent } from './dynamic-cell/dynamic-cell.component';

export const tableColumnsConfig: TableField<any>[] = [
  {
    name: 'name',
    type: 'text',
    cellStyle: {
      'background-color': '#E86A92',
      color: '#ffffff',
    },
    rowSelectionable: true,
  },
  {
    name: 'phone',
    type: 'number',
  },
  {
    name: 'email',
    type: 'text',
  },
  {
    name: 'postalZip',
    type: 'number',
  },
  {
    name: 'more info',
    dynamicCellComponent: DynamicCellComponent,
    option: {},
  },
];

export const tableSettingsConfig: TableSetting = {
  rowStyle: {
    'background-color': '#C1DBE3',
    color: '#ffffff',
  },
  alternativeRowStyle: {
    'background-color': '#2B2D42',
    color: '#ffffff',
  },
  direction: 'ltr',
  visibaleActionMenu: {
    json: true,
    print: true,
    columnSettingFilter: true,
    columnSettingPin: true,
    clearFilter: true,
  },
  visibleTableMenu: true,
  autoHeight: true,
};

export const paginationConfig: TablePagination = {
  length: 0,
  pageIndex: 0,
  pageSize: 10,
  pageSizeOptions: [5, 10, 15, 20],
  showFirstLastButtons: true,
};
