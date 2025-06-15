// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path = "./crud.d.ts" />

import * as CRUD from './crud';
import { RowElement, RowID } from './interface';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const updatedRow: RowElement = {
  ...row,
  age: 23,
};

const rowID: RowID = CRUD.insertRow(row);
CRUD.updateRow(rowID, updatedRow);
CRUD.deleteRow(rowID);
