```javascript
// Correct approach using $inc with a specific array element
db.collection.updateOne( { _id: 1, "arr.0": { $exists: true } }, { $inc: { "arr.0": 1 } } );

// Alternative approach using $push to add/update array elements
db.collection.updateOne( { _id: 1 }, { $push: { arr: { $each: [2], $position: 0 } } });
```