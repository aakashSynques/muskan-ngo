import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Container, Row } from 'react-bootstrap';
import policies2 from '../../assets/pdfFile/Muskaan_Publication-Catalouge_2022.pdf'
const Publication = () => {
    const pdfUrl = policies2;
    const viewerVersion = '3.11.174'; // Replace with your actual version
    const pdfjsWorker = `https://unpkg.com/pdfjs-dist@${viewerVersion}/build/pdf.worker.min.js`;
    return (
        <>
            <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Publication</h1>
                </Container>
            </div>

            <Container className='mt-5'>
                <Row>
                    {/* <main id="main" className="site-main col-sm-12 full-width ">
                        <article id="post-269" className="post-269 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div className="wp-block-file">
                                    <object className="wp-block-file__embed"
                                        data="https://muskaan.org/wp-content/uploads/2022/03/Muskaan_Publication-Catalouge_2022.pdf"
                                        type="application/pdf" aria-label="Embed of Embed of Muskaan_Publication-Catalouge_2022..">
                                    </object>
                                    <br />

                                    <a href="https://muskaan.org/wp-content/uploads/2022/03/Muskaan_Publication-Catalouge_2022.pdf">
                                        Muskaan_Publication-Catalouge_2022
                                    </a>
                                    <a href="https://muskaan.org/wp-content/uploads/2022/03/Muskaan_Publication-Catalouge_2022.pdf"
                                        className="wp-block-file__button" download="">Download
                                    </a>
                                </div>
                            </div>
                        </article>
                    </main> */}

                    {/* <div style={{ height: '500px' }}>
                        <Worker workerUrl={pdfjsWorker}>
                            <Viewer fileUrl={pdfUrl} />
                        </Worker>
                    </div> */}


                    <iframe src={policies2} width='100%' height='700px' />
                </Row>
            </Container>

        </>
    )
}

export default Publication