import React, { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://demo.4pointx.com/_notebooks/notebooks/_all', {
      headers: {
        Authorization: 'Basic YWRtaW46OGtRM1VuVlVtU2dUWTBSWQ=='
      }
    })
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <table className='table'>
      <thead>
        <tr className='root'>
          <th>notebook_name</th>
          <th>updated_at</th>
          <th>updated_by</th>
          <th>Created_at</th>
          <th>last_run</th>
          <th>created_by</th>
          <th>no_of_runs</th>
          <th>notebook_id</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td>{item.notebook_name}</td>
            <td>{new Date(item.updated_at).toLocaleString('en-US', {month: 'short',day: '2-digit', year: 'numeric', hour: 'numeric',minute: '2-digit',hour12: true })}</td>
            <td>{item.updated_by}</td>
            <td>{new Date(item.created_at).toLocaleString('en-US',{month: 'short',day: '2-digit', year: 'numeric', hour: 'numeric',minute: '2-digit',hour12: true })}</td>
            <td>{item.last_run ? new Date(item.last_run).toLocaleString('en-US', {month: 'short',day: '2-digit', year: 'numeric', hour: 'numeric',minute: '2-digit',hour12: true }) : '-'}</td>
            <td>{item.created_by}</td>
            <td>{(item.no_of_runs).toString()}</td>
            <td>{item.notebook_id}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
