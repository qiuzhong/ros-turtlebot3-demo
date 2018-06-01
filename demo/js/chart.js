function plotData(dimension) {

  var dim = dimension || 50;
  this.time = [];
  this.data = [];
  this.lastData = [];

  for (let i = 0; i < dim; i++) {
    this.time.push(-1);
    this.data.push(0);
  }

  this.updateArray = function(lastData, time) {
    var t = time || -1;

    if (this.data.length >= dimension) {
      this.data = this.data.slice(1);
      this.time = this.time.slice(1);      
    }

    this.time.push(time);
    this.data.push(lastData);
    this.lastData = lastData;
  };

  this.getLastData = function() {
    return this.lastData;
  };

  this.updatePlotData = function() {
    var res = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.time[i] === -1) {
        res.push([i, this.data[i]]);
      } else {
        res.push([this.time[i], this.data[i]]);
      }
    }

    return res;
  }
}
