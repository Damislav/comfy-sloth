// /functions/hello-world.js
const items = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "susan",
  },
  {
    id: 3,
    name: "jason",
  },
];

exports.handler = async function () {
  return {
    statusCode: 200,

    body: JSON.stringify(items),
  };
};
