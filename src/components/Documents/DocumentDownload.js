import React from 'react'
import DocTypeSection from './DocTypeSection'
import { finalReport, pp1, pp2, ppDocs, projectRegistrationDocs, researchPaper, sd1 } from './DocsList'

function DocumentDownload() {
  return (
    <div id='docs' className='docs-container'>
      <div className='center large-header'>
        Documents
      </div>
      <div className='document-box'>
        <DocTypeSection
            title={'Project Proposal'}
            docs={ppDocs}
        />
        <DocTypeSection
            title={'Status Document 1'}
            docs={sd1}
        />
        <DocTypeSection
            title={'Progress Presentation 1'}
            docs={pp1}
        />
        <DocTypeSection
            title={'Research Paper'}
            docs={researchPaper}
        />
        <DocTypeSection
            title={'Progress Presentation 2'}
            docs={pp2}
        />
        <DocTypeSection
            title={'final Report'}
            docs={finalReport}
        />
        <DocTypeSection
            title={'Project Registration Documents'}
            docs={projectRegistrationDocs}
        />
      </div>
    </div>
  )
}

export default DocumentDownload
