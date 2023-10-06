import express from 'express';

const app = express();

// dist static website run (Bad Practices)
app.use(express.static('dist'))

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      categories: [],
      created_at: '2020-01-05 13:42:21.179347',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'LxdZRatXQpyJrf6s4NV7KA',
      updated_at: '2020-01-05 13:42:21.179347',
      url: 'https://api.chucknorris.io/jokes/LxdZRatXQpyJrf6s4NV7KA',
      value:
        'Some have said to seeing Chuck Norris levitate. Truth is, Earth just moves down when he farts.',
    },
    {
      categories: [],
      created_at: '2020-01-05 13:42:25.352697',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'qt5s1AcRR8Sv2uCp_SQlHQ',
      updated_at: '2020-01-05 13:42:25.352697',
      url: 'https://api.chucknorris.io/jokes/qt5s1AcRR8Sv2uCp_SQlHQ',
      value:
        'Batman, Spiderman, and Superman were at a wall when Chuck Norris walked up. "We Super Heroes can climb, scale, or use X-ray vision to see through this wall. What can you do Chuck Norris?" Chuck Norris turned and looked at the Wall which then let out a horrific scream, "Oh Hell NO! I am out of here!"',
    },
    {
      categories: [],
      created_at: '2020-01-05 13:42:24.142371',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'BUNG1lV1TvydbVDfTv3C6g',
      updated_at: '2020-01-05 13:42:24.142371',
      url: 'https://api.chucknorris.io/jokes/BUNG1lV1TvydbVDfTv3C6g',
      value:
        "Superman's only weakness is Kryptonite which interestingly is the scientific name given to Chuck Norris' boogers.",
    },
  ];
  res.send(jokes);
})

// port default
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
