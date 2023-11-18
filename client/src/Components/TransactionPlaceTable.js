import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Box } from '@chakra-ui/react'; // Import Box from Chakra UI

// Mock data
const mockData = [
  { id: 1, name: 'Place A', address: '123 Main St', numOrders: 25, rating: 4.5 },
  { id: 2, name: 'Place B', address: '456 Oak St', numOrders: 15, rating: 3.8 },
  { id: 2, name: 'Place B', address: '456 Oak St', numOrders: 15, rating: 3.8 },
  { id: 2, name: 'Place B', address: '456 Oak St', numOrders: 15, rating: 3.8 },
  { id: 2, name: 'Place B', address: '456 Oak St', numOrders: 15, rating: 3.8 },
  { id: 2, name: 'Place B', address: '456 Oak St', numOrders: 15, rating: 3.8 },  // Add more mock data as needed
];

const TransactionPlaceTable = () => {
  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Address', accessor: 'address' },
      { Header: 'Num Orders', accessor: 'numOrders' },
      { Header: 'Rating', accessor: 'rating' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data: mockData },
    useSortBy
  );

  return (
    <Box
      borderRadius="lg"
      boxShadow="2xl"
      overflow="hidden"
      borderColor='teal'
      borderWidth='1px'
      p={4}
    >
      <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{ borderBottom: '2px solid #ddd', padding: '8px', textAlign: 'left' }}>
                  {column.render('Header')}
                  <span style={{ marginLeft: '5px' }}>
                    {column.isSorted ? (column.isSortedDesc ? ' ' : ' ') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};

export default TransactionPlaceTable;
