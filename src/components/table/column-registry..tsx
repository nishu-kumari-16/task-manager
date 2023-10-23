import { BaseSyntheticEvent } from "react";
import { ColumnDef, Row, Table } from "@tanstack/react-table";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

type IGetModifiedColumns = (
  previousCols: Array<ColumnDef<any>>,
  extraConfig: {
    enableRowSelection?: boolean;
    enableMultiRowSelection?: boolean;
  }
) => Array<ColumnDef<any>>;

export const getModifiedColumns: IGetModifiedColumns = (
  previousCols: Array<ColumnDef<any>>,
  { enableRowSelection, enableMultiRowSelection }
) => {
  if (enableRowSelection) {
    return [
      getSelectionColumn(enableMultiRowSelection),
      ...previousCols,
    ] as Array<ColumnDef<any>>;
  }
  return previousCols;
};

function IndeterminateCheckbox({ indeterminate, ...rest }: CheckboxProps) {
  return <Checkbox indeterminate={!rest.checked && indeterminate} {...rest} />;
}

const handleCheckboxClick = (event: BaseSyntheticEvent) => {
  event.stopPropagation();
};

const getSelectionColumn = (enableMultiRowSelection?: boolean) => ({
  id: "select",
  header: ({ table }: { table: Table<any> }) => (
    <IndeterminateCheckbox
      {...{
        checked: table.getIsAllRowsSelected(),
        indeterminate: table.getIsSomeRowsSelected(),
        onChange: table.getToggleAllRowsSelectedHandler(),
        disabled: !enableMultiRowSelection,
        onClick: handleCheckboxClick,
      }}
    />
  ),
  cell: ({ row }: { row: Row<any> }) => (
    <IndeterminateCheckbox
      {...{
        checked: row.getIsSelected(),
        disabled: !row.getCanSelect(),
        indeterminate: row.getIsSomeSelected(),
        onChange: row.getToggleSelectedHandler(),
        onClick: handleCheckboxClick,
      }}
    />
  ),
});
