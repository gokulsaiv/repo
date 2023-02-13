
/*
DESCRIPTION:
Write a function which partitions a list of items based on a given predicate.

After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.

For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items. */
items = [1, 2, 3, 4, 5, 6]
function partitionOn(pred, items) {
  var f = items.filter(function (e) {
    return !pred(e);
  });
  var t = items.filter(pred);
  items.length = 0;
  for (var i = 0; i < f.length; i++) {
    items.push(f[i]);
  }
  for (var i = 0; i < t.length; i++) {
    items.push(t[i]);
  }

  return f.length;
}
function pred(x) {
        if (x % 2 == 0)
            return true;
        else
            return false;
    }
let k=partitionOn(pred,items);
console.log(k);
