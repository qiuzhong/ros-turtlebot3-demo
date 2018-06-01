function ROS3DMap(ros, options) {
  var opt = options || {};
  var divName = options.divName || 'three-d-map' ;
  var width = options.width || 400;
  var height = options.height || 400;
  var path = options.path || 'localhost';
  var fixedFrame = options.fixedFrame || '/odom';

  var viewer3D = new ROS3D.Viewer({
    ros: ros,
    divID: divName,
    width: width,
    height: height,
    antialias: true
  });

  viewer3D.addObject(new ROS3D.Grid({
    size: 20,
    cellSize: 0.5
  }));

  var tfClient = new ROS3D.TFClient({
    ros: ros,
    angularThres: 0.01,
    transThres: 0.01,
    rate: 20.0,
    
  })
}
