function ROS2DMap(ros, options) {

  var opt = options || {};
  var divName = options.divName || 'two-d-map';
  var width = options.width || 400;
  var height = options.height || 400;
  var size = 1.0;
  var oldPose = {x: 0.0, y: 0.0};
  var center = {x: 0.5, y: 0.5};
  var shift = {x: 0.0, y: 0.0};
  var limit = {x: 0.1, y: 0.1};

  // ----------------------------------------------------------------------
  // Displaying a map
  // ----------------------------------------------------------------------

  // The ROS2D.Viewer is a 2D scene manager with additional ROS
  // functionality.
  var viewer2D = new ROS2D.Viewer({
    divID: divName,
    width: width,
    height: height,
    background: '#dddddd'
  });

  this.gridClient = new ROS2D.OccupancyGridClient({
    ros: ros,
    rootObject: viewer2D.scene
  });

  var grid = new ROS2D.Grid({
    size: 10,
    cellSize: 0.10
  });
  this.gridClient.rootObject.addChild(grid);

  var robotMaker = new ROS2D.NavigationArrow({
    size: 5,
    strokeSize: 0.5,
    fillColor: createjs.Graphics.getRGB(64, 128, 255, 0.62),
    pulse: false
  });
  this.gridClient.rootObject.addChild(robotMaker);

  viewer2D.scaleToDimensions(1, 1);
  viewer2D.shift(-center.x, -center.y);

  robotMaker.x = 0;
  robotMaker.y = 0;
  robotMaker.scaleX = 0.01;
  robotMaker.scaleY = 0.01;
  robotMaker.rotation = 90;
  robotMaker.visible = true;

  this.update = function(pose, orientation) {
    console.log(pose.x, pose.y);
    robotMaker.x = pose.x;
    robotMaker.y = -pose.y;

    robotMaker.rotation = viewer2D.scene.rosQuaternionToGlobalTheta(orientation);
    if (oldPose.x !== pose.x || oldPose.y !== pose.y) {
      viewer2D.shift( - oldPose.x + pose.x, - oldPose.y + pose.y);
      oldPose = pose;
    }
  };
}
