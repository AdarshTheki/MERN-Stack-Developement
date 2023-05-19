import React from "react";

export default function MenuCart({ data }) {
  return (
    <>
      <section className='main-card--container'>
        {data.map((element) => {
          const {id, image, name, category, price, description } = element;
          return (
            <div className='card-container' key={id}>
              <div className='card'>
                <div className='card-body'>
                  <span className='card-number card-circle subtle'>
                    {id}
                  </span>
                  <span className='card-author subtle'>{category}</span>
                  <h2 className='card-title'>{name}</h2>
                  <span className='card-description subtle'>
                    {description}
                  </span>
                  <div className='card-read'>Read</div>
                </div>
                <img src={image} alt='image' className='card-media' />
                <span className='card-tag btn btn-primary'>Order Now </span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
