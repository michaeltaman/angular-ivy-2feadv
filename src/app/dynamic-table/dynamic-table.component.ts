import { Component, OnInit } from '@angular/core';
import { TableField, TablePagination, TableSetting } from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import {
  tableColumnsConfig,
  tableSettingsConfig,
  paginationConfig,
} from './dynamic-table.config';
import { data } from './dynamic-table.model';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  columns!: TableField<any>[];
  settings!: TableSetting;
  pagination!: TablePagination;
  dataSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.initTable(tableColumnsConfig, tableSettingsConfig, paginationConfig);
    this.setData();
  }

  initTable(
    columns: TableField<any>[],
    settings: TableSetting,
    pagination: TablePagination
  ): void {
    this.columns = columns;
    this.settings = settings;
    this.pagination = pagination;
  }

  setData(): void {
    this.dataSource.next(data);
  }
}
