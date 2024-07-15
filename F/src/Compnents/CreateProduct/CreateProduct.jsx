import React, { useState } from 'react';

export const CreateProduct = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isAvailable, setIsAvailable] = useState(false); // Initialize as false
  const [image, setImage] = useState(null);

  const HandleSubmit = (event) => {
    event.preventDefault();

    let Product = {
      PId: 1,
      name,
      price,
      description,
      isAvailable,
      image,
    };

    props.createProd(Product);

    setName("");
    setPrice("");
    setDescription("");
    setIsAvailable(false); // Reset to false
    setImage(null); // Reset to null
  };

  return (
    <div>
      <form className="row g-3" onSubmit={HandleSubmit}>
        <div className="col-md-6">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="form-control"
            id="price"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Product Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="isAvailable"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="isAvailable">
            Is product available in stock?
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="select-image">Select product image</label>
          <input
            type="file"
            className="form-control"
            id="select-image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};
