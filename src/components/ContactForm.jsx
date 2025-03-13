import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'emailjs-com';
import ContactForm from './ContactForm';

const Dashboard = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Simuler la réception de mails (remplacer par une vraie API dans un cas réel)
    const fetchedEmails = [
      { name: 'Alice', message: 'Salut, je suis intéressée par vos services.' },
      {
        name: 'Bob',
        message: 'Bonjour, je souhaite en savoir plus sur votre produit.'
      }
    ];
    setEmails(fetchedEmails);
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: 'Nom', accessor: 'name' },
      { Header: 'Message', accessor: 'message' },
    ],
    []
  );

  const data = React.useMemo(() => emails, [emails]);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="container">
      <h1>Dashboard Admin</h1>
      <table className="table table-striped" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ContactForm />
    </div>
  );
};

export default Dashboard;
