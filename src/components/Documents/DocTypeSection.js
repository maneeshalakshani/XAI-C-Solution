import React from 'react'
import DownloadButton from './ButtonCustom'

function DocTypeSection({title, docs}) {
  return (
    <div>
      <div className='docType-title'>
        {title}
      </div>
      <div className='doc-table'>
        {
            docs.map((doc, index) => (
                <div key={index} className='doc-item' style={((docs.length - 1) % 4) !== 0 ? {marginRight: '24.67px'} : {marginRight: '0px'}}>
                    <div className='doc-content'>
                      <p>{doc.docTitle}</p>
                      <img 
                        src='https://grackledocs.com/wp-content/uploads/2023/09/pdf.png'
                        height={'150px'}
                        style={{marginBottom: '20px', borderRadius: '8px'}}
                      />
                      <DownloadButton title={doc.docTitle} paper={doc.paper} />
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default DocTypeSection
