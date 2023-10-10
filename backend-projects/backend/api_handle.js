import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 'rec1JZlfCIBOPdcT2',
      title: 'Samsung Galaxy S8',
      price: '399.99',
      img: 'https://images2.imgbox.com/c2/14/zedmXgs6_o.png',
      amount: 1,
    },
    {
      id: 'recB6qcHPxb62YJ75',
      title: 'google pixel',
      price: '499.99',
      img: 'https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png',
      amount: 1,
    },
    {
      id: 'recdRxBsE14Rr2VuJ',
      title: 'Xiaomi Redmi Note 2',
      price: '699.99',
      img: 'https://images2.imgbox.com/4f/3d/WN3GvciF_o.png',
      amount: 1,
    },
    {
      id: 'recwTo160XST3PIoW',
      title: 'Samsung Galaxy S7',
      price: '599.99 ',
      img: 'https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png',
      amount: 1,
    },
  ];

  // http://localhost:3000/api/products?search=meta

  if (req.query.search) {
    const filterProducts = products.filter((product) => product.title.includes(req.query.search));
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server Running on Port:- ${port}`);
});
