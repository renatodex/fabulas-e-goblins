import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import showdown from 'showdown'

const Showdown = new showdown.Converter()

export default function DataTableBlock ({ tableUri }) {

  const [tableData, setTableData] = useState(null)
  const [columnNames, setColumnNames] = useState(null)

  useEffect(() => {
    async function loadData () {
      const request = await fetch(`/tables/${tableUri}.json`)
      const response = await request.json()

      setTableData(response.data)
      setColumnNames(response.column_names)
    }

    loadData()
  }, [])

  if (tableData == null) return

  const totalColumns = Object.keys((columnNames && Object.keys(columnNames)) || Object.keys(tableData[0])).length

  return (
    <div className='tailwindpage'>
      <div className="grid gap-1" style={{gridTemplateColumns: Array.from(new Array(totalColumns)).map(i => 'auto').join(' ')}}>
        {((columnNames && Object.keys(columnNames)) || Object.keys(tableData[0])).map((header, i) => (
          <div key={i} className="p-2 border bg-gray-200 font-bold">
            {columnNames?.[header] || header}
          </div>
        ))}

        {tableData.map(row => (
          Object.keys(row).map((cell, i) => (
            <div key={i} className="p-2 border">
              <div
                dangerouslySetInnerHTML={{
                  __html: Showdown.makeHtml(row[cell])
                }}
              />
            </div>
          ))
        ))}
      </div>
    </div>
  )
}
