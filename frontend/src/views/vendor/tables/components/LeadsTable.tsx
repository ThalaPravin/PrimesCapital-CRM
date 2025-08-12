import React, { useState } from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import Progress from "components/progress";
import {
  MdCancel,
  MdCheckCircle,
  MdOutlineError,
  MdPending,
} from "react-icons/md";
import { useDisclosure } from "@chakra-ui/hooks";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import ModalCompo from "./ModalCompo.jsx";

type RowObj = {
  name: string;
  status: string;
  date: string;
  call: string;
  progress: number;
  action: number;
  email: string;
  address: string;
  productCategory: string;
};

const columnHelper = createColumnHelper<RowObj>();

export default function ComplexTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10); // Number of rows per page
  const [currentUserAction, setCurrentUserAction] = useState(
    tableData[0].action
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("productCategory", {
      id: "productCategory",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PRODUCT CATEGORY
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          STATUS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === "Trade Done" ? (
            <MdCheckCircle className="me-1 text-green-500 dark:text-green-300" />
          ) : info.getValue() === "In Progress" ? (
            <MdPending className="me-1 text-red-500 dark:text-red-300" />
          ) : info.getValue() === "Error" ? (
            <MdOutlineError className="me-1 text-amber-500 dark:text-amber-300" />
          ) : null}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("call", {
      id: "call",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">CALL</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("email", {
      id: "email",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">EMAIL</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("address", {
      id: "address",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          ADDRESS
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("progress", {
      id: "progress",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PROGRESS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          <Progress width="w-[108px]" value={info.getValue()} />
        </div>
      ),
    }),
    columnHelper.accessor("action", {
      id: "action",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          ACTIONS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          <button
            onClick={() => {
              setCurrentUserAction(info.getValue());
              onOpen();
            }}
            className="rounded-xl bg-gradient-to-br from-[#0083FE] to-[#00FFF0] px-5 py-1 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#0083FE]/50"
          >
            Actions
          </button>
        </div>
      ),
    }),
  ];

  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = table
    .getRowModel()
    .rows.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <ModalCompo
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        data={data}
        id={currentUserAction}
      />
      <Card extra={"w-full h-full px-6 pb-6 overflow-x-auto"}>
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Leads Table
          </div>
          <CardMenu />
        </div>

        <div className="mt-8 overflow-x-scroll">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="!border-px !border-gray-400"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: "",
                          desc: "",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {currentRows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="min-w-[150px] border-white/0 py-3  pr-4"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 rounded bg-gray-200 px-3 py-1 text-gray-700"
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastRow >= table.getRowModel().rows.length}
            className="rounded bg-gray-200 px-3 py-1 text-gray-700"
          >
            Next
          </button>
        </div>
      </Card>
    </div>
  );
}
