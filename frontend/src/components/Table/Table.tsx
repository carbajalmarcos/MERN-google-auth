import { useDispatch, useSelector } from "react-redux";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Budget } from "../../models";
import { RootState } from "../../redux/store";
import { Interface } from "readline";

const columnHelper = createColumnHelper<Budget>();


interface Column {
  Header: string;
  accessor?: string | ((originalRow: any, rowIndex: number) => any);
  Cell?: any;
  imgAccessor?: string;
  emailaccessor?: string;
  Filter?: any;
  filter?: string;
}

interface ITableProps {
  columns: Column[];
  data: object[];
  useFilter?: boolean;
}

// export const MainTable = ({ columns, data, useFilter = false }: ITableProps) => {
export const MainTable = ({ columns, data }: ITableProps) => {




  // const dispatch = useDispatch();
  // const {
  //   budget: { budgets },
  // } = useSelector((store: RootState) => store);

  const table = useReactTable({
    data,
    //@ts-ignore
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTable;
