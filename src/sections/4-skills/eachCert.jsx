import React, { useState, useEffect, useRef } from 'react';


export const EachCert = ({eachCertTitle, eachCertContent}) => {
    return (
        <>
            <div className='eachCert__outerContainer d-flex text-start row bg-white rounded-3 text-dark py-3'>
                <div className='col-3'>
                    <img className='object-fit-cover w-100' src={eachCertContent.logo} />
                </div>
                <div className='eachCert__contentContainer col-9 px-3'>
                    <h5>{eachCertTitle}</h5>
                    <p className='text-secondary p-0 m-0'>{eachCertContent.issuedBy}</p>
                    <p className='text-secondary p-0 m-0 '><small>{eachCertContent.validity}</small></p>
                    <div className='mt-2'>
                        {eachCertContent.document!==null?<a className='me-3 mt-2' href={eachCertContent.document}>Download Certificate</a>:null}
                        {eachCertContent.link!==null?<a href={eachCertContent.link} target='_blank'className='btn btn-dark py-1 mt-2'>Show Credentials</a>:null}
                    </div>
                </div>
            </div>
        </>
    )
}