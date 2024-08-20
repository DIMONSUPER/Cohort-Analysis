import React, { CSSProperties, useEffect } from 'react'
import { type FC } from 'react'

import { Retool } from '@tryretool/custom-component-support'
import ReactCohortGraph from 'react-cohort-graph'

export const CohortAnalysisGraph: FC = () => {
  const [name, _setName] = Retool.useStateString({
    name: 'name'
  })

  const data = {
    days: {
      'Aug 2023': [
        12459, 584, 472, 465, 368, 363, 332, 377, 352, 348, 334, 395, 170
      ],
      'Sep 2023': [
        27602, 1391, 1032, 916, 828, 828, 804, 795, 835, 683, 856, 367
      ],
      'Oct 2023': [33423, 1418, 964, 1007, 937, 960, 935, 1002, 866, 1086, 457],
      'Nov 2023': [31772, 1231, 1033, 976, 977, 931, 937, 840, 1093, 386, 0],
      'Dec 2023': [26723, 1017, 917, 851, 779, 855, 674, 829, 367, 0, 0],
      'Jan 2024': [31323, 1327, 1111, 1060, 991, 907, 1105, 488, 0, 0, 0],
      'Feb 2024': [35035, 1556, 1190, 1226, 1101, 1258, 508, 0, 0, 0, 0],
      'Mar 2024': [38962, 1668, 1370, 1245, 1426, 652, 0, 0, 0, 0, 0],
      'Apr 2024': [52502, 1960, 1431, 1560, 716, 0, 0, 0, 0, 0, 0],
      'May 2024': [64158, 2221, 2035, 789, 0, 0, 0, 0, 0, 0, 0],
      'Jun 2024': [57037, 2559, 822, 0, 0, 0, 0, 0, 0, 0, 0],
      'Jul 2024': [66289, 1488, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'Aug 2024': [27715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  const headerCellStyles: CSSProperties = {
    color: '#6B7280',
    background: 'white'
  }

  const bodyCellStyles: CSSProperties = {
    color: '#111928',
    borderColor: '#E5E7EB',
    borderBottom: '1px solid #E5E7EB',
    borderTop: '1px solid #E5E7EB'
  }

  const headerLabelStyles: CSSProperties = {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '600',
    fontFamily: 'Inter'
  }

  const tableCellStyles: CSSProperties = {
    fontSize: 12,
    padding: '16px',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontFamily: 'Inter',
    border: 'none',
    borderBottom: '1px solid #E5E7EB',
    lineHeight: '18px'
  }

  const tableHeadingStyles: CSSProperties = {
    fontSize: 10
  }

  const headerValueStyles: CSSProperties = {
    fontSize: 10
  }

  const tableRowStyles: CSSProperties = {
    fontSize: 10
  }

  const tableBodyStyles: CSSProperties = {
    fontSize: 10
  }

  const fixedTablePartStyles: CSSProperties = {
    fontSize: 10
  }

  const wrapperStyles: CSSProperties = {
    fontSize: 10
  }

  const scrollableTablePartStyles: CSSProperties = {
    fontSize: 10
  }

  const scrollableTableContentStyles: CSSProperties = {
    fontSize: 10
  }

  //library styling bug fix
  useEffect(() => {
    const cohort = document.getElementById('cohortGraph')

    const firstColumnLabels: NodeListOf<HTMLElement> | undefined =
      cohort?.querySelectorAll(
        '#cohortGraph > div > div > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(1)'
      )

    firstColumnLabels?.forEach((x) => {
      x.style.setProperty('text-align', 'start')
      x.style.setProperty('font-weight', '400')
      x.style.setProperty('text-transform', 'none')
    })

    const headerLabels: NodeListOf<HTMLElement> | undefined =
      cohort?.querySelectorAll(
        '#cohortGraph > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > p'
      )

    headerLabels?.forEach((x) => x.style.removeProperty('font-size'))
  })

  return (
    <div
      id="cohortGraph"
      style={{
        height: '100%',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <ReactCohortGraph
        data={data}
        defaultValueType="value"
        shadeColor="#00755C"
        scrollableTableContentStyles={scrollableTableContentStyles}
        scrollableTablePartStyles={scrollableTablePartStyles}
        wrapperStyles={wrapperStyles}
        fixedTablePartStyles={fixedTablePartStyles}
        tableBodyStyles={tableBodyStyles}
        tableRowStyles={tableRowStyles}
        tableCellStyles={tableCellStyles}
        headerLabelStyles={headerLabelStyles}
        tableHeadingStyles={tableHeadingStyles}
        headerCellStyles={headerCellStyles}
        bodyCellStyles={bodyCellStyles}
        headerValueStyles={headerValueStyles}
        headerFormatter={function (obj: any) {
          if (obj.index && obj.index > 0) {
            return `Month ${obj.index - 1}`
          }

          if (obj.isHeader) {
            return 'Month 0'
          }

          return 'Customer Cohort'
        }}
      />
    </div>
  )
}
