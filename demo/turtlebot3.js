'use strict';

const rclnodejs = require('rclnodejs');

rclnodejs.init().then(() => {
  const node = rclnodejs.createNode('turtlebot3_controller');
  const Twist = rclnodejs.require('geometry_msgs/msg/Twist');
  const publisher = node.createPublisher(Twist, '/cmd_vel');

  // let msgLeft = new Twist();
  // let msgRight = new Twist();

  // msgLeft.linear.x = -2.0;
  // msgLeft.linear.y = 0.0;
  // msgLeft.linear.z = 0.0;
  // msgLeft.angular.x = 0.0;
  // msgLeft.angular.y = 0.0;
  // msgLeft.angular.z = 0.0;

  // msgRight.linear.x = 2.0;
  // msgRight.linear.y = 0.0;
  // msgRight.linear.z = 0.0;
  // msgRight.angular.x = 0.0;
  // msgRight.angular.y = 0.0;
  // msgRight.angular.z = 0.0;

  let msgLeft = {
    linear: {x: -0.15, y: 0.0, z: 0.0},
    angular: {x: 0.0, y: 0.0, z: 0.0}
  };
  let msgRight = {
    linear: {x: 0.15, y: 0.0, z: 0.0},
    angular: {x: 0.0, y: 0.0, z: 0.0}
  };  
  var count = 0;

  setInterval(() => {
    console.log('move right');
    publisher.publish(msgRight)
  }, 100);

  rclnodejs.spin(node);
}).catch((err) => {
  console.log(err);
});
