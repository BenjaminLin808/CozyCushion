// domain/.netlify/functions/hello

const items = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Benjamin" },
  { id: 3, name: "Charlie" },
];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
