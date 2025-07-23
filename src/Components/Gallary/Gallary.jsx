import React, { useState } from 'react'
import logo from '../../assets/1.jpg'
import logoo from '../../assets/2.jpg'
import logooo from '../../assets/3.jpg'

export default function Gallary() {
  const images = [logo, logoo, logooo, logo, logoo, logooo]
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (imgSrc) => setSelectedImage(imgSrc)
  const closeModal = () => setSelectedImage(null)

  return (
    <>
      <div className="container mb-5">
        <h2 className="text-uppercase text-center fw-bold mt-4">portfolio component</h2>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="bg-dark" style={{ height: '4px', width: '80px' }}></div>
          <div className="mx-3 fs-4 text-dark">★</div>
          <div className="bg-dark" style={{ height: '4px', width: '80px' }}></div>
        </div>

        <div className="row g-3 justify-content-center">
          {images.map((img, index) => (
            <div className="col-md-4" key={index}>
              <div className="gallery-item" onClick={() => openModal(img)}>
                <img src={img} className="w-100" alt={`gallery-${index}`} />
                <div className="overlay">
                  <i className="fa-solid fa-plus icon"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'pointer',
          }}
        >
          <img
            src={selectedImage}
            alt="enlarged"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              border: '5px solid white',
              borderRadius: '10px',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
