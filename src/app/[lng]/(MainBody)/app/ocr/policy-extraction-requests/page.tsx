'use client';

import { useState } from 'react';

export default function PolicyExtractionTable() {
  const [filters, setFilters] = useState({
    status: '',
    uploadedBy: '',
    dateFrom: '',
    dateTo: '',
  });

  const data = [
    {
      status: 'Success',
      uploadedOn: '22-May-2025',
      file: 'b53a76b2-cbb5-435d-b2c8-7146b3061...',
      uploadedBy: 'RAHUL CHOUDHARY',
      failedRemark: '-',
      pdfUrl: '/sample1.pdf',
    },
    {
      status: 'Success',
      uploadedOn: '13-May-2025',
      file: 'cc834cdd-d2ae-4861-9621-c9d33b3d2...',
      uploadedBy: 'RAHUL CHOUDHARY',
      failedRemark: '-',
      pdfUrl: '/sample2.pdf',
    },
  ];

  const filteredData = data.filter((item) =>
    (filters.status ? item.status === filters.status : true) &&
    (filters.uploadedBy ? item.uploadedBy.toLowerCase().includes(filters.uploadedBy.toLowerCase()) : true)
  );

  const resetFilters = () => {
    setFilters({ status: '', uploadedBy: '', dateFrom: '', dateTo: '' });
  };

  return (
    <div className="card p-4">
      <h4 className="fw-bold mb-4">Policy Extraction Requests</h4>

      <div className="row g-3 align-items-end mb-4">
        <div className="col-md-3">
          <select
            className="form-select"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">Extraction Status</option>
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
          </select>
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Uploaded By"
            value={filters.uploadedBy}
            onChange={(e) => setFilters({ ...filters, uploadedBy: e.target.value })}
          />
        </div>

        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            value={filters.dateFrom}
            onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
          />
        </div>

        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            value={filters.dateTo}
            onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
          />
        </div>

        <div className="col-md-2 d-flex gap-2">
          <button className="btn   btn-primary" onClick={resetFilters}>
       Reset
          </button>
          <button className="btn btn-primary w-100">
            Search
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th>Extraction Status</th>
              <th>Uploaded On</th>
              <th>File</th>
              <th>Uploaded By</th>
              <th>Failed Remark</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, i) => (
              <tr key={i}>
                <td className="text-success fw-semibold">{item.status}</td>
                <td>{item.uploadedOn}</td>
                <td className="text-truncate" style={{ maxWidth: 200 }}>{item.file}</td>
                <td>{item.uploadedBy}</td>
                <td className="text-danger">{item.failedRemark}</td>
                <td>
                  <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-download text-primary"></i>
                  </a>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-muted">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
